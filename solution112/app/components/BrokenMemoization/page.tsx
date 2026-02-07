"use client"

import React, { useState, useCallback } from "react";
import { memo } from "react";

type ChildProps = {
  onClick: () => void;
};


const ChildName = memo(({ onClick }: ChildProps) => {
  console.log("Child render");
  return <button onClick={onClick}>Click</button>;
});

ChildName.displayName = 'ChildName';

export default function Memoization() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
      <ChildName onClick={handleClick} />
    </>
  );
}
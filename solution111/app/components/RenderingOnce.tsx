"use client"

import React, { useState, useCallback } from "react";

interface ChildProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Child = React.memo(function Child({ onClick }: ChildProps) {
  console.log("Child render");
  return <button onClick={onClick}>Click</button>;
});

export default function RenderingOnce() {
    const [count, setCount] = useState(0);

    const handleChildClick = useCallback(() => {
        console.log("Child clicked");
    }, []);

    return (
        <>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        <Child onClick={handleChildClick} />
        { count}
        </>
    )
}
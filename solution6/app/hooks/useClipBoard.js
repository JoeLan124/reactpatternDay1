"use client"

import { useState } from "react";


function useClipboard(textToCopy) {
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState(null);

  const copy = async () => {
    setIsCopied(false);
    setError(null);

    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("copying went wrong:", err);
      setError(err);
      setIsCopied(false);
    }
  }

  return { copy, isCopied, error };
}

export default useClipboard;

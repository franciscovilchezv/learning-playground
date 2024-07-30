"use client";

import { useState } from "react";

export default function TaskPage() {
  const [word, setWord] = useState("");
  const [message, setMessage] = useState("");

  function validateValue() {
    if (isPalindrome(word)) {
      setMessage("It's is palindrome");
    } else {
      setMessage("It's not a palindrome");
    }
  }

  function isPalindrome(word: string) {
    return word.split("").reverse().join("") === word;
  }

  return (
    <div className="p-16 text-center space-y-8">
      <div className="text-5xl text-green-950">Is it palindrome?</div>

      <div className="space-x-4">
        <label>Word:</label>
        <input
          className="max-w-sm max-h-8 border border-green-950 rounded-md px-2"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        ></input>
      </div>

      <div className="space-x-4">
        <button className="btn-primary" onClick={validateValue}>
          Verify
        </button>
        <button
          className="btn-primary"
          onClick={() => {
            setWord("");
            setMessage("");
          }}
        >
          Clear
        </button>
      </div>

      {message && (
        <div>
          <p className="text-amber-900">{message}</p>
        </div>
      )}
    </div>
  );
}

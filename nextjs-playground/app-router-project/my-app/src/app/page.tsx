"use client";

import { useCallback, useState } from "react";

export default function Home() {
  const [flag, setFlag] = useState("myFlag");

  const myFunction = () => {
    console.log("Running myFunction()");

    return flag;
  };

  const myCallback = useCallback(() => {
    console.log("myCallback");

    return flag;
  }, []);

  return (
    <main>
      <div>
        {/* <p>{flag}</p> */}
        <p>{myCallback()}</p>
        {/* <p>{flag && myFunction()}</p> */}
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

const SumPage = () => {
  const [first, setFirst] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  return (
    <div className="h-[100vh] flex flex-col items-center mt-20">
      <Link
        className="bg-red-500 absolute top-3 left-3 px-3 p-1 rounded-sm"
        href={"/"}
      >
        go back
      </Link>
      <h1 className="text-2xl font-bold">SUM Page</h1>
      <div className="mt-5 m-1 p-5 max-w-[700px] w-[100%]">
        <div className="flex gap-2 box-border justify-center">
          <input
            className="text-black text-2xl w-24"
            type="number"
            value={first}
            onChange={(e) => setFirst(parseInt(e.target.value))}
          />
          <span> + </span>
          <input
            className="text-black text-2xl w-24"
            type="text"
            value={second}
            onChange={(e) => setSecond(parseInt(e.target.value))}
          />
          <span> = </span>
          <span className="text-2xl"> {first + second}</span>
        </div>
      </div>
    </div>
  );
};

export default SumPage;

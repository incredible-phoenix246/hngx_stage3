"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex items-center justify-center w-[100vw] h-[100vh]'>
      <h2 className='text-2xl text-grey-700'>Something went wrong!</h2>
      <button
        className='px-2 py-2 bg-black text-white text-sm'
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}

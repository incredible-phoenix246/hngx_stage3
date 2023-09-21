"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center flex-col'>
      <h1>Page Not Found</h1>
      <p>Redirecting to the home page...</p>
    </div>
  );
};

export default NotFoundPage;

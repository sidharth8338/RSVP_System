"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const navigate = useRouter();
  useEffect(() => {
    navigate.push("/login");
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Loading ...
      </div>
    </main>
  );
}

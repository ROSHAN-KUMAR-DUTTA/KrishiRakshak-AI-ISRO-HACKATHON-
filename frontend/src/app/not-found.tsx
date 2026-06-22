"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Headset, Home, Leaf, Mail, MoveLeft } from "lucide-react";

const NotFound = () => {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    setCanGoBack(window.history.length > 2);
  }, []);

  return (
    <div className="text-black h-full w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white h-full w-full rounded-xl">
        {/* Left Side */}
        <div className="flex flex-col p-20 pr-0 z-10">
          <div className="flex items-center text-[#04321c] font-bold text-9xl">
            <span>4</span>

            <span className="relative mx-1">
              0
              <Leaf
                className="absolute inset-0 m-auto text-white fill-green-600"
                size={24}
                strokeWidth={0.5}
              />
            </span>

            <span>4</span>
          </div>

          <h2 className="text-3xl font-bold mt-2">Page Not Found</h2>

          <div className="h-1.5 w-14 bg-[#4b9d39] rounded-full mt-5 mb-5"></div>

          <p className="text-xl font-bold text-[#767c82] max-w-lg">
            The page you're looking for doesn't exist, may have been moved, or
            the URL is incorrect.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              href="/"
              className="flex items-center justify-center gap-3 rounded-xl bg-[#05351f] px-6 py-4 text-white transition hover:bg-[#074227] active:scale-95"
            >
              <Home size={20} />
              <span>Go to Dashboard</span>
            </Link>

            <button
              onClick={() => {
                if (canGoBack) router.back();
                else router.push("/");
              }}
              className="flex items-center justify-center gap-3 rounded-xl border-2 border-[#c1c3c5] px-6 py-4 text-[#05351f] transition hover:bg-[#f5f5f5] active:scale-95"
            >
              <MoveLeft size={20} />
              <span>{canGoBack ? "Go Back" : "Go Home"}</span>
            </button>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="relative flex min-h-[550px] items-center">
          <Image
  src="/404-not-found.png"
  alt="404 Not Found"
  width={753}
  height={550}
  priority
  style={{
    width: "753px",
  }}
/>
        </div>

        {/* Bottom Card */}
        <div className="col-span-1 md:col-span-2 m-5 mt-0 flex items-center justify-between rounded-2xl bg-[#f8faf7] p-8 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
          <div className="flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e2ece1]">
              <Headset className="text-[#0a4324]" size={38} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-[#0a4324]">Need Help?</h1>

              <p className="text-[#767c82]">
                If you believe this is an error or need assistance, our support
                team is here to help you.
              </p>
            </div>
          </div>

          <Link
            href="mailto:rk.dutta.28112007@gmail.com?subject=Support Request - KrishiRakshak AI"
            className="flex items-center gap-2 rounded-xl border border-[#c2d2c8] px-6 py-4 font-bold text-[#0a4324] transition hover:bg-[#eaede9] active:scale-95"
          >
            <Mail size={20} />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

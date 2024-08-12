"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav>
        <figure>
          <Image
            className="pointer-events-none"
            draggable="false"
            src="/images/homebow.svg"
            alt="TheRealGRBow Logo"
            width="500"
            height="500"
          />
        </figure>
      </nav>
    </>
  );
}

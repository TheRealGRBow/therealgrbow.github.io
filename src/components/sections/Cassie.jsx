"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Cassieimage() {
  return (
    <>
      <nav>
        <figure>
          <Image
            className="pointer-events-none"
            draggable="false"
            src="/images/Cassie.svg"
            alt="her"
            width="500"
            height="500"
          />
        </figure>
      </nav>
    </>
  );
}

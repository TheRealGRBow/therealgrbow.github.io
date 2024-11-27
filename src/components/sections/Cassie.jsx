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
            src="/images/Cassie.jpg"
            alt="her"
            width="200"
            height="200"
          />
        </figure>
      </nav>
    </>
  );
}

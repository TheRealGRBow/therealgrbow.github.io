"use client";

import { useEffect } from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <nav>
        <figure>
          <img
            className="pointer-events-none"
            draggable="false"
            src="/images/therealgrbow.png"
            alt="TheRealGRBow Logo"
          />
        </figure>
      </nav>
    </>
  );
}

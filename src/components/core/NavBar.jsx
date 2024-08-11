"use client";

import { Spin as Hamburger } from "hamburger-react";
import React, { useEffect } from "react";
import handleScroll from "@/utils/scrollHandler";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    console.log("scroll event listener mounted");

    return () => {
      document.removeEventListener("scroll", handleScroll);
      console.log("scroll event listener removed");
    };
  }, []);

  const [isOpen, setOpen] = useState(false);

  return (
    <nav
      className="fixed w-full transition-all duration-300 z-10 md:text-2xl"
      id="navbar"
    >
      <ul className="flex space-x-2 lg:space-x-10">
        <div className="lg:hidden">
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
          {isOpen && (
            <div className="fixed left-0 shadow-4xl right-0 p-5 pt-0 bg-blue-900/95">
              <ul className="grid grid-rows-3 grid-cols-3">
                <li>
                  <a
                    href="/#home"
                    className="hover:text-yellow-500 flex flex-col items-center"
                  >
                    <p>Home</p>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </ul>
      <ul className="flex justify-center space-x-2 lg:space-x-10">
        <div className="flex-row lg:inline-flex hidden space-x-8 space-y-8 items-center">
          <li></li>
          <li>
            <a
              href="/#home"
              className="hover:text-yellow-500 flex flex-col items-center"
            >
              <p>Home</p>
            </a>
          </li>
          <li></li>
        </div>
      </ul>
    </nav>
  );
}

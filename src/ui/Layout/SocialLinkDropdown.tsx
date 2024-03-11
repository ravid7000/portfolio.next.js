"use client";

import Image from "next/image";
import { SocialLinks } from "./SocialLinks";
import { MouseEventHandler, useEffect, useRef, useState } from "react";

export function SocialLinksDropdown() {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu: MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt?.preventDefault();
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleCloseMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClick = (evt: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(evt.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="inline-flex items-center justify-center w-8 h-8"
        onClick={toggleMenu}
        title="Follow me"
        type="button"
      >
        <Image
          width="24"
          height="24"
          src="./icons/more.svg"
          alt="Menu"
          className="text-slate-400"
        />
      </button>
      {isMenuOpen && (
        <div className="absolute bg-white right-0 w-[160px] shadow-2xl rounded-xl overflow-hidden">
          <SocialLinks onClick={handleCloseMenu} />
        </div>
      )}
    </div>
  );
}

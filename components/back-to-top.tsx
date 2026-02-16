"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-sm border-2 border-amber-600 bg-amber-950/90 text-amber-400 shadow-lg transition-all duration-200 hover:border-amber-500 hover:bg-amber-900/90 hover:text-amber-300 active:scale-95"
      aria-label="Nazaj na vrh"
    >
      <ArrowUp className="h-5 w-5" />
    </a>
  );
}

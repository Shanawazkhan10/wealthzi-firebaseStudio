"use client";
import { useEffect } from "react";

export default function BodyClassSetter() {
  useEffect(() => {
    try {
      document.documentElement.classList.add("scroll-smooth", "overflow-x-hidden");
      document.body.classList.add("font-body", "antialiased", "overflow-x-hidden");
    } catch {}
  }, []);
  return null;
}

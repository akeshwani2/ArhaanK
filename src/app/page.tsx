"use client";
import Header from "./components/Header";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Overview from "./components/Overview";
export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    // Remove leading slash and scroll to section
    const section = pathname?.slice(1) || "overview";
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Overview />
    </div>
  );
}

import Link from "next/link";
import React from "react";
import { Github, Linkedin, Sparkle } from "lucide-react";
const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-between">
      <div className="container pt-4 pb-4 ">
        <h1 className="text-4xl justify-start">
          <Link href="/">ak.</Link>
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <Link
            href="https://github.com/akeshwani2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="hover:text-gray-400 transition-all duration-200" />
          </Link>
        </div>
        <div>
          <Link
            href="https://www.linkedin.com/in/arhaan-keshwani/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="hover:text-gray-400 transition-all duration-200" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

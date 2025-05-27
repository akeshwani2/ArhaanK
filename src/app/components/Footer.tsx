import Link from "next/link";
import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import TwitterIcon from "../../../public/twitter.svg";

const Footer = () => {
  return (
    <footer className="w-full md:px-0 lg:px-0 flex items-center justify-between">
      
      <div className="flex items-center gap-4">
      <div>
          <Link
            href="https://x.com/akeshwan1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-all duration-200 hover:scale-105"
          >
            <TwitterIcon className=" transition-all duration-200 hover:scale-105" />
          </Link>
        </div>
        <div>
          <Link
            href="https://www.linkedin.com/in/arhaan-keshwani/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-all duration-200 hover:scale-105"
          >
            <Linkedin className="transition-all duration-200 hover:scale-105" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

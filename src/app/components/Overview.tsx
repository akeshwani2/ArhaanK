import Link from "next/link";
import React from "react";
import Footer from "./Footer";
import { Linkedin } from "lucide-react";

const Overview = () => {
  return (
    <div className="flex flex-col bg-white animate-fade-in-up duration-1000 px-12 md:px-60 md:py-40 py-28 tracking-tighter">
      <div className="text-black mb-16 text-6xl font-light tracking-tight">
        Arhaan Keshwani
      </div>
      <div className="text-xl md:text-2xl mb-12 font-light tracking-tight text-black/50 items-center animate-fade-in-up">
        currently working on{" "}
        <a
          className="text-black"
          href="https://elevenmails.com"
          target="_blank"
        >
          <span className="hover:scale-105 transition-transform duration-200 ease-in-out inline-block">
            eleven
          </span>
        </a>{" "}
        — a true personal assistant.
      </div>
      <div className="text-xl md:text-2xl mb-12 font-light tracking-tight text-black/50 items-center animate-fade-in-up">
        previously, i've worked on{" "}
        <a className="text-black" href="https://ev0.xyz" target="_blank">
          <span className="hover:scale-105 transition-transform duration-200 ease-in-out inline-block">
            echo,
          </span>
        </a>
        <a
          className="text-black"
          href="https://github.com/akeshwani2/AK-Notch"
          target="_blank"
        >
          <span className="hover:scale-105 ml-1 mr-1 transition-transform duration-200 ease-in-out inline-block">
            notch,
          </span>
        </a>
        and
        <a className="text-black" href="https://lyra.services" target="_blank">
          <span className="hover:scale-105 ml-1 mr-1 transition-transform duration-200 ease-in-out inline-block">
            lyra
          </span>
          <span className="text-black/50 hover:scale-100">(nvidia backed & recently acquired).</span>
        </a>
      </div>
      <div className="text-xl md:text-2xl mb-12 font-light tracking-tight text-black/50 items-center animate-fade-in-up">
        studying CS at GSU.
      </div>
      
      {/* <div className="text-xl md:text-2xl mb-12 font-light tracking-tight text-black/50 items-center animate-fade-in-up">
        some of my work - <a href="/journey" className="text-black">work</a>
      </div> */}
      
      <div className="text-black/50 animate-fade-in-up">
        <Footer />
      </div>
    </div>
  );
};

export default Overview;

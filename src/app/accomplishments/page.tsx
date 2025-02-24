"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
const Experience = () => {
  const [expandedImage, setExpandedImage] = React.useState<string | null>(null);
  const ImageModal = ({
    src,
    onClose,
  }: {
    src: string;
    onClose: () => void;
  }) => (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex animate-fade-in-up-fast transition-opacity items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="w-full max-w-6xl border border-gray-600 border-opacity-50 rounded-lg">
        <img src={src} alt="Expanded" className="w-full rounded-lg" />
      </div>
    </div>
  );

  return (
    <div className="items-center tracking-tight justify-items-center">
      <Header />

      <div className="px-4 animate-fade-in-up-2 border-b border-gray-600 border-opacity-50 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 container pb-10 pt-10 transition-opacity duration-500">
        <div className="flex flex-col gap-2 order-1">
          <p className="text-sm text-gray-400">2024</p>
          <h1 className="text-xl md:text-2xl text-white tracking-tight flex items-center gap-2">
            Lyra
          </h1>
          <p className="text-gray-400 text-sm md:text-md">
            My passion project turned productivity powerhouse. Lyra started with
            a simple idea: to make productivity effortless and intuitive. With the backing of NVIDIA's Inception Program, and our investors, I am working hard to turn that vision into a reality. Lyra currently helps over 300+ users' streamline their academic and professional lives.
          </p>
          <div className="pt-2">
            <div
              className="hover:scale-105 border border-gray-600 border-opacity-50 rounded-lg transition-all duration-300 cursor-pointer"
              onClick={() =>
                setExpandedImage(
                  "https://my-website-videos-akport.s3.us-east-1.amazonaws.com/users.png"
                )
              }
            >
              <img
                src="https://my-website-videos-akport.s3.us-east-1.amazonaws.com/users.png"
                alt="Lyra"
                className="w-fit max-h-[100px]"
              />
            </div>
          </div>
          <div className="pt-4 pb-4">
            <Link href="https://lyra.services" target="_blank" rel="noopener noreferrer">
            <button className="bg-transparent hover:scale-110 border border-white hover:bg-white hover:text-black transition-all duration-200 text-white px-2 py-1 rounded-lg w-fit">
            
                View
            </button>
            </Link>
          </div>

          {/* Item 2 */}
          <div className="flex pt-4 border-t border-gray-600 border-opacity-50 flex-col gap-2 order-1">
            <p className="text-sm text-gray-400">2025</p>

            <h1 className="text-xl md:text-2xl text-white tracking-tight flex items-center gap-2">

              Sunday
            </h1>
            <p className="text-gray-400 text-sm md:text-md">
              An AI-powered web, email, & calendar assistant. I realized how much time I spent scrolling through a packed inbox, so I built Sunday to help me get through it faster. Sunday can help you get through your inbox faster, and make sure you don't miss important emails, summarize your emails, adjust your calendar, and has a Perplexity like interface to surf the web, all in one place.
            </p>
            {/* <div className="pt-2">
              <div
                className="hover:scale-105 border border-gray-600 border-opacity-50 rounded-lg transition-all duration-300 cursor-pointer"
                onClick={() =>
                  setExpandedImage(
                    "https://my-website-videos-akport.s3.us-east-1.amazonaws.com/users.png"
                  )
                }
              >
                <img
                  src="https://my-website-videos-akport.s3.us-east-1.amazonaws.com/users.png"
                  alt="Lyra"
                  className="w-fit max-h-[100px]"
                />
              </div>
            </div> */}
            <div className="pt-4 pb-4">
              <Link href="https://sundays.services" target="_blank" rel="noopener noreferrer">
              <button className="bg-transparent hover:scale-110 border border-white hover:bg-white hover:text-black transition-all duration-200 text-white px-2 py-1 rounded-lg w-fit">

                  View
              </button>
              </Link>
            </div>

            {/* Item 3 */}
            <div className="flex pt-4 border-t border-gray-600 border-opacity-50 flex-col gap-2 order-1">
              <p className="text-sm text-gray-400">2024</p>
              <h1 className="text-xl md:text-2xl text-white tracking-tight">
                AK Notch
              </h1>
              <p className="text-gray-400 text-sm md:text-md">
                A sleek and intuitive macOS utility designed to enhance your
                productivity. It provides a convenient drag-and-drop tray for
                quick file handling/storing and transfer, AirDrop integration,
                and includes customizable settings to suit your workflow.
                Currently, over 300+ users use AK Notch in their daily workflow.
              </p>
              <div className="pt-4">
                <Link href="https://github.com/akeshwani2/AK-Notch" target="_blank" rel="noopener noreferrer">
                <button className="bg-transparent hover:scale-110 border border-white hover:bg-white hover:text-black transition-all duration-200 text-white px-2 py-1 rounded-lg w-fit">

                    View
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Resume */}
        <div className="order-2 group relative hover:scale-105 transition-all duration-300">
          <img
            src="https://my-website-videos-akport.s3.us-east-1.amazonaws.com/resumeImage.png"
            alt="resume"
            className="h-[875px] mt-2 w-full object-contain group-hover:blur-sm transition-all duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a
                href="https://drive.google.com/file/d/1H2FsXPrxPJodQSmTcfIa1ns_cDLlvTEA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
            <button className="bg-black hover:bg-black/50 border border-white hover:text-white transition-all duration-200 text-white px-6 py-3 rounded-lg">

                View
            </button>
            </a>

          </div>
        </div>
      </div>
      <div className="w-full md:px-24">
        <Footer />
      </div>
      {expandedImage && (
        <ImageModal
          src={expandedImage}
          onClose={() => setExpandedImage(null)}
        />
      )}
    </div>
  );
};

export default Experience;

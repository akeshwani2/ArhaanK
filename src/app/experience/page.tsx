"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Experience = () => {
  const [expandedVideo, setExpandedVideo] = React.useState<string | null>(null);

  const VideoModal = ({
    src,
    onClose,
  }: {
    src: string;
    onClose: () => void;
  }) => (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="w-full max-w-6xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
  return (
    <div className="items-center animate-fade-in-up-2 justify-items-center">
      <Header />
      <div className="px-4 border-b border-gray-600 border-opacity-50 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 container pb-10 pt-10 transition-opacity duration-500">
        <div className="flex flex-col gap-2 order-1">
          <h1 className="text-2xl md:text-4xl text-white tracking-tight">
            Lyra
          </h1>
          <p className="text-gray-400 text-sm md:text-lg">
            AI companion for productivity, backed by NVIDIA's Inception Program.
          </p>

          <div className="pt-8">
            <button className="bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-200 text-white px-4 py-2 rounded-lg w-fit">
              <a
                href="https://lyra.services"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </button>
          </div>
        </div>
        <div
          className="order-2 cursor-zoom-in"
          onClick={() =>
            setExpandedVideo(
              "https://my-website-videos-akport.s3.us-east-1.amazonaws.com/Personalized+Chrome+Extension.mp4"
            )
          }
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="rounded-lg"
          >
            <source
              src="https://my-website-videos-akport.s3.us-east-1.amazonaws.com/Personalized+Chrome+Extension.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="px-4 border-b border-t border-gray-600 border-opacity-50 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 container pb-10 pt-10 transition-opacity duration-500">
        <div className="flex flex-col gap-2 order-1">
          <h1 className="text-2xl md:text-4xl text-white tracking-tight">
            Sunday
          </h1>
          <p className="text-gray-400 text-sm md:text-lg">
            AI-powered web, email, & calendar assistant. $6,000+ raised.
          </p>
          <div className="pt-8">
            <button className="bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-200 text-white px-4 py-2 rounded-lg w-fit">
              <a
                href="https://sundays.services"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </button>
          </div>
        </div>
        <div
          className="order-2 cursor-zoom-in"
          onClick={() =>
            setExpandedVideo(
              "https://my-website-videos-akport.s3.us-east-1.amazonaws.com/Introducing+Sundae+AI+Assistant.mp4"
            )
          }
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="rounded-lg"
          >
            <source
              src="https://my-website-videos-akport.s3.us-east-1.amazonaws.com/Introducing+Sundae+AI+Assistant.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="px-4 border-b border-t border-gray-600 border-opacity-50 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 container pb-10 pt-10 transition-opacity duration-500">
        <div className="flex flex-col gap-2 order-1">
          <h1 className="text-2xl md:text-4xl text-white tracking-tight">
            AK Notch
          </h1>
          <p className="text-gray-400 text-sm md:text-lg">
            MacOS utility with a drag-and-drop tray, and AirDrop integration.
            300+ users.
          </p>
          <div className="pt-8">
            <button className="bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-200 text-white px-4 py-2 rounded-lg w-fit">
              <a
                href="https://github.com/akeshwani2/AK-Notch"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </button>
          </div>
        </div>
        <div
          className="order-2 cursor-zoom-in"
          onClick={() =>
            setExpandedVideo(
              "https://my-website-videos-akport.s3.us-east-1.amazonaws.com/Introducing+Sundae+AI+Assistant.mp4"
            )
          }
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="rounded-lg"
          >
            <source
              src="https://my-website-videos-akport.s3.us-east-1.amazonaws.com/Introducing+Sundae+AI+Assistant.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="px-4 border-b border-t border-gray-600 border-opacity-50 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 container pb-10 pt-10 transition-opacity duration-500">
        <div className="flex flex-col gap-2 order-1">
          <h1 className="text-2xl md:text-4xl text-white tracking-tight">
            EVO
          </h1>
          <p className="text-gray-400 text-sm md:text-lg">
            AI agent that processes messages through a sophisticated pipeline,
            leveraging various tools and APIs to provide intelligent responses.
          </p>
          <div className="pt-8">
            <button className="bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-200 text-white px-4 py-2 rounded-lg w-fit">
              <a
                href="https://ev0.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </button>
          </div>
        </div>
        <div
          className="order-2 cursor-zoom-in"
          onClick={() =>
            setExpandedVideo(
              "https://my-website-videos-akport.s3.us-east-1.amazonaws.com/Introducing+Sundae+AI+Assistant.mp4"
            )
          }
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="rounded-lg"
          >
            <source
              src="https://my-website-videos-akport.s3.us-east-1.amazonaws.com/Introducing+Sundae+AI+Assistant.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {expandedVideo && (
        <VideoModal
          src={expandedVideo}
          onClose={() => setExpandedVideo(null)}
        />
      )}
      <div className="w-full px-24">
        <Footer />
      </div>
    </div>
  );
};

export default Experience;

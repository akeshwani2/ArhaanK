import Link from "next/link";
import React from "react";
import Footer from "./Footer";
const Overview = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [expandedVideo, setExpandedVideo] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.5; // Trigger halfway through the first screen

      if (scrollPosition > scrollThreshold) {
        setIsVisible(true);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const VideoModal = ({
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
    <div className="min-h-[150vh] flex flex-col items-center">
      <div className="h-screen flex items-center justify-center">
        <div className="container">
          <h1 className="text-2xl px-8 pb-12 md:px-0 lg:px-20 md:text-5xl lg:text-7xl font-light tracking-tight w-full text-gray-400 animate-fade-in-up">
            Hi, I'm{" "}
            <span className="text-white animate-fade-in-up">Arhaan.</span> I try
            to build projects that aim to solve{" "}
            <span className="text-white animate-fade-in-up-3">
              real problems.
            </span>{" "}
            I have always been passionate about making a{" "}
            <span className="text-white animate-fade-in-up-4">
              meaningful difference
            </span>{" "}
            in people's lives.
          </h1>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse">
          <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-white/40 animate-pulse-glow"></div>
        </div>
      </div>
      <div
        className={`px-4 border-b border-t border-gray-600 border-opacity-50 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 container pb-10 pt-10 transition-opacity duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col gap-2 order-1">
          <p className="text-sm text-gray-400">2024</p>
          <h1 className="text-2xl md:text-4xl text-white tracking-tight flex items-center gap-2">
            Lyra
          </h1>
          <p className="text-gray-400 text-sm md:text-lg">
            AI companion for productivity, backed by NVIDIA's Inception Program.
            $5,000+ raised.
          </p>

          <div className="pt-4">
            <Link
              href="https://lyra.services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-200 text-white px-4 py-2 rounded-lg w-fit">
                View
              </button>
            </Link>
          </div>
        </div>
        <div
          className="order-2 border border-gray-600 border-opacity-50 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={() =>
            setExpandedVideo(
              "https://my-website-videos-akport.s3.us-east-1.amazonaws.com/My+Movie.mp4"
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
              src="https://my-website-videos-akport.s3.us-east-1.amazonaws.com/My+Movie.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div
        className={`px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 container pb-10 pt-10 transition-opacity duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col gap-2 order-1">
          <p className="text-sm text-gray-400">2025</p>
          <h1 className="text-2xl md:text-4xl text-white tracking-tight flex items-center gap-2">
            Sunday
          </h1>
          <p className="text-gray-400 text-sm md:text-lg">
            AI-powered web, email, & calendar assistant. $6,000+ raised.
          </p>
          <div className="pt-4">
            <Link
              href="https://sundays.services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-200 text-white px-4 py-2 rounded-lg w-fit">
                View
              </button>
            </Link>
          </div>
        </div>
        <div
          className="order-2 border border-gray-600 border-opacity-50 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={() =>
            setExpandedVideo(
              "https://my-website-videos-akport.s3.us-east-1.amazonaws.com/SundayDem.mp4"
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
              src="https://my-website-videos-akport.s3.us-east-1.amazonaws.com/SundayDem.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div
        className={`px-4 border-b border-t border-gray-600 border-opacity-50 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 container pb-10 pt-10 transition-opacity duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col gap-2 order-1">
          <p className="text-sm text-gray-400">2024</p>
          <h1 className="text-2xl md:text-4xl text-white tracking-tight">
            AK Notch
          </h1>
          <p className="text-gray-400 text-sm md:text-lg">
            MacOS utility with a drag-and-drop tray, and AirDrop integration.
            300+ users.
          </p>
          <div className="pt-4">
            <Link
              href="https://github.com/akeshwani2/AK-Notch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-200 text-white px-4 py-2 rounded-lg w-fit">
                View
              </button>
            </Link>
          </div>
        </div>
        <div
          className="order-2 px-2 border border-gray-600 border-opacity-50 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={() =>
            setExpandedVideo(
              "https://my-website-videos-akport.s3.us-east-1.amazonaws.com/AKNotch.mp4"
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
              src="https://my-website-videos-akport.s3.us-east-1.amazonaws.com/AKNotch.mp4"
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
      <Footer />
    </div>
  );
};

export default Overview;

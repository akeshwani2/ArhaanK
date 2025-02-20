import React from "react";

const Overview = () => {
  const [isVisible, setIsVisible] = React.useState(false);

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

  return (
    <div className="min-h-[150vh] flex flex-col items-center">
      <div className="h-screen flex items-center justify-center">
        <div className="container">
          <h1 className="text-3xl px-4 pb-2 md:px-0 lg:px-0 md:text-5xl lg:text-8xl tracking-tight w-full text-gray-400">
            Hello, I'm{" "}
            <span className="text-white animate-fade-in-up">Arhaan</span> — a
            passionate
            <span className="text-white animate-fade-in-up-2">
              {" "}
              developer.
            </span>{" "}
            I'm always trying to build stuff that makes a{" "}
            <span className="text-white animate-fade-in-up-3">
              meaningful difference
            </span>{" "}
            in the{" "}
            <span className="text-white animate-fade-in-up-4">world.</span>
          </h1>
        </div>
      </div>
      <div
        className={`px-4 md:px-0  grid grid-cols-2 gap-20 container pb-10 transition-opacity duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-white tracking-tight">Lyra</h1>
          <p className="text-gray-400">
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
        <div>
          <video autoPlay muted loop playsInline preload="auto">
            <source
              src="https://my-website-videos-akport.s3.us-east-1.amazonaws.com/Personalized+Chrome+Extension.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div
        className={`px-4 md:px-0  grid grid-cols-2 gap-20 container pb-10 transition-opacity duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-white tracking-tight">Sunday</h1>
          <p className="text-gray-400">
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
        <div>
          <video autoPlay muted loop playsInline preload="auto">
            <source
              src="https://my-website-videos-akport.s3.us-east-1.amazonaws.com/Introducing+Sundae+AI+Assistant.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Overview;

"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Github, Linkedin, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import toast from "react-hot-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_0ntsovt",
        "template_s82dsqa",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "n8NDrUx40HzYFneGm"
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-7xl tracking-tight text-gray-400 leading-tight">
            Let's <span className="text-white animate-fade-in-up">build</span>{" "}
            something{" "}
            <span className="text-white animate-fade-in-up">amazing</span>{" "}
            together.{" "}
            <span className="text-white animate-fade-in-up-2">
              Get in touch
            </span>{" "}
            with me{" "}
            <span className="text-white animate-fade-in-up-4">here.</span>
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in-up">
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-gray backdrop-blur-sm border border-white/30 rounded-xl p-8 shadow-xl"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full focus:outline-none p-3 rounded-lg bg-black/80 border border-gray-700 focus:border-white focus:ring-1 focus:ring-white transition-all placeholder-gray-500"
                placeholder="Sam Altman"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 focus:outline-none rounded-lg bg-black/80 border border-gray-700 focus:border-white focus:ring-1 focus:ring-white transition-all placeholder-gray-500"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 focus:outline-none rounded-lg bg-black/80 border border-gray-700 focus:border-white focus:ring-1 focus:ring-white transition-all placeholder-gray-500"
                placeholder="What's up, Arhaan?"
                required
              />
            </div>
            {submitStatus === 'success' && (
                <div className="text-white text-center">Message sent successfully! I will get back to you as soon as possible.</div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-red-400 text-center">Failed to send message. Please try again.</div>
              )}
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-white text-black rounded-lg hover:bg-gray-200 active:bg-gray-300 transition-all font-semibold text-lg"

                >
                  <span className="relative z-10 text-black">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
              </button>
            </div>
          </form>

          <div className="flex flex-col justify-center gap-12 pl-8">
            <Link
              href="https://www.linkedin.com/in/arhaan-keshwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group w-fit"
            >
              <Linkedin className="w-8 h-8 group-hover:scale-110 group-hover:text-white/80 transition-all duration-300" />
              <span className="text-gray-400 tracking-tight group-hover:text-white transition-colors">
                LinkedIn
              </span>
            </Link>

            <Link
              href="https://github.com/akeshwani2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group w-fit"
            >
              <Github className="w-8 h-8 group-hover:scale-110 group-hover:text-gray-400 transition-all duration-300" />
              <span className="text-gray-400 tracking-tight group-hover:text-white transition-colors">
                GitHub
              </span>
            </Link>

            <div className="flex items-center gap-4 group w-fit">
              <Mail className="w-8 h-8 group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300" />
              <span className="text-gray-400 tracking-tight group-hover:text-white transition-colors">
                arhaankeshwani200@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

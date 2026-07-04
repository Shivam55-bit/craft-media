"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import craftHubLogo from "@/src/assets/Carft_hub_logo.png";
import ChatWidget from "@/src/components/ui/chat-widget";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [chatOpen, setChatOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="fixed left-1/2 top-5 z-50 w-[96%] max-w-[1380px] -translate-x-1/2"
      >
        <nav
          className={`relative flex items-center justify-between overflow-hidden rounded-[100px] border border-white/25 bg-white/15 px-4 backdrop-blur-3xl transition-all duration-500 sm:px-6 lg:px-10 ${
            scrolled
              ? "h-[76px] shadow-[0_20px_60px_rgba(0,0,0,0.14)]"
              : "h-[92px] shadow-[0_12px_45px_rgba(0,0,0,0.10)]"
          }`}
        >
          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[100px] bg-gradient-to-r from-[#ff7b36]/25 via-white/10 to-[#ffb347]/25" />
          <div className="pointer-events-none absolute inset-[1px] rounded-[100px] border border-white/30" />

          {/* Logo */}
          <Link
            href="/"
            aria-label="Homepage"
            onClick={() => setActive("/")}
            className="group relative z-10 inline-flex items-center"
          >
            <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/35 bg-white p-2 shadow-[0_10px_35px_rgba(255,122,52,0.25)] backdrop-blur-xl transition-all duration-500 group-hover:scale-105 sm:h-16 sm:w-16">
              <motion.span
                className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-[#ffa959]/40"
                animate={{ scale: [1, 1.22, 1], opacity: [0.65, 0, 0.65] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <Image
                src={craftHubLogo}
                alt="Craft Media Hub"
                className="relative z-10 h-full w-full object-contain"
                priority
              />
            </span>
            <span className="ml-3 hidden flex-col sm:inline-flex">
              <span
                className={`text-lg font-semibold transition-colors duration-300 ${
                  scrolled
                    ? "text-[#1f2937]"
                    : "text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]"
                }`}
              >
                Craft Media Hub
              </span>
              <span
                className={`text-xs font-medium tracking-wider transition-colors duration-300 ${
                  scrolled
                    ? "text-[#6b7280]"
                    : "text-white/80 drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]"
                }`}
              >
                -Create.Grow.Connect-
              </span>
            </span>
          </Link>

          {/* Nav Links */}
          <div className="relative z-10 hidden items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-2 backdrop-blur-xl lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActive(link.href)}
                  className={`relative rounded-full px-5 py-3 text-[14px] font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : scrolled
                        ? "text-[#1f2937] hover:text-[#eb742f]"
                        : "text-white/90 hover:text-[#ffcb88]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#ff7b36] via-[#ff9248] to-[#ffb347] shadow-[0_10px_30px_rgba(255,122,52,0.35)]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Let's Talk Button */}
          <motion.button
            onClick={() => setChatOpen((v) => !v)}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Let's Talk - Open chat"
            className="group relative z-10 inline-flex h-[56px] shrink-0 items-center gap-3 overflow-hidden rounded-full border border-white/45 bg-gradient-to-r from-[#fff5ea]/95 via-white/95 to-[#ffe8d3]/95 px-4 pr-5 shadow-[0_10px_28px_rgba(238,119,47,0.22)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_14px_36px_rgba(238,119,47,0.30)] sm:h-[60px] sm:px-5 sm:pr-6"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ff7b36] via-[#ff9250] to-[#ffb347] text-white shadow-[0_8px_20px_rgba(255,125,52,0.45)] sm:h-11 sm:w-11">
              <MessageCircle className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#22c55e]" />
            </span>

            <span className="flex flex-col items-start leading-none">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#ef7a33]">
                <Sparkles className="h-3 w-3" />
                Live Support
              </span>
              <span className="mt-1 text-[16px] font-extrabold tracking-[-0.01em] text-[#1f2b43] sm:text-[17px]">
                Let's Talk
              </span>
            </span>

            <motion.span
              className="pointer-events-none absolute inset-0 -skew-x-12 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100"
              animate={{ x: ["-130%", "230%"] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                repeatDelay: 2.2,
                ease: "easeInOut",
              }}
            />
          </motion.button>
        </nav>
      </motion.header>

      <ChatWidget open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
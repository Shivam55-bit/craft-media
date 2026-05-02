"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import craftHubLogo from "@/src/assets/Carft_hub_logo.png";
import letsTalkImg from "@/src/assets/letstalk_button-Photo.png";
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
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed inset-x-0 top-0 z-50 overflow-visible transition-all duration-300 ${
          scrolled
            ? "border-b border-[#f3e8dd] bg-[rgba(255,252,248,0.96)] shadow-[0_4px_32px_rgba(244,122,52,0.10)] backdrop-blur-2xl"
            : "border-b border-transparent bg-[rgba(255,252,248,0.72)] backdrop-blur-xl"
        }`}
      >
        {/* Gradient top accent line */}
        <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-[#ffb327] via-[#ff7e38] to-[#ff5564]" />

        <nav className={`mx-auto flex max-w-[1280px] items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${scrolled ? "h-[4.5rem]" : "h-[5.5rem]"}`}>

          {/* ── Logo ── */}
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-white p-1 ring-1 ring-[#f6dfc8] shadow-[0_8px_22px_rgba(255,128,53,0.22)] transition-shadow duration-300 group-hover:shadow-[0_10px_28px_rgba(255,128,53,0.38)]">
              <motion.span
                className="absolute inset-0 rounded-full ring-2 ring-[#ffa959]/40"
                animate={{ scale: [1, 1.22, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <Image
                src={craftHubLogo}
                alt="Craft Media Hub logo"
                className="relative z-10 h-full w-full rounded-full object-contain"
                priority
              />
            </span>
            <span className="leading-tight">
              <span className="block text-[17px] font-bold tracking-[-0.01em] text-[#111827] transition-colors group-hover:text-[#f47a34]">
                Craft Media Hub
              </span>
              <span className="block text-[9.5px] font-medium uppercase tracking-[0.24em] text-[#a09080]">
                Design. Develop. Deliver.
              </span>
            </span>
          </Link>

          {/* ── Nav links ── */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActive(link.href)}
                  className={`relative rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#f47a34]"
                      : "text-[#4a5567] hover:bg-[#fff4ec] hover:text-[#171d28]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navDot"
                      className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#f47a34]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ── Let's Talk banner image as chat trigger ── */}
          <motion.button
            onClick={() => setChatOpen((v) => !v)}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Let's Talk - Open chat"
            className="group relative h-[68px] w-[170px] shrink-0 cursor-pointer overflow-visible rounded-2xl transition-shadow duration-300 hover:drop-shadow-[0_10px_24px_rgba(255,120,60,0.35)] sm:h-[78px] sm:w-[200px]"
          >
            <Image
              src={letsTalkImg}
              alt="Let's Talk"
              fill
              className="object-contain"
              priority
            />
            {/* Shimmer overlay on hover */}
            <motion.span
              className="pointer-events-none absolute inset-0 -skew-x-12 rounded-2xl bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 group-hover:opacity-100"
              animate={{ x: ["-130%", "230%"] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut" }}
            />
          </motion.button>
        </nav>
      </motion.header>

      {/* ── Chatbot widget ── */}
      <ChatWidget open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}

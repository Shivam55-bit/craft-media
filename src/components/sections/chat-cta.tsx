"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, MessageCircle, Star } from "lucide-react";
import letsTalkImg from "@/src/assets/letstalk_button-Photo.png";
import ChatWidget from "@/src/components/ui/chat-widget";

/* ── Small floating dot ── */
function Dot({ x, y, size, color, delay, dur }: { x: string; y: string; size: number; color: string; delay: number; dur: number }) {
  return (
    <motion.span
      className="pointer-events-none absolute rounded-full"
      style={{ left: x, top: y, width: size, height: size, background: color }}
      animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: dur, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

const dots = [
  { x: "72%", y: "12%", size: 7, color: "#ffb327", delay: 0, dur: 3.2 },
  { x: "76%", y: "72%", size: 5, color: "#ff5564", delay: 0.6, dur: 4.0 },
  { x: "88%", y: "35%", size: 9, color: "#f47a34", delay: 0.3, dur: 3.6 },
  { x: "94%", y: "60%", size: 5, color: "#ffb327", delay: 1.1, dur: 2.8 },
  { x: "82%", y: "85%", size: 6, color: "#ff7e38", delay: 0.8, dur: 3.4 },
];

export default function ChatCTA() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      {/* ══ DESKTOP BANNER ══ */}
      <section className="relative hidden overflow-visible bg-[#fffdfa] px-4 py-14 sm:px-6 md:block lg:px-8 lg:py-20">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffe4c6]/40 blur-[110px]" />
          <div className="absolute left-[8%] bottom-0 h-[240px] w-[240px] rounded-full bg-[#ffd4b0]/35 blur-[90px]" />
          <div className="absolute right-[8%] top-[10%] h-[200px] w-[200px] rounded-full bg-[#ffcce4]/30 blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-[920px]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative flex items-center"
          >
            {/* ── 3D Girl Avatar — overlaps card from left ── */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 -mr-10 shrink-0 select-none"
            >
              <div className="relative h-[280px] w-[240px]">
                <Image
                  src={letsTalkImg}
                  alt="Chat assistant"
                  fill
                  sizes="240px"
                  className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(100,70,200,0.35)]"
                  priority
                />
              </div>
            </motion.div>

            {/* ── Main card ── */}
            <div
              className="relative flex-1 overflow-hidden rounded-[2.5rem] bg-white py-9 pl-16 pr-8 shadow-[0_24px_70px_rgba(244,122,52,0.18),0_4px_24px_rgba(0,0,0,0.06)]"
              style={{
                background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, #ffb327 0%, #ff7e38 50%, #ff5564 100%) border-box",
                border: "2.5px solid transparent",
              }}
            >
              {/* Inner warm glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#fff9f4]/70 via-transparent to-[#fff0f8]/50" />

              {/* Floating dots */}
              {dots.map((d, i) => <Dot key={i} {...d} />)}

              <div className="relative z-10 flex items-center justify-between gap-6">
                {/* Text */}
                <div className="flex-1">
                  <h2
                    className="text-[3.2rem] font-extrabold leading-none tracking-tight"
                    style={{
                      background: "linear-gradient(135deg, #f47a34 0%, #ff5564 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Let&apos;s Talk
                  </h2>

                  <p className="mt-3.5 text-[17px] leading-[1.65] text-[#4a5570]">
                    Hi! I&apos;m here to help you<br />with anything you need.
                  </p>

                  {/* Online status */}
                  <div className="mt-5 flex items-start gap-2.5">
                    <span className="relative mt-[3px] flex h-3.5 w-3.5 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-70" />
                      <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-[#22c55e] shadow-[0_0_8px_2px_rgba(34,197,94,0.45)]" />
                    </span>
                    <div>
                      <p className="text-[14px] font-semibold text-[#374151]">
                        We&apos;re <span className="text-[#22c55e]">Online</span>
                      </p>
                      <p className="text-[12px] text-[#9ca3af]">Ready to assist you!</p>
                    </div>
                  </div>
                </div>

                {/* Vertical divider */}
                <div className="hidden h-28 w-px shrink-0 bg-gradient-to-b from-transparent via-[#f0d8c8] to-transparent xl:block" />

                {/* ── Circular chat button ── */}
                <div className="flex shrink-0 flex-col items-center gap-3">
                  <motion.button
                    onClick={() => setChatOpen(true)}
                    whileHover={{ scale: 1.13 }}
                    whileTap={{ scale: 0.93 }}
                    aria-label="Open chat"
                    className="relative flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full shadow-[0_14px_45px_rgba(255,110,60,0.50)]"
                    style={{ background: "linear-gradient(135deg, #ffb327 0%, #ff7e38 50%, #ff4c5e 100%)" }}
                  >
                    {/* Shimmer sweep */}
                    <motion.span
                      className="pointer-events-none absolute inset-0 -skew-x-12 rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent"
                      animate={{ x: ["-130%", "230%"] }}
                      transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }}
                    />
                    {/* Pulse ring */}
                    <motion.span
                      className="absolute inset-0 rounded-full"
                      style={{ boxShadow: "0 0 0 0 rgba(255,120,60,0.55)" }}
                      animate={{ boxShadow: ["0 0 0 0 rgba(255,120,60,0.55)", "0 0 0 18px rgba(255,120,60,0)"] }}
                      transition={{ duration: 2.2, repeat: Infinity }}
                    />
                    {/* White border ring */}
                    <span className="absolute inset-3 rounded-full border-2 border-white/30" />
                    {/* Outer decorative ring */}
                    <span className="absolute -inset-2 rounded-full border border-[#f47a34]/20" />

                    <MessageSquare className="relative z-10 h-11 w-11 text-white drop-shadow-sm" />
                  </motion.button>
                  <p className="text-[10.5px] font-bold uppercase tracking-widest text-[#c09080]">Start Chat</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ MOBILE floating button ══ */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 md:hidden">
        <AnimatePresence>
          {!chatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 10 }}
              transition={{ type: "spring", stiffness: 360, damping: 24 }}
              className="flex items-center gap-2.5 rounded-2xl border border-[#f3ddd0] bg-white px-4 py-2.5 shadow-[0_8px_30px_rgba(244,122,52,0.22)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
              </span>
              <span className="text-[13px] font-semibold text-[#2c3347]">We&apos;re Online</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setChatOpen((v) => !v)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Chat"
          className="relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-full shadow-[0_10px_32px_rgba(255,110,60,0.5)]"
          style={{ background: "linear-gradient(135deg, #ffb327, #ff7e38, #ff4c5e)" }}
        >
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ boxShadow: "0 0 0 0 rgba(255,120,60,0.5)" }}
            animate={{ boxShadow: ["0 0 0 0 rgba(255,120,60,0.5)", "0 0 0 14px rgba(255,120,60,0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <AnimatePresence mode="wait">
            {chatOpen ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="text-2xl font-light leading-none text-white"
              >
                ×
              </motion.span>
            ) : (
              <motion.span
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <MessageCircle className="h-7 w-7 text-white" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat widget */}
      <ChatWidget open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, Zap, Users, FolderOpen } from "lucide-react";
import craftHubLogo from "@/src/assets/Carft_hub_logo.png";
import girlImg from "@/src/assets/3D_girl.png";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
};

const QUICK_REPLIES = [
  { label: "Get a Quote", icon: Zap },
  { label: "View Services", icon: Sparkles },
  { label: "Talk to Team", icon: Users },
  { label: "Our Projects", icon: FolderOpen },
];

const BOT_RESPONSES: Record<string, string> = {
  "Get a Quote":
    "Sure! To give you an accurate quote, could you briefly describe your project? (e.g. website, app, CRM) 💬",
  "View Services":
    "We offer Web Development, Mobile Apps, CRM Solutions, HRMS Software, and SEO & Digital Marketing. Which one interests you? 🚀",
  "Talk to Team":
    "Our team is available Mon–Sat, 10am–7pm IST. Call us at +91-9278127184 or email craftmediahub@gmail.com 📧",
  "Our Projects":
    "We've delivered 150+ projects across e-commerce, SaaS, real estate, and fintech. Want to see our portfolio? 📂",
};

const FALLBACK =
  "Thanks for reaching out! Our team will get back to you shortly. You can also email us at craftmediahub@gmail.com 🙏";

let idCounter = 3;

export default function ChatWidget({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: "bot",
      text: "Hi there! 👋 Welcome to **Craft Media Hub**. How can we help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: idCounter++, from: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    const response = BOT_RESPONSES[text.trim()] ?? FALLBACK;
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: idCounter++, from: "bot", text: response }]);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[59] bg-black/20 backdrop-blur-[3px] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* ── Chat panel ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.82, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.82, y: -20 }}
            transition={{ type: "spring", stiffness: 360, damping: 30 }}
            style={{ transformOrigin: "top right" }}
            className="fixed right-4 top-[5.5rem] z-[60] flex w-[360px] flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_32px_80px_rgba(244,120,52,0.28),0_0_0_1px_rgba(244,180,120,0.18)] sm:right-6 lg:right-8"
          >
            {/* ── Header ── */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#ff9a2e] via-[#ff6f38] to-[#ff4c5e] px-5 pt-5 pb-14">
              {/* Decorative circles */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
              <div className="pointer-events-none absolute -right-2 top-8 h-16 w-16 rounded-full bg-white/8" />
              <div className="pointer-events-none absolute left-1/2 bottom-2 h-20 w-40 -translate-x-1/2 rounded-full bg-white/[0.06] blur-xl" />
              {/* Shimmer sweep */}
              <motion.span
                className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                animate={{ x: ["-150%", "260%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
              />
              {/* Close btn */}
              <button
                onClick={onClose}
                aria-label="Close chat"
                className="absolute right-4 top-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/35 hover:scale-110"
              >
                <X className="h-3.5 w-3.5" />
              </button>
              {/* Avatar + info */}
              <div className="relative z-10 flex items-center gap-3.5">
                <div className="relative">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/25 p-2 ring-2 ring-white/40 shadow-[0_8px_20px_rgba(0,0,0,0.18)]">
                    <Image src={craftHubLogo} alt="Craft Media Hub" className="h-full w-full object-contain" />
                  </span>
                  {/* Online dot */}
                  <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#ff6f38] bg-[#6dff6d] shadow-[0_0_8px_2px_rgba(109,255,109,0.6)]" />
                </div>
                <div>
                  <p className="text-[15px] font-bold text-white leading-none tracking-[-0.01em]">Craft Media Hub</p>
                  <p className="mt-1.5 text-[11px] text-white/80 font-medium">AI Assistant • Always here to help ✨</p>
                </div>
              </div>
              {/* Stats strip */}
              <div className="relative z-10 mt-4 flex items-center gap-4">
                {[
                  { val: "150+", lbl: "Projects" },
                  { val: "5★", lbl: "Rating" },
                  { val: "<2min", lbl: "Response" },
                ].map((s) => (
                  <div key={s.lbl} className="flex flex-col items-center">
                    <span className="text-[13px] font-bold text-white">{s.val}</span>
                    <span className="text-[9.5px] text-white/65 font-medium uppercase tracking-wide">{s.lbl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Messages ── */}
            <div
              className="relative -mt-8 flex flex-col gap-3.5 overflow-y-auto rounded-t-[24px] bg-[#fdf8f5] px-4 pt-5 pb-3 [max-height:280px] [scrollbar-width:thin]"
              style={{ scrollbarColor: "#f0d8c8 transparent" }}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  className={`flex items-end gap-2 ${msg.from === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Avatar */}
                  {msg.from === "bot" ? (
                    <span className="mb-0.5 relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#ede9fe] to-[#ddd6fe] ring-1 ring-[#c4b5fd] shadow-sm">
                      <Image src={girlImg} alt="" fill className="object-cover object-top scale-125 translate-y-1" />
                    </span>
                  ) : (
                    <span className="mb-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ffb327] to-[#ff5564] text-white text-[9px] font-bold shadow-sm">
                      U
                    </span>
                  )}

                  <div
                    className={`relative max-w-[78%] px-4 py-2.5 text-[13px] leading-[1.65] ${
                      msg.from === "user"
                        ? "rounded-[18px] rounded-br-[4px] bg-gradient-to-br from-[#ffb327] via-[#ff7038] to-[#ff4c5e] text-white shadow-[0_6px_18px_rgba(255,110,60,0.32)]"
                        : "rounded-[18px] rounded-bl-[4px] bg-white text-[#2c3347] shadow-[0_2px_12px_rgba(0,0,0,0.07)] ring-1 ring-[#f0e4d8]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-end gap-2"
                  >
                    <span className="mb-0.5 relative flex h-7 w-7 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#ede9fe] to-[#ddd6fe] ring-1 ring-[#c4b5fd] shadow-sm">
                      <Image src={girlImg} alt="" fill className="object-cover object-top scale-125 translate-y-1" />
                    </span>
                    <span className="flex items-center gap-[5px] rounded-[18px] rounded-bl-[4px] bg-white px-4 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.07)] ring-1 ring-[#f0e4d8]">
                      {[0, 0.2, 0.4].map((d, i) => (
                        <motion.span
                          key={i}
                          className="h-2 w-2 rounded-full bg-gradient-to-b from-[#ffb327] to-[#ff5564]"
                          animate={{ y: [0, -5, 0], scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.7, repeat: Infinity, delay: d, ease: "easeInOut" }}
                        />
                      ))}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={bottomRef} />
            </div>

            {/* ── Quick replies ── */}
            <div className="bg-[#fdf8f5] px-4 pb-3">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#c0a898]">Quick options</p>
              <div className="grid grid-cols-2 gap-2">
                {QUICK_REPLIES.map(({ label, icon: Icon }) => (
                  <motion.button
                    key={label}
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => sendMessage(label)}
                    className="flex items-center gap-2 rounded-2xl border border-[#f0ddd0] bg-white px-3.5 py-2.5 text-left text-[12px] font-semibold text-[#2c3347] shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-shadow hover:border-[#ffc09a] hover:shadow-[0_4px_14px_rgba(255,120,60,0.16)]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#ffb327] to-[#ff5564] text-white shadow-[0_2px_6px_rgba(255,110,60,0.3)]">
                      <Icon className="h-3 w-3" />
                    </span>
                    {label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* ── Input ── */}
            <div
              className={`flex items-center gap-2.5 border-t px-4 py-3.5 transition-colors duration-200 ${
                inputFocused ? "border-[#ffcba0] bg-[#fffaf6]" : "border-[#f0e4d8] bg-[#fdf8f5]"
              }`}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                placeholder="Type a message…"
                className="flex-1 rounded-2xl border border-[#f0ddd0] bg-white px-4 py-2.5 text-[13px] text-[#2c3347] placeholder-[#c0a898] outline-none ring-0 transition-all focus:border-[#ffaa78] focus:shadow-[0_0_0_3px_rgba(255,170,120,0.2)]"
              />
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
                className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#ffb327] via-[#ff7038] to-[#ff4c5e] text-white shadow-[0_6px_16px_rgba(255,110,60,0.4)] transition-all disabled:opacity-35 disabled:shadow-none"
              >
                <motion.span
                  className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  animate={{ x: ["-120%", "220%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                />
                <Send className="relative z-10 h-4 w-4 -translate-x-px" />
              </motion.button>
            </div>

            {/* ── Footer ── */}
            <div className="flex items-center justify-center gap-1.5 border-t border-[#f0e4d8] bg-[#fdf8f5] py-2.5">
              <Sparkles className="h-3 w-3 text-[#f47a34]" />
              <span className="text-[10.5px] font-medium text-[#c0a898]">Powered by</span>
              <span className="text-[10.5px] font-bold text-[#f47a34]">Craft Media Hub</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

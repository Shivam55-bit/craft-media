"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Trash2,
  CheckCircle2,
  Circle,
  LogIn,
  Loader2,
  ArrowLeft,
  Inbox,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

interface Submission {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  message: string;
  read: boolean;
  createdAt: string;
}

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<Submission | null>(null);

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Unauthorized");
      const data = await res.json();
      setSubmissions(data);
    } catch {
      setError("Failed to load submissions. Check your token.");
    } finally {
      setLoading(false);
    }
  }, [token]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    await fetchSubmissions();
  };

  const toggleRead = async (sub: Submission) => {
    await fetch(`/api/contact/${sub.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ read: !sub.read }),
    });
    setSubmissions((prev) =>
      prev.map((s) => (s.id === sub.id ? { ...s, read: !s.read } : s))
    );
    if (selected?.id === sub.id) {
      setSelected({ ...sub, read: !sub.read });
    }
  };

  const deleteSub = async (id: number) => {
    if (!confirm("Are you sure you want to delete this submission?")) return;
    await fetch(`/api/contact/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    setSubmissions((prev) => prev.filter((s) => s.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  useEffect(() => {
    if (isLoggedIn && token) {
      fetchSubmissions();
    }
  }, [isLoggedIn, token, fetchSubmissions]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-white mb-4">
                <LogIn className="h-7 w-7" />
              </div>
              <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
              <p className="text-zinc-400 text-sm mt-2">
                Enter your admin token to continue
              </p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Admin Secret Token"
                required
                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  const unreadCount = submissions.filter((s) => !s.read).length;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-lg font-bold">
              Contact Submissions
              {unreadCount > 0 && (
                <span className="ml-2 inline-flex items-center justify-center h-6 min-w-6 px-2 rounded-full bg-violet-600 text-xs font-bold">
                  {unreadCount}
                </span>
              )}
            </h1>
          </div>
          <button
            onClick={fetchSubmissions}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-sm font-medium transition-colors disabled:opacity-50"
          >
            <RefreshCw
              className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
            />
            Refresh
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
            {error}
          </div>
        )}

        {loading && submissions.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-violet-500" />
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-20">
            <Inbox className="h-16 w-16 text-zinc-700 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-zinc-400">
              No submissions yet
            </h2>
            <p className="text-zinc-500 text-sm mt-2">
              Contact form submissions will appear here.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-5 gap-6">
            {/* List */}
            <div className="lg:col-span-2 space-y-2 max-h-[calc(100vh-160px)] overflow-y-auto pr-1">
              <AnimatePresence>
                {submissions.map((sub) => (
                  <motion.div
                    key={sub.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    onClick={() => setSelected(sub)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      selected?.id === sub.id
                        ? "border-violet-500/50 bg-violet-500/10"
                        : "border-zinc-800 bg-zinc-900 hover:border-zinc-700"
                    } ${!sub.read ? "border-l-4 border-l-violet-500" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          {!sub.read && (
                            <div className="h-2 w-2 rounded-full bg-violet-500 shrink-0" />
                          )}
                          <span
                            className={`font-semibold text-sm truncate ${
                              sub.read ? "text-zinc-400" : "text-white"
                            }`}
                          >
                            {sub.name}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-500 mt-1 truncate">
                          {sub.service || "No service selected"} &middot;{" "}
                          {new Date(sub.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                        <p className="text-xs text-zinc-500 mt-1 line-clamp-1">
                          {sub.message}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Detail */}
            <div className="lg:col-span-3">
              {selected ? (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 lg:p-8"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold">{selected.name}</h2>
                      <p className="text-sm text-zinc-400 mt-1">
                        {new Date(selected.createdAt).toLocaleDateString(
                          "en-IN",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleRead(selected)}
                        className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
                        title={
                          selected.read ? "Mark as unread" : "Mark as read"
                        }
                      >
                        {selected.read ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : (
                          <Circle className="h-5 w-5 text-zinc-500" />
                        )}
                      </button>
                      <button
                        onClick={() => deleteSub(selected.id)}
                        className="p-2 rounded-lg hover:bg-red-500/10 text-zinc-500 hover:text-red-400 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/50">
                      <Mail className="h-4 w-4 text-violet-400 shrink-0" />
                      <a
                        href={`mailto:${selected.email}`}
                        className="text-sm text-zinc-300 hover:text-violet-400 transition-colors truncate"
                      >
                        {selected.email}
                      </a>
                    </div>
                    {selected.phone && (
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/50">
                        <Phone className="h-4 w-4 text-violet-400 shrink-0" />
                        <a
                          href={`tel:${selected.phone}`}
                          className="text-sm text-zinc-300 hover:text-violet-400 transition-colors"
                        >
                          {selected.phone}
                        </a>
                      </div>
                    )}
                  </div>

                  {selected.service && (
                    <div className="mb-6">
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
                        {selected.service}
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                      Message
                    </h3>
                    <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap">
                      {selected.message}
                    </p>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <a
                      href={`mailto:${selected.email}?subject=Re: Your inquiry - Craft Media Hub`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      Reply via Email
                    </a>
                    {selected.phone && (
                      <a
                        href={`https://wa.me/${selected.phone.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white text-sm font-semibold transition-colors"
                      >
                        WhatsApp
                      </a>
                    )}
                  </div>
                </motion.div>
              ) : (
                <div className="flex items-center justify-center h-full text-zinc-500 py-20">
                  <p>Select a submission to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { MessageCircle, X, Phone, Mail, MessageSquare, ChevronDown } from "lucide-react";
// ── NEW: New Relic event helper ───────────────────────────────────────────────
import { nr } from "@/lib/nr";

const QUESTIONS = [
  {
    id: "quote",
    question: "How can I get a quote?",
    answer:
      "Share your requirement details and our team will get back to you with a competitive price within 24 hours.",
    actions: [
      { label: "Call Now",  icon: Phone,         href: "tel:+919637655556",                                                                                    nrEvent: "ClickToCall"    },
      { label: "WhatsApp",  icon: MessageSquare, href: "https://wa.me/919637655556?text=Hi%20Stellar%20Global%20Supplies%2C%20I%20need%20a%20quote.",           nrEvent: "WhatsAppClick"  },
      { label: "Email Us",  icon: Mail,          href: "mailto:stellarglobalsupplies@gmail.com?subject=Quote%20Request",                                        nrEvent: "ClickToEmail"   },
    ],
  },
  {
    id: "products",
    question: "What products do you supply?",
    answer:
      "We specialise in three main categories:\n• Mild Steel – Angles, Flats, Round Pipes, Sheets, Square Tubes\n• Stainless Steel – Channels, Sheets, Round Bars, Pipes, Circles\n• Locking & Fastening – Hex Bolts, Allen Bolts, Nylock Nuts, Castle Nuts, Circlips, Dowel Pins",
    actions: [
      { label: "Call Now",  icon: Phone,         href: "tel:+919637655556",                                                                                             nrEvent: "ClickToCall"    },
      { label: "WhatsApp",  icon: MessageSquare, href: "https://wa.me/919637655556?text=Hi%20Stellar%20Global%20Supplies%2C%20I%20need%20product%20details.",            nrEvent: "WhatsAppClick"  },
      { label: "Email Us",  icon: Mail,          href: "mailto:stellarglobalsupplies@gmail.com?subject=Product%20Enquiry",                                               nrEvent: "ClickToEmail"   },
    ],
  },
  {
    id: "custom",
    question: "Can you supply customised products?",
    answer:
      "Yes. If you need materials outside our standard catalogue, share your specs and we will source them for you.",
    actions: [
      { label: "Call Now",  icon: Phone,         href: "tel:+919637655556",                                                                                                    nrEvent: "ClickToCall"    },
      { label: "WhatsApp",  icon: MessageSquare, href: "https://wa.me/919637655556?text=Hi%20Stellar%20Global%20Supplies%2C%20I%20need%20customised%20products.",              nrEvent: "WhatsAppClick"  },
      { label: "Email Us",  icon: Mail,          href: "mailto:stellarglobalsupplies@gmail.com?subject=Custom%20Product%20Request",                                            nrEvent: "ClickToEmail"   },
    ],
  },
  {
    id: "other",
    question: "Any other question?",
    answer: "We are happy to help with anything else. Reach out and our team will assist you.",
    actions: [
      { label: "Call Now",  icon: Phone,         href: "tel:+919637655556",                                                                                          nrEvent: "ClickToCall"    },
      { label: "WhatsApp",  icon: MessageSquare, href: "https://wa.me/919637655556?text=Hi%20Stellar%20Global%20Supplies%2C%20I%20have%20a%20question.",             nrEvent: "WhatsAppClick"  },
      { label: "Email Us",  icon: Mail,          href: "mailto:stellarglobalsupplies@gmail.com?subject=General%20Enquiry",                                           nrEvent: "ClickToEmail"   },
    ],
  },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = () => {
    const next = !open;
    setOpen(next);
    // ── NR: track open / close ──────────────────────────────────────────────
    nr(next ? "ChatWidgetOpen" : "ChatWidgetClose");
  };

  const toggleExpand = (id: string) => {
    const next = expandedId === id ? null : id;
    setExpandedId(next);
    // ── NR: track which question was expanded ───────────────────────────────
    if (next) nr("ChatQuestionExpanded", { question_id: id });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[70vh]">
          {/* Header */}
          <div className="px-5 py-4 flex items-center justify-between" style={{ background: "var(--dark)" }}>
            <div>
              <p className="text-white font-bold text-sm">How can we help?</p>
              <p className="text-white/60 text-xs mt-0.5">Select a question below</p>
            </div>
            <button
              onClick={() => { setOpen(false); nr("ChatWidgetClose"); }}
              className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Questions */}
          <div className="p-3 flex flex-col gap-2 overflow-y-auto">
            {QUESTIONS.map((q) => {
              const isExpanded = expandedId === q.id;
              return (
                <div key={q.id} className="rounded-xl border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => toggleExpand(q.id)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-brand-dark">{q.question}</span>
                    <ChevronDown
                      size={16}
                      className={`text-gray-400 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-4 pt-1 border-t border-gray-50 bg-gray-50/40">
                      <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line mb-3">
                        {q.answer}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {q.actions.map((action) => (
                          <a
                            key={action.label}
                            href={action.href}
                            target={action.href.startsWith("http") ? "_blank" : undefined}
                            rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            // ── NR: track each action link inside chat ────────
                            onClick={() =>
                              nr(action.nrEvent, {
                                source:      "chat-widget",
                                question_id: q.id,
                              })
                            }
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors"
                            style={{ background: "var(--primary)", color: "white" }}
                          >
                            <action.icon size={14} />
                            {action.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-5 py-3 border-t border-gray-100 bg-gray-50/50">
            <p className="text-[11px] text-gray-400 text-center">
              Typically replies within a few minutes during business hours
            </p>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={handleToggle}    // ← was: onClick={() => setOpen((o) => !o)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
        style={{ background: "var(--primary)" }}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </button>
    </div>
  );
}
"use client";
import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Link from "next/link";

const demos = [
  {
    id: "receptionist",
    title: "AI Receptionist",
    icon: "🤖",
    description: "A 24/7 AI assistant that handles customer enquiries, bookings and FAQs.",
    systemPrompt: "You are an AI receptionist for AutoFlow AI, a professional AI automation agency. You help visitors understand our services, answer questions about pricing and automation, and encourage them to book a free strategy call at https://calendly.com/autoflowai365/free-strategy-call. Keep responses friendly, professional and concise. If asked about pricing: Starter from 150,000 NGN ($100), Growth from 350,000 NGN ($230), Business from 750,000 NGN ($500+). Always end with a helpful next step.",
    placeholder: "Hi! Ask me anything about AI automation...",
    starters: ["What services do you offer?", "How much does automation cost?", "How long does it take?", "Can you automate WhatsApp?"],
  },
  {
    id: "laundry",
    title: "Laundry Receptionist",
    icon: "👕",
    description: "See how our WhatsApp AI Receptionist works for a laundry business.",
    systemPrompt: "You are an AI receptionist for FreshClean Laundry, a professional laundry service. Services: Wash & Fold (1,500 NGN/kg), Dry Cleaning (3,000 NGN per item), Express Service (2x price, same day). Pickup available for orders above 5kg. Hours: Monday-Saturday 8am-8pm. Location: Lagos Island. Be friendly, helpful and always ask for the customer name and pickup address when they want to place an order. Keep responses short and conversational like WhatsApp messages.",
    placeholder: "Hi! How can I help you today?",
    starters: ["What are your prices?", "I need to do my laundry", "Do you offer pickup?", "How long does it take?"],
  },
  {
    id: "leadsqualifier",
    title: "Lead Qualifier",
    icon: "📊",
    description: "Watch an AI qualify a business lead and capture their details automatically.",
    systemPrompt: "You are an AI lead qualifier for a B2B software company. Your job is to qualify leads by asking about: 1) Their business type and size, 2) Their biggest operational challenge, 3) Their current software/tools, 4) Their budget range, 5) Their timeline. Be conversational and friendly. Ask one question at a time. Once you have all details, summarize the lead profile and say it has been sent to the sales team. Keep responses short and professional.",
    placeholder: "Tell me about your business...",
    starters: ["I am interested in your software", "We need help with our operations", "What do you offer?", "I want to learn more"],
  },
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function DemoPage() {
  const [activeDemo, setActiveDemo] = useState(demos[0]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: "assistant", content: `Hi there! I am the ${activeDemo.title}. ${activeDemo.description} How can I help you today?` }]);
  }, [activeDemo]);

  useEffect(() => {
    if (bottomRef.current) { bottomRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" }); }
  }, [messages]);

  async function sendMessage(text?: string) {
    const userMessage = text || input.trim();
    if (!userMessage || loading) return;
    setInput("");
    const newMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setLoading(true);
    try {
      const response = await fetch("/api/demo-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, systemPrompt: activeDemo.systemPrompt }),
      });
      const data = await response.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Sorry, something went wrong. Please try again!" }]);
    }
    setLoading(false);
  }

  return (
    <main className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <section className="px-4 md:px-6 pt-32 md:pt-40 pb-10 text-center max-w-4xl mx-auto">
        <span className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-4">LIVE AI DEMO</span>
        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
          Try Our AI<br /><span className="text-blue-500">Live Right Now</span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-4">
          This is real AI — not a scripted chatbot. Pick a demo below and start chatting.
        </p>
        <p className="text-slate-500 text-sm">Powered by Claude AI</p>
      </section>

      <section className="px-4 md:px-6 pb-6 max-w-4xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {demos.map((demo) => (
            <button key={demo.id} onClick={() => setActiveDemo(demo)} className={`flex items-center gap-2 px-4 py-3 rounded-2xl border text-sm font-semibold transition-all duration-300 ${activeDemo.id === demo.id ? "bg-blue-600 border-blue-500 text-white" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-blue-500"}`}>
              <span>{demo.icon}</span>
              <span>{demo.title}</span>
            </button>
          ))}
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
          <div className="flex items-center gap-3 px-5 py-4 bg-slate-800 border-b border-slate-700">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="font-semibold text-sm">{activeDemo.title}</span>
            <span className="text-slate-500 text-xs ml-auto">Powered by Claude AI</span>
          </div>

          <div className="h-[420px] overflow-y-auto p-5 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === "user" ? "bg-blue-600 text-white rounded-br-sm" : "bg-slate-800 text-slate-200 rounded-bl-sm"}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 px-4 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{animationDelay:"0ms"}}></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{animationDelay:"150ms"}}></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{animationDelay:"300ms"}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="px-5 py-3 border-t border-slate-700">
            <p className="text-slate-500 text-xs mb-3">Try asking:</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {activeDemo.starters.map((s, i) => (
                <button key={i} onClick={() => sendMessage(s)} className="text-xs bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-blue-500 text-slate-300 px-3 py-1.5 rounded-full transition-all duration-200">
                  {s}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder={activeDemo.placeholder}
                className="flex-1 bg-slate-800 border border-slate-600 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200"
              />
              <button onClick={() => sendMessage()} disabled={loading || !input.trim()} className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4">Want This On Your Website?</h2>
        <p className="text-slate-400 text-base md:text-lg mb-8 max-w-2xl mx-auto">We build custom AI assistants like this for businesses across every industry. Book a free call to discuss your automation.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://calendly.com/autoflowai365/free-strategy-call" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 hover:scale-105 text-white font-bold px-8 py-4 rounded-full transition-all duration-300">Book Free Strategy Call</Link>
          <Link href="/pricing" className="border border-slate-600 hover:border-blue-500 hover:bg-white/5 text-white font-bold px-8 py-4 rounded-full transition-all duration-300">View Pricing</Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

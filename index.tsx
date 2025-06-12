// Gooner AI - Modern Gaming Chat UI (React + Tailwind + OpenAI-ready)

import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function GoonerAI() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    setMessages([...messages, newMessage]);
    setInput("");

    // Placeholder: Replace with OpenAI API call
    const response = {
      role: "assistant",
      content: "[Mock reply] I will help you with that!",
    };

    setMessages((prev) => [...prev, response]);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h1 className="text-4xl font-bold">Gooner AI</h1>
        <p className="text-sm text-zinc-400">Your serious gaming assistant</p>
      </motion.div>

      <div className="w-full max-w-2xl space-y-4">
        <Card className="p-4 border border-transparent rainbow-border">
          <CardContent className="space-y-3 h-96 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`text-sm px-3 py-2 rounded-md ${
                  msg.role === "user" ? "bg-blue-700 text-white self-end" : "bg-zinc-800"
                }`}
              >
                <span className="block whitespace-pre-wrap">{msg.content}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Gooner AI about your game..."
            className="bg-zinc-800 text-white resize-none"
            rows={2}
          />
          <Button onClick={handleSend} className="bg-blue-600 hover:bg-blue-700">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        .rainbow-border {
          border-width: 2px;
          border-style: solid;
          border-image: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet) 1;
          border-radius: 1rem;
        }
      `}</style>
    </div>
  );
}

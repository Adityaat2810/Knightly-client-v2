"use client";

import { useState } from "react";
import { Zap, Check } from "lucide-react";

export default function StartGameCard() {
  const [roomId, setRoomId] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCreate = () => {
    const newId = Math.random().toString(36).substring(2, 8).toUpperCase();
    setRoomId(newId);
    navigator.clipboard.writeText(newId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleJoin = () => {
    if (!roomId) return;
    alert(`Joining room: ${roomId}`);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <h3 className="text-xl font-light text-slate-900 mb-6">Start Game</h3>

      <div className="space-y-4">
        <button
          onClick={handleCreate}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-light py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <Zap className="w-5 h-5" />
          Create Room
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-white text-slate-400 font-light">or join</span>
          </div>
        </div>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="ROOM ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value.toUpperCase())}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 transition-colors text-center font-light tracking-wider"
          />
          <button
            onClick={handleJoin}
            disabled={!roomId}
            className="w-full border border-blue-500 hover:bg-blue-500 hover:text-white disabled:border-slate-200 disabled:text-slate-300 disabled:cursor-not-allowed text-blue-500 font-light py-3 px-6 rounded-xl transition-all duration-300"
          >
            Join Room
          </button>
        </div>

        {copied && (
          <div className="flex items-center justify-center gap-2 text-sm text-blue-500 font-light">
            <Check className="w-4 h-4" />
            Copied!
          </div>
        )}
      </div>
    </div>
  );
}

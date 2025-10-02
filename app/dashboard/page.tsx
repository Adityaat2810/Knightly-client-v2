"use client";

import { useState } from "react";
import { Trophy, Zap, Clock, ArrowRight, Copy, Check } from "lucide-react";

export default function ChessDashboard() {
  const [roomId, setRoomId] = useState("");
  const [copied, setCopied] = useState(false);

  const userStats = {
    name: "ChessMaster",
    rating: 1850,
    gamesPlayed: 156,
    wins: 89,
    draws: 34,
    losses: 33,
    winRate: 57,
    joinDate: "January 2024",
  };

  const recentGames = [
    { opponent: "KnightRider", result: "Win", date: "2 hours ago", moves: 42 },
    { opponent: "PawnStorm", result: "Loss", date: "1 day ago", moves: 38 },
    { opponent: "BishopMove", result: "Win", date: "2 days ago", moves: 51 },
    { opponent: "RookMaster", result: "Draw", date: "3 days ago", moves: 67 },
    { opponent: "QueenSlayer", result: "Win", date: "4 days ago", moves: 29 },
    { opponent: "CheckMate99", result: "Loss", date: "5 days ago", moves: 45 },
    { opponent: "CastleKing", result: "Win", date: "6 days ago", moves: 33 },
    { opponent: "PawnPusher", result: "Draw", date: "1 week ago", moves: 58 },
  ];

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
    <div className="min-h-screen p-8 md:p-16">
      <div className="max-w-7xl mx-auto">

        {/* <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-slate-900 mb-4">Dashboard</h1>
          <p className="text-xl text-slate-400 font-light">Welcome back, {userStats.name}</p>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Recent Games - Scrollable */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-light text-slate-900">Recent Games</h2>
              <span className="text-slate-400 font-light">{recentGames.length} games</span>
            </div>

            {/* Scrollable container */}
            <div className="h-[calc(100vh-280px)] overflow-y-auto pr-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
              {recentGames.map((game, idx) => (
                <div
                  key={idx}
                  className="group relative border border-slate-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-full border-2 border-blue-400 flex items-center justify-center text-slate-900 text-lg font-light">
                        {game.opponent.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xl font-light text-slate-900 mb-1">{game.opponent}</div>
                        <div className="flex items-center gap-3 text-sm text-slate-400 font-light">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {game.date}
                          </span>
                          <span>•</span>
                          <span>{game.moves} moves</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span
                        className={`px-5 py-2 rounded-full text-sm font-light ${
                          game.result === "Win"
                            ? "bg-blue-50 text-blue-600"
                            : game.result === "Loss"
                            ? "bg-red-50 text-red-600"
                            : "bg-slate-50 text-slate-600"
                        }`}
                      >
                        {game.result}
                      </span>
                      <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Sticky */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-8 lg:self-start">

            {/* Profile */}
            <div className="border border-slate-200 rounded-2xl p-6 bg-blue-50/30 bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full border-2 border-blue-400 flex items-center justify-center text-slate-900 text-xl font-light">
                  {userStats.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-light text-slate-900">{userStats.name}</h3>
                  <p className="text-sm text-slate-400 font-light">{userStats.joinDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <Trophy className="w-5 h-5 text-blue-500" />
                <span className="text-3xl font-light text-slate-900">{userStats.rating}</span>
                <span className="text-sm text-slate-400 font-light">rating</span>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div>
                  <div className="text-2xl font-light text-slate-900">{userStats.wins}</div>
                  <div className="text-xs text-slate-400 font-light">Wins</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-slate-900">{userStats.draws}</div>
                  <div className="text-xs text-slate-400 font-light">Draws</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-slate-900">{userStats.losses}</div>
                  <div className="text-xs text-slate-400 font-light">Loss</div>
                </div>
              </div>
            </div>

            {/* Start Game */}
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

          </div>
        </div>
      </div>
    </div>
  );
}
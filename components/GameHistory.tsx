"use client";

import { Card } from "@/components/ui/card";

export function GameHistory({ games }: { games: { opponent: string; result: string; date: string }[] }) {
    return (
        <Card className="p-6 shadow-medium bg-white">
            <h3 className="text-lg font-semibold mb-4">Recent Games</h3>
            <ul className="space-y-3">
                {games.map((game, idx) => (
                    <li
                        key={idx}
                        className="flex justify-between items-center border-b last:border-0 pb-2"
                    >
                        <span className="font-medium">{game.opponent}</span>
                        <span
                            className={`px-2 py-1 rounded text-sm ${
                                game.result === "Win"
                                    ? "bg-green-100 text-green-700"
                                    : game.result === "Loss"
                                    ? "bg-red-100 text-red-700"
                                    : "bg-gray-100 text-gray-700"
                            }`}
                        >
                            {game.result}
                        </span>
                        <span className="text-sm text-muted-foreground">{game.date}</span>
                    </li>
                ))}
            </ul>
        </Card>
    );
}

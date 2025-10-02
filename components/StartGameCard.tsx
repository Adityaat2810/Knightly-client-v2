"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function StartGameCard() {
    const [roomId, setRoomId] = useState("");

    const handleCreate = () => {
        const newId = Math.random().toString(36).substring(2, 8).toUpperCase();
        setRoomId(newId);
        navigator.clipboard.writeText(newId);
        alert(`Room created: ${newId} (Copied to clipboard)`);
    };

    const handleJoin = () => {
        if (!roomId) return alert("Enter room ID to join");
        alert(`Joining room: ${roomId}`);
    };

    return (
        <Card className="p-6 shadow-medium bg-white">
            <h3 className="text-lg font-semibold mb-4">Start a Game</h3>
            <div className="space-y-4">
                <Button onClick={handleCreate} className="w-full">Create Room</Button>
                <div className="flex gap-2">
                    <Input
                        placeholder="Enter Room ID"
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                    />
                    <Button onClick={handleJoin}>Join</Button>
                </div>
            </div>
        </Card>
    );
}

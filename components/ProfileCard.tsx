"use client";

import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Trophy } from "lucide-react";

export function ProfileCard({ userStats }: { userStats: any }) {
    return (
        <Card className="p-6 shadow-medium text-center bg-white">
            <div className="space-y-4">
                <div className="flex justify-center">
                    <Avatar className="w-32 h-32 border-4 border-[#48b8cc80]">
                        <div className="w-full h-full bg-secondary flex items-center justify-center text-5xl font-bold">
                            {userStats.name.charAt(0)}
                        </div>
                    </Avatar>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-1">{userStats.name}</h2>
                    <p className="text-muted-foreground">Member since {userStats.joinDate}</p>
                </div>
                <div className="pt-4">
                    <div className="inline-flex items-center gap-2 bg-[#48b8cc80]/10 px-4 py-2 rounded-full">
                        <Trophy className="w-5 h-5 text-[#48b8cc80]" />
                        <span className="font-bold text-[#48b8cc80] text-lg">
                            {userStats.rating}
                        </span>
                        <span className="text-sm text-muted-foreground">Rating</span>
                    </div>
                </div>
            </div>
        </Card>
    );
}

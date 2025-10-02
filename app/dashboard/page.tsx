"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getToken, saveToken } from "@/lib/auth";
import { GameHistory } from "@/components/GameHistory";
import { ProfileCard } from "@/components/ProfileCard";
import { StartGameCard } from "@/components/StartGameCard";

export default function DashboardPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(true);

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
        { opponent: "KnightRider", result: "Win", date: "2 hours ago" },
        { opponent: "PawnStorm", result: "Loss", date: "1 day ago" },
        { opponent: "BishopMove", result: "Win", date: "2 days ago" },
    ];

    useEffect(() => {
        const tokenFromUrl = searchParams.get("token");
        const tokenFromStorage = getToken();

        if (tokenFromUrl) {
            saveToken(tokenFromUrl);
            router.replace("/dashboard");
            return;
        }

        if (!tokenFromStorage) {
            router.replace("/login");
            return;
        }

        setLoading(false);
    }, [searchParams, router]);

    if (loading) {
        return <p>Checking authentication...</p>;
    }

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
                <ProfileCard userStats={userStats} />
                <GameHistory games={recentGames} />
                <StartGameCard />
            </div>
        </section>
    );
}

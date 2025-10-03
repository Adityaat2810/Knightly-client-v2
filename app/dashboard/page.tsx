"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getToken, saveToken } from "@/lib/auth";
import { getProfileData } from "@/lib/dashboard";
import ProfileCard from "@/components/ProfileCard";
import GameHistory from "@/components/GameHistory";
import StartGameCard from "@/components/StartGameCard";

export default function ChessDashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState<any>(null);

  //  Auth check
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

  // Fetch profile
  useEffect(() => {
    async function fetchProfile() {
      const token = getToken();
      if (!token) return;

      const data = await getProfileData(token);
      setProfileData(data);
    }

    fetchProfile();
  }, []);

  if (loading) return <p>Checking authentication...</p>;
  if (!profileData) return <p>Loading profile...</p>;

  return (
    <div className="min-h-screen p-8 md:p-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">


        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-8 lg:self-start">
          <ProfileCard profile={profileData} />
          <StartGameCard />
        </div>

        {/* Recent Games */}
        <div className="lg:col-span-8">
          <GameHistory games={[...(profileData.gamesAsWhite || []), ...(profileData.gamesAsBlack || [])]} />
        </div>
      </div>
    </div>
  );
}

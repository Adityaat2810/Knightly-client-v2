"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getToken, saveToken } from "@/lib/auth";

export default function DashboardPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tokenFromUrl = searchParams.get("token");
    const tokenFromStorage = getToken();
    console.log(`token from storage is `, tokenFromStorage)

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
    <div>
      <h1>Welcome to Dashboard 🚀</h1>
    </div>
  );
}

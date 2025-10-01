const TOKEN_KEY = 'token'

export function saveToken(token: string) {
    if (typeof window != undefined) {
        localStorage.setItem(TOKEN_KEY, token);
    }
}

export function getToken(): string | null {
    if (typeof window === "undefined") return null;

    return localStorage.getItem(TOKEN_KEY)
}

export function isLoggedIn(): boolean {
    return !!getToken();
}

export function extractTokenFromUrl() {
    if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        if (token) {
            saveToken(token);
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }
}

export function clearToken() {
    if (typeof window !== "undefined") {
        localStorage.removeItem(TOKEN_KEY);
    }
}

export async function refreshToken() {
    try {
        const res = await fetch("/api/auth/refresh", {
            method: "GET",
            credentials: "include",
        });

        if (!res.ok) throw new Error("Failed to refresh token");

        const data = await res.json();
        if (data.token) {
            saveToken(data.token);
            return data.token;
        }
        return null;
    } catch (err) {
        console.error("Refresh failed:", err);
        clearToken();
        return null;
    }
}

export async function apiFetch(url: string, options: RequestInit = {}) {
    let token = getToken();

    const headers: HeadersInit = {
        ...(options.headers || {}),
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };

    const res = await fetch(url, {
        ...options,
        headers,
        credentials: "include",
    });

    if (res.status === 401) {
        token = await refreshToken();
        if (token) {
            return fetch(url, {
                ...options,
                headers: {
                    ...headers,
                    Authorization: `Bearer ${token}`,
                },
                credentials: "include",
            });
        }
    }

    return res;


}

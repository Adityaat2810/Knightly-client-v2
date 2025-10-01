import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex flex-1 items-center justify-center">
        <img
          src="/assets/knightly-logo-2.png"
          alt="some alt"
        />
      </div>

      <div className="flex-1 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">

      <div className="hidden lg:ml-30 md:flex flex-1 items-center justify-center">
        <img
          className="object-cover h-[700px] w-auto"
          src="/assets/knightly-logo-2.png"
          alt="some alt"
        />
      </div>

      <div className="flex-1 lg:mr-30 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

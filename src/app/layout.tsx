import "@/styles/globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";

import { TRPCReactProvider } from "@/trpc/react";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: "%s  | LucyAM - Simplifying AI, Powering Innovation",
  default: "LucyAM - Simplifying AI, Powering Innovation",
  description: "LucyAM - Simplifying AI, Powering Innovation",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx("h-full bg-gray-50 antialiased", inter.variable)}
    >
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </div>
      </body>
    </html>
  );
}

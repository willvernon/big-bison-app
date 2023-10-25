import "../styles/globals.css";

import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
//import { Analytics } from "@vercel/analytics/react";
import { Orbitron } from "next/font/google";
import { headers } from "next/headers";
import { TRPCReactProvider } from "@/trpc/react";

import { ToasterProvider } from "@/components/ToasterProvider";
//import { ModalProvider } from "@/components/modal-provider";
import { ThemeProvider } from "@/components/ThemeProvider";

const graphik = localFont({
  src: [
    {
      path: "../public/fonts/Graphik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Graphik-Medium.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-graphik",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Genie AI",
  description: "AI Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${orbitron.variable}`}
      >
        {/* <CrispProvider /> */}
        <body className={clsx("bg-[#111827] text-white", graphik.variable)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ToasterProvider />
            {/* <ModalProvider /> */}
            <TRPCReactProvider headers={headers()}>
              {children}
            </TRPCReactProvider>
          </ThemeProvider>
        </body>
        {/* <Analytics /> */}
      </html>
    </ClerkProvider>
  );
}

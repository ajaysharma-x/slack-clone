import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { NuqsAdapter } from 'nuqs/adapters/next'

import { ConvexClientProvider } from "@/components/convex-client-provider";
import { JoitaiProvider } from "@/components/jotai-provider";

import "./globals.css";
import { Toaster } from "sonner";
import { Modals } from "@/components/modals";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Slack",
  description: "Connect and Build",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en">
        <body>
          <NuqsAdapter>
            <ConvexClientProvider>
              <JoitaiProvider>
                <Toaster />
                <Modals />
                {children}
              </JoitaiProvider>
            </ConvexClientProvider>
          </NuqsAdapter>
        </body>

      </html>
    </ConvexAuthNextjsServerProvider>
  );
}

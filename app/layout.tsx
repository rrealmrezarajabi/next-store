import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { APP_NAME , APP_DESCRIPTAION, SERVER_URL } from "@/lib/constants";

const inter = Inter({subsets:['latin']})

export const metadata: Metadata = {
  title: {
    template: `%s | NextStore`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTAION,
  metadataBase: new URL(SERVER_URL)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

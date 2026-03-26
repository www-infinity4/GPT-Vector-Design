import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GPT Vector Design — Neuromorphic AI Hub",
  description:
    "A neuromorphic AI hub for exploring high-dimensional vector design, memory-building conversations, and autonomous AI architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0f] text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anwar | Backend-focused Full-Stack Developer",
  description:
    "Portfolio of Anwar, a backend-focused full-stack developer specializing in Java, MySQL and APIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
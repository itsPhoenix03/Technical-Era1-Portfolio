import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Technical Era1",
  description:
    "I'm raj from UP I make project for school, college and engineering. I give free training for any interested person who want's to make any project in this disciplinary. I make electronic project , Arduino based and unboxing of product and home decorations like water fountain. For any support please contact me through my Youtube channel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}

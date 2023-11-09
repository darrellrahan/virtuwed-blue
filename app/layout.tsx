import type { Metadata } from "next";
import { benton } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Virtuwed Blue Theme",
  description: "Virtuwed Blue Theme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${benton.className} bg-[#003C4C] overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}

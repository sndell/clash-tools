import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/ui/Header";
import { cn } from "@/util/cn";

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clash Tools",
  description: "Tools for Clash of Clans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(geologica.variable, "antialiased h-dvh max-w-7xl mx-auto ")}>
        <div className="px-3 h-full border-r border-l bg-background border-secondary">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

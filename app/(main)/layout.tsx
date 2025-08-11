import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Learn Lingo",
  description: "A platform to learn languages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased text-black max-w-screen-limiter flex flex-col mx-auto`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

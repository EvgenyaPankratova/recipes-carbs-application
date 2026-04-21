import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Header from "@/app/components/largeBlocks/Header/Header";

export const metadata: Metadata = {
  title: "Recipes Next App",
  description: "Search recipes and enjoy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full">
      <body className="h-full">
        <div className="wrapper">
          <main className=" container">
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

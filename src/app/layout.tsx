import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/largeBlocks/Header/Header";

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
      <body className="h-full wrapper">
        <div className="">
          <main className="container">
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

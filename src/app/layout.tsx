import type { Metadata } from "next";
import "@/styles/globals.css";
import { Footer } from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";

export const metadata: Metadata = {
  title: "Search Recipes",
  description: "Поиск рецептов по ингредиентам",
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
          <main className="container pb-16 md:pb-0">
            <Header />
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import SearchBlock from "@/components/largeBlocks/SearchBlock/SearchBlock";

export const metadata: Metadata = {
  title: "Поиск рецептов",
};

export default async function Page() {
  // Имитация задержки
  await new Promise((res) => setTimeout(res, 1000));
  return (
    <div className="container pt-2">
      <SearchBlock />
    </div>
  );
}

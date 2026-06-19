import SearchBlock from "@/components/largeBlocks/SearchBlock/SearchBlock";

export default async function Page() {
  // Имитация задержки
  await new Promise((res) => setTimeout(res, 1000));
  return (
    <div className="container pt-2">
      <SearchBlock />
    </div>
  );
}

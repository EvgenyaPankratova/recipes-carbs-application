import BreadCrumbs from "@/app/components/largeBlocks/BreadCrumbs/BreadCrumbs";
import Personal from "@/app/components/largeBlocks/Personal/Personal";

export default async function Account() {
  // Имитация задержки
  await new Promise((res) => setTimeout(res, 1000));
  return <Personal />;
}

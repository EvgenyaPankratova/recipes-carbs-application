import Link from "next/link";
import Default from "@/app/components/ui/Button/Default/Default";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-y-8 justify-center items-center mt-44">
      <h2>Страница не найдена</h2>
      <Link href="/">
        <Default>Вернуться на главную</Default>
      </Link>
    </div>
  );
}

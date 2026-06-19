import Link from "next/link";
import { CommonButton } from "@/components/ui/Button/CommonButton";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-y-8 justify-center items-center mt-44">
      <h2>Страница не найдена</h2>
      <Link href="/">
        <CommonButton>Вернуться на главную</CommonButton>
      </Link>
    </div>
  );
}

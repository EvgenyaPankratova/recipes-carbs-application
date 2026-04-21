import Link from "next/link";
import Favorites from "@/app/favorites/page";
import Logo from "@/svg/logo.svg";
import User from "@/svg/user.svg";

const Header = () => {
  return (
    <header className="fixed left-1/2 -translate-x-1/2  z-20 bg-white rounded-4xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[calc(100%-2.5rem)] mt-4">
      <nav className="w-full flex justify-between items-center *:items-center *:gap-4 *:xl:gap-12 py-2 px-10 xl:py-4 xl:px-16 text-[10px] xl:text-[14px]">
        <div className="flex *:cursor-pointer *:hover:text-orange *:transition-colors duration-500">
          <Link href="/">Главная</Link>
          <Link href="/about" className="bg-lightPink px-4 py-2 rounded-2xl">
            О сервисе
          </Link>
          <Link href="/recipes">Все рецепты</Link>
          <Link href="/search">Поиск по ингредиентам</Link>
        </div>
        <div className="hidden xl:flex xl:gap-6">
          <Link href="/about">
            <Logo className="w-8 h-10 " />
          </Link>
          <Link href="/favorites">
            <User className="w-8 h-8 " />
            Избранное
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import Link from "next/link";
import Heart from "@/svg/heart.svg";
import Logo from "@/svg/logo.svg";
import User from "@/svg/user.svg";

const Header = () => {
  return (
    <header className="fixed left-1/2 -translate-x-1/2  z-20 bg-beige rounded-4xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[calc(100%-2.5rem)] mt-4">
      <nav className="w-full flex justify-between items-center *:items-center *:gap-4 *:xl:gap-12 py-2 px-10 xl:py-4 xl:px-16 text-[10px] xl:text-[14px]">
        <div className="hidden xl:flex *:cursor-pointer *:hover:bg-lightPink *:hover:rounded-2xl *:px-2 *:py-1 *:transition-colors duration-500">
          <Link href="/">Главная</Link>
          <Link href="/about" className="">
            О сервисе
          </Link>
          <Link href="/recipes">Все рецепты</Link>
          <Link href="/search">Поиск по ингредиентам</Link>
        </div>
        <div className="block xl:hidden">***</div>
        <div className="flex xl:gap-6">
          <Link href="/about">
            <Logo className="w-8 h-10 " />
          </Link>
          <Link href="/account">
            <User className="w-8 h-8 " />
          </Link>
          <Link href="/favorites">
            <Heart className="w-8 h-8 " />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

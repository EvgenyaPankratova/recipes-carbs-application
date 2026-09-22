import Link from "next/link";
import Heart from "@/svg/heart.svg";
import Home from "@/svg/home.svg";
import Search from "@/svg/search.svg";
import User from "@/svg/user.svg";

export const Footer = () => {
  const ICONS = {
    User: <User className="w-8 h-8" />,
    Heart: <Heart className="w-8 h-8" />,
    Search: <Search className="w-8 h-8" />,
    Home: <Home className="w-8 h-8" />,
  } as const;

  const NAV_ICONS = [
    {
      id: crypto.randomUUID(),
      href: "/",
      label: "Главная",
      icon: "Home",
    },
    {
      id: crypto.randomUUID(),
      href: "/search",
      label: "Поиск",
      icon: "Search",
    },
    {
      id: crypto.randomUUID(),
      href: "/account",
      label: "Личный кабинет",
      icon: "User",
    },
    {
      id: crypto.randomUUID(),
      href: "/favorites",
      label: "Избранное",
      icon: "Heart",
    },
  ] as const;

  return (
    <footer className="fixed z-[3] bottom-0 inset-x-0 md:hidden w-full bg-orange py-2 px-4">
      <div className="flex justify-around items-center gap-6">
        {NAV_ICONS.map((navIcon) => {
          return (
            <Link
              key={navIcon.href}
              href={navIcon.href}
              className={"bg-lightPink rounded-4xl p-2 "}
            >
              <div>{ICONS[navIcon.icon]}</div>
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

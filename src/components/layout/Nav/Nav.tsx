"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Heart from "@/svg/heart.svg";
import Logo from "@/svg/logo.svg";
import User from "@/svg/user.svg";
import {useState} from "react";
import {Tooltip} from "@/components/smallBlocks/Tooltip/Tooltip";

export const Nav = () => {
  const [isTooltipShown, setIsTooltipShown] = useState(false);

  const pathname = usePathname() || "/";

  const NAV_ITEMS = [
    { id: crypto.randomUUID(), href: "/", label: "Главная" },
    { id: crypto.randomUUID(), href: "/about", label: "О сервисе" },
    { id: crypto.randomUUID(), href: "/recipes", label: "Все рецепты" },
    {
      id: crypto.randomUUID(),
      href: "/search",
      label: "Поиск по ингредиентам",
    },
  ];

  const NAV_ICONS = [
    { id: crypto.randomUUID(), href: "/account", label: "Личный кабинет", icon: 'User' },
    { id: crypto.randomUUID(), href: "/favorites", label: "Избранное", icon: 'Heart' },
  ];

  const ICONS = {
    'User': <User className="w-8 h-8 " />,
    'Heart': <Heart className="w-8 h-8 " />
  }

  const isActivePath = (pathname, href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };



  return (
    <nav
      className="w-full flex justify-between items-center *:items-center *:gap-4 *:xl:gap-12 py-2 px-10 xl:py-4 xl:px-16 text-[10px] xl:text-[14px]"
      aria-label="Main navigation"
    >
      <div className="hidden xl:flex *:cursor-pointer *:hover:bg-lightPink *:hover:rounded-2xl *:px-2 *:py-1 *:transition-colors duration-500">
        {NAV_ITEMS.map((navItem) => {
          const isActive = isActivePath(pathname, navItem.href);

          return (
            <Link
              key={navItem.href}
              href={navItem.href}
              className={isActive ? "bg-lightPink rounded-4xl p-2" : ""}
              aria-current={isActive ? "page" : undefined}
            >
              {navItem.label}
            </Link>
          );
        })}
      </div>

      <div className="block xl:hidden">***</div>
      <div className="flex xl:gap-6">
        {NAV_ICONS.map((navIcon) => {
          const isActive = isActivePath(pathname, navIcon.href);

          return (
              <Link
                  key={navIcon.href}
                  href={navIcon.href}
                  className={isActive ? "bg-lightPink rounded-4xl p-2" : ""}
                  aria-current={isActive ? "page" : undefined}
                  onMouseEnter={() => setIsTooltipShown(true)}
                  onMouseLeave={() => setIsTooltipShown(false)}
              >
                {ICONS[navIcon.icon]}
                {isTooltipShown &&  <Tooltip text={navIcon.label}/>}
              </Link>
          );
        })}
      </div>
    </nav>
  );
};

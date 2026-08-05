"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { IconsType } from "@/components/layout/Nav/Nav.types";
import { Tooltip } from "@/components/smallBlocks/Tooltip/Tooltip";
import useMediaQuery from "@/hooks/useMediaQuery";
import Heart from "@/svg/heart.svg";
import User from "@/svg/user.svg";

export const Nav = () => {
  const [isTooltipShown, setIsTooltipShown] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);

  const pathname = usePathname() || "/";

  const isLg = useMediaQuery("(min-width : 1024px)");

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

  const ICONS: IconsType = {
    User: <User className="w-8 h-8 " />,
    Heart: <Heart className="w-8 h-8 " />,
  } as const;

  const isActivePath = (pathname: string, href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const handleTooltip = (name) => {
    setIsTooltipShown((prev) => !prev);
    setActiveIcon(name);
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
              onMouseEnter={() => handleTooltip(navIcon.icon)}
              onMouseLeave={() => setIsTooltipShown(false)}
            >
              {isLg && (
                <Tooltip text={navIcon.label}>{ICONS[navIcon.icon]}</Tooltip>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

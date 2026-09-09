import type { Metadata } from "next";
import { FavoritesBlock } from "@/components/largeBlocks/FavoritesBlock/FavoritesBlock";

export const metadata: Metadata = {
  title: "Избранное",
};

export default function Favorites() {
  return <FavoritesBlock />;
}

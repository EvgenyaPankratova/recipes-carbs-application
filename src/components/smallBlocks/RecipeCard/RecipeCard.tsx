import Image from "next/image";
import Link from "next/link";
import {RecipeCardProps} from "@/components/smallBlocks/RecipeCard/RecipeCard.types";

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const randomWidth = 1 + Math.floor(Math.random() * 3);

  return (
    <Link
      href={`recipes/${recipe.slug}`}
      className="rounded-3xl shadow-lg h-full overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border-4 border-orange cursor-pointer"
      style={{
        animationDelay: `${recipe.id * 50}ms`,
        flex: `${randomWidth} 1 0%`,
      }}
    >
      <div className="relative h-full overflow-hidden">
        <Image
          src={recipe.img}
          alt={recipe.title}
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute p-4 z-10">
          <h3 className="font-semibold text-[clamp(1.5rem,2vw,2rem)] line-clamp-2 xl:line-clamp-3 mb-1">
            {recipe.title}
          </h3>

          {recipe.kcal && (
            <p className="text-gray-600 text-[1.6rem] line-clamp-3 mb-3">
              {recipe.kcal} kcal
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;

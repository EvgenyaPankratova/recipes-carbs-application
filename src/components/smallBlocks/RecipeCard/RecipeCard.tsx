import Image from "next/image";

const RecipeCard = ({ recipe }) => {
  const randomHeight = 250 + Math.floor(Math.random() * 100);
  const randomWidth = 1 + Math.floor(Math.random() * 2);

  return (
    <div
      className="break-inside-avoid mb-6 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border-4 border-black"
      style={{
        animationDelay: `${recipe.id * 50}ms`,
        height: randomHeight,
        gridColumn: `span ${randomWidth}`,
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
          <h3 className="font-semibold text-[2rem] line-clamp-2 mb-1">
            {recipe.title}
          </h3>

          {recipe.kcal && (
            <p className="text-gray-600 text-[1.6rem] line-clamp-3 mb-3">
              {recipe.kcal} kcal
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

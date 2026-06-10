import CommonBlock from "@/app/components/largeBlocks/CommonBlock/CommonBlock";

const FavoritesBlock = () => {
  return (
    <CommonBlock
      mainTitle={"Мои рецепты"}
      mainTitleColor={"orange"}
      btnTitle={`Сортировка по калорий`}
    />
  );
};

export default FavoritesBlock;

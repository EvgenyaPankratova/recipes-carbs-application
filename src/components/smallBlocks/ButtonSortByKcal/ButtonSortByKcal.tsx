import { CommonButton } from "@/components/ui/Button/CommonButton";

export const ButtonSortByKcal = ({ sortBy, handleSort }) => {
  return (
    <CommonButton onClick={handleSort}>
      `Сортировка по ${sortBy === "kcalDesc" ? "возрастанию" : "убыванию"}{" "}
      калорий`
    </CommonButton>
  );
};

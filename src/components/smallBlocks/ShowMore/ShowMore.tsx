"use client";
import { CommonButton } from "@/components/ui/Button/CommonButton";

export const ShowMore = ({ total, visibleCount, setVisibleCount, step }) => {
  const remaining = total - visibleCount;
  const buttonText = `Показать ещё ${Math.min(remaining, step)} из ${total}`;

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + step, total));
  };

  if (remaining <= 0) {
    return null;
  }

  return (
    <div className="justify-self-center my-8">
      <CommonButton onClick={handleShowMore} theme="default">
        {buttonText}
      </CommonButton>
    </div>
  );
};

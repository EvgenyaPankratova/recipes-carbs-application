"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CommonButton } from "@/components/ui/Button/CommonButton";
import { DoubleBorderContainer } from "@/components/ui/DoubleBorderContainer/DoubleBorderContainer";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import User from "@/svg/user.svg";

export const Avatar = () => {
  const [avatar, setAvatar] = useLocalStorage("userAvatar", null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (avatar) setPreview(avatar);
  }, [avatar]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 500 * 1024) {
      alert("Максимум 500KB");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setPreview(base64);
      setAvatar(base64);
    };
    reader.readAsDataURL(file);
  };

  return (
    <DoubleBorderContainer className="relative left-4 bg-white before:bg-white max-w-[95%]">
      {preview ? (
        <div className="relative w-full h-[330px] xl:w-[330px]">
          <Image
            src={preview}
            fill
            alt="avatar"
            className="object-cover"
          ></Image>
        </div>
      ) : (
        <div className="relative bottom-6">
          <User className="w-full h-full p-14" />
        </div>
      )}

      <div className="flex justify-around items-center absolute bottom-4 w-full">
        <CommonButton className="!max-w-[70%]" theme="default">
          <div className="relative flex items-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="opacity-0 max-w-[50%]"
              multiple={false}
            />
            <p className="absolute -translate-x-1/2 left-1/2 w-full text-[clamp(1rem,2.5vw,1.2rem)]">
              {!avatar ? "Выбрать фото" : "Заменить фото"}
            </p>
          </div>
        </CommonButton>

        {avatar && (
          <div
            className="bg-lightPink cursor-pointer"
            onClick={() => setAvatar(null)}
          >
            удалить
          </div>
        )}
      </div>
    </DoubleBorderContainer>
  );
};

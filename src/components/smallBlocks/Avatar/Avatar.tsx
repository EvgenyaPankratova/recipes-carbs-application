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
    <DoubleBorderContainer className="relative aspect-square h-[330px] left-4 bg-white before:bg-white">
      {preview ? (
        <div className="relative h-[300px] w-[300px]">
          <Image
            src={preview}
            fill
            alt="avatar"
            className="object-cover"
          ></Image>
        </div>
      ) : (
        <div>
          <User className="w-full h-full" />
        </div>
      )}

      <CommonButton className="absolute bottom-4 right-4" theme="default">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          placeholder={"выбрать фото"}
          multiple={false}
        />
      </CommonButton>
    </DoubleBorderContainer>
  );
};

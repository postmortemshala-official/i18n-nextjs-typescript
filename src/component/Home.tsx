"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const t = useTranslations("Index");

  const router = useRouter();

  const changeLanguage = (locale: any) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^(\/(en|ar))?/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div>
      <h1>message : {t("message")}</h1>
      <div>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("ar")}>العربية</button>
      </div>
    </div>
  );
};

export default Home;

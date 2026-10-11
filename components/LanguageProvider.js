"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { dict, catNames } from "@/data/i18n";

// Poori website ki language (English / Arabic) yahan se control hoti hai.
const LangContext = createContext({ lang: "en", t: dict.en, cat: (c) => c, setLang: () => {} });

function applyToPage(lang) {
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
}

export function LanguageProvider({ children, initialLang = "en" }) {
  const [lang, setLangState] = useState(initialLang);

  // Pichli dafa jo language chuni thi, wohi khule
  useEffect(() => {
    let saved = null;
    try { saved = localStorage.getItem("lang"); } catch (e) {}
    if (saved === "ar" || saved === "en") {
      setLangState(saved);
      applyToPage(saved);
    }
  }, []);

  function setLang(next) {
    setLangState(next);
    applyToPage(next);
    try { localStorage.setItem("lang", next); } catch (e) {}
  }

  const value = { lang, setLang, t: dict[lang], cat: (c) => catNames[lang][c] || c };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

// EN | AR button
export function LanguageSwitch({ className = "" }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`lang-switch ${className}`} role="group" aria-label="Language">
      <button type="button" className={lang === "en" ? "active" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>EN</button>
      <button type="button" className={lang === "ar" ? "active" : ""} onClick={() => setLang("ar")} aria-pressed={lang === "ar"} lang="ar">AR</button>
    </div>
  );
}

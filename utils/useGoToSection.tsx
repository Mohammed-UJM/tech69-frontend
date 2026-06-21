"use client";

import { useRouter } from "next/navigation";

export const useGoToSection = () => {
  const router = useRouter();

  return (id: string) => {
    const specialTop = new Set(["repair-form", "home"]);

    const goTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const scrollToId = () => {
      const el = document.getElementById(id);
      if (!el) return;

      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const executeScroll = () => {
      if (specialTop.has(id)) {
        goTop();
      } else {
        scrollToId();
      }
    };

    const isNotHome =
      globalThis.window !== undefined && globalThis.location.pathname !== "/";

    if (isNotHome) {
      router.push("/");

      setTimeout(() => {
        executeScroll();
      }, 150);
    } else {
      executeScroll();
    }
  };
};

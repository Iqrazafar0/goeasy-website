"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Scroll par cheezein aahista aahista nazar aati hain (reveal),
// header scroll par shadow leta hai, aur hero halka sa parallax karta hai.
export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    // Stagger: parent ke bachon ko baari baari delay do
    document.querySelectorAll(".stagger").forEach((parent) => {
      Array.from(parent.children).forEach((child, i) => {
        child.style.setProperty("--d", `${i * 90}ms`);
      });
    });

    const targets = document.querySelectorAll(".reveal, .stagger");
    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px -60px 0px" }
      );
      targets.forEach((t) => io.observe(t));
    } else {
      targets.forEach((t) => t.classList.add("in"));
    }

    // Header shadow + hero parallax
    const header = document.querySelector(".header");
    const heroBg = document.querySelector(".hero-bg") || document.querySelector(".hero-glow");
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (header) header.classList.toggle("scrolled", y > 10);
        if (heroBg && y < 900) heroBg.style.transform = `translateY(${y * 0.25}px)`;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (io) io.disconnect();
    };
  }, [pathname]);

  return null;
}

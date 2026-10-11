"use client";
import { useRouter, useSearchParams } from "next/navigation";
import FleetGrid, { allBrands } from "./FleetGrid";
import { categories } from "@/data/cars";

// Fleet page: link se category/brand padhta hai (jaise /fleet?category=SUV&brand=BMW)
export default function FleetBrowser() {
  const params = useSearchParams();
  const router = useRouter();
  const c = params.get("category");
  const b = params.get("brand");
  const category = c && categories.some((x) => x.name === c) ? c : "All";
  const brand = b && allBrands.includes(b) ? b : "All";

  function onChange(nextCat, nextBrand) {
    const q = new URLSearchParams();
    if (nextCat !== "All") q.set("category", nextCat);
    if (nextBrand !== "All") q.set("brand", nextBrand);
    const s = q.toString();
    router.replace(s ? `/fleet?${s}` : "/fleet", { scroll: false });
  }

  return <FleetGrid filters={{ category, brand, onChange }} />;
}

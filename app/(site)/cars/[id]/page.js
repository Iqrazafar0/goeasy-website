import { notFound } from "next/navigation";
import CarDetail from "@/components/pages/CarDetail";
import { cars, getCar } from "@/data/cars";

// Har car ka apna page pehle se ban jata hai (fast loading)
export function generateStaticParams() {
  return cars.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const car = getCar(id);
  if (!car) return {};
  return {
    title: `Rent ${car.name} in Dubai`,
    description: `Rent the ${car.name} in Dubai from AED ${car.daily.toLocaleString()} per day. ${car.engine}, ${car.seats} seats. Free airport delivery. Book on WhatsApp.`,
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  if (!getCar(id)) notFound();
  return <CarDetail key={id} id={id} />;
}

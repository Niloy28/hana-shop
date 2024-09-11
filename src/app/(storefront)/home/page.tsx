import Hero from "@/components/Hero";
import CategorySelection from "@/components/home/CategorySelection";

export default function Home() {
  return (
    <div className="mx-12 my-8">
      <Hero />
      <CategorySelection />
    </div>
  );
}

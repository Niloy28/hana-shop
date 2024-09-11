import CategorySelection from "@/components/home/CategorySelection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="mx-12 my-8">
      <Hero />
      <CategorySelection />
      <FeaturedProducts />
    </div>
  );
}

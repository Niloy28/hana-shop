import Link from "next/link";

import Bouquet from "@/../public/bouquet.png";
import Mixed from "@/../public/mixed.png";
import Single from "@/../public/single.png";
import CategoryView from "./CategoryView";

const CategorySelection = () => {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold capitalize tracking-tight">
          Shop by category
        </h2>
        <Link href="/products" className="hover:opacity-80">
          Browse All
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-6 lg:gap-8">
        <CategoryView category="single" image={Single}>
          Single Flowers
        </CategoryView>
        <CategoryView category="mixed" image={Mixed}>
          Mixed Flowers
        </CategoryView>
        <CategoryView category="bouquet" image={Bouquet}>
          Bouquets
        </CategoryView>
      </div>
    </div>
  );
};

export default CategorySelection;

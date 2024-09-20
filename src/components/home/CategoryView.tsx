import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const CategoryView = ({
  children,
  image,
  category,
}: Readonly<{
  children: React.ReactNode;
  image: StaticImageData;
  category: string;
}>) => {
  return (
    <Link
      href={`/products/category/${category}`}
      className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-xl sm:aspect-w-1 sm:row-span-2"
    >
      <Image
        src={image}
        alt={`${category} flower`}
        className="object-cover object-center"
      />
      <div className="bg-gradient-to-b from-transparent to-black opacity-50" />
      <div className="flex items-end p-6">
        <div>
          <h3 className="font-semibold capitalize text-white">{children}</h3>
          <p className="mt-1 text-sm text-white">Shop Now</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryView;

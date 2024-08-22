import { XIcon } from "lucide-react";
import Image from "next/image";

const ImageUploadDisplay = ({
  image,
  index,
  onImageDelete,
}: Readonly<{
  image: string;
  index: number;
  onImageDelete: (index: number) => void;
}>) => {
  return (
    <div key={index} className="relative h-[100px] w-[100px] rounded-lg shadow">
      <Image
        height={100}
        width={100}
        src={image}
        alt="Product image"
        className="h-full w-full rounded-lg border"
      />
      <button
        type="button"
        className="absolute -right-2 -top-2 rounded-lg bg-red-600 text-white"
        onClick={() => onImageDelete(index)}
      >
        <XIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ImageUploadDisplay;

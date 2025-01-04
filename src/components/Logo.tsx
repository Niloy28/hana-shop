import Image from "next/image";

// User Imports
import LogoImage from "@/../public/Design.png";

const Logo = () => {
  return (
    <span className="flex items-center justify-center">
      <Image src={LogoImage} alt="Shop logo" width={50} height={50} />
      <b className="hidden text-lg lg:block">Hana Shop (花屋)</b>
    </span>
  );
};

export default Logo;

import React from "react";
import Image from "next/image";

// User Imports
import LogoImage from "@/../public/Design.png";

const Logo = () => {
	return (
		<div className="flex justify-center items-center">
			<Image src={LogoImage} alt="Shop logo" width={50} height={50} />
			<b className="hidden lg:block text-lg">Hana Shop (花屋)</b>
		</div>
	);
};

export default Logo;

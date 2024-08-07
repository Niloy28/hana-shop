import React from "react";

import { Button } from "../ui/button";
import { CircleUser } from "lucide-react";

const Avatar = () => {
	return (
		<Button className="w-10 h-10 rounded-full" variant="secondary" size="icon">
			<CircleUser className="w-5 h-5 " />
		</Button>
	);
};

export default Avatar;

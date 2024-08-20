import { CircleUser } from "lucide-react";
import { Button } from "../ui/button";

const Avatar = () => {
  return (
    <Button className="h-10 w-10 rounded-full" variant="secondary" size="icon">
      <CircleUser className="h-5 w-5" />
    </Button>
  );
};

export default Avatar;

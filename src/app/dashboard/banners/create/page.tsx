import BannerForm from "@/components/dashboard/banners/BannerForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Banner | Hana Shop (花屋)",
  description: "Create new site banner image",
};

const BannerCreate = () => {
  return <BannerForm />;
};

export default BannerCreate;

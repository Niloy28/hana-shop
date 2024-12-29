import { sendCustomerInquiry } from "@/app/actions/contactActions";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Hana Shop (花屋)",
  description: "A shop to buy flowers for your loved ones.",
};

const ContactPage = () => {
  return (
    <Card className="m-auto mt-12 flex max-w-screen-lg flex-col items-center justify-center p-8">
      <h2 className="text-center text-3xl font-bold">Contact Us!</h2>
      <ContactForm formAction={sendCustomerInquiry} />
    </Card>
  );
};

export default ContactPage;

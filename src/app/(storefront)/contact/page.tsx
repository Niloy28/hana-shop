import { sendCustomerInquiry } from "@/app/actions/contactActions";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";

const ContactPage = () => {
  return (
    <Card className="m-auto mt-12 flex max-w-screen-lg flex-col items-center justify-center p-8">
      <h2 className="text-center text-3xl font-bold">Contact Us!</h2>
      <ContactForm formAction={sendCustomerInquiry} />
    </Card>
  );
};

export default ContactPage;

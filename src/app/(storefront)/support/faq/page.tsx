import InfoPageTemplate from "@/components/InfoPageTemplate";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqPage = () => {
  return (
    <InfoPageTemplate title="Frequently Asked Questions">
      <Accordion
        type="single"
        collapsible
        className="md:min-w-[32rem] lg:min-w-[48rem] xl:min-w-[64rem]"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>1. How do I place an order?</AccordionTrigger>
          <AccordionContent>
            To place an order, simply browse our selection of flowers, add your
            desired items to the cart, and proceed to checkout. Follow the
            prompts to complete your purchase.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            2. What payment methods do you accept?
          </AccordionTrigger>
          <AccordionContent>
            We accept various payment methods including credit cards, debit
            cards, and PayPal.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>3. How can I track my order?</AccordionTrigger>
          <AccordionContent>
            Once your order has been shipped, you will receive a confirmation
            email with a tracking number. You can use this number to track your
            order on our website or the carrier&apos;s website.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>4. What is your return policy?</AccordionTrigger>
          <AccordionContent>
            If you are not satisfied with your purchase, please contact us
            within 48 hours of delivery. We will arrange for a replacement or a
            full refund. For more details, please refer to our Refund Policy
            page.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            5. Do you offer same-day delivery?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we offer same-day delivery for orders placed before 12 PM local
            time. Please note that same-day delivery is subject to availability
            and may not be available in all areas.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            6. How can I contact customer service?
          </AccordionTrigger>
          <AccordionContent>
            You can contact our customer service team at cs@hanashop.com or call
            us at +08012345678. We are available Monday to Friday from 9 AM to 5
            PM.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>7. Can I customize my order?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer customization options for many of our flower
            arrangements. Please contact us to discuss your specific
            requirements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>
            8. Do you deliver internationally?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we offer international delivery to select countries. Please
            check our Shipping Policy page for more details.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>9. How do I care for my flowers?</AccordionTrigger>
          <AccordionContent>
            To keep your flowers fresh, trim the stems at an angle, change the
            water every two days, and keep them away from direct sunlight and
            heat sources.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger>
            10. What if I have a problem with my order?
          </AccordionTrigger>
          <AccordionContent>
            If you experience any issues with your order, please contact our
            customer service team. We will work with you to resolve the issue as
            quickly as possible.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </InfoPageTemplate>
  );
};

export default FaqPage;

import InfoPageTemplate from "@/components/InfoPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Hana Shop (花屋)",
  description: "A shop to buy flowers for your loved ones.",
};

const RefundPage = () => {
  return (
    <InfoPageTemplate title="Refund Policy">
      At Hana Shop（花屋）, we strive to ensure that you are completely
      satisfied with your purchase. If for any reason you are not satisfied with
      your order, we are here to help.
      <br />
      <br />
      <h4 className="text-lg font-semibold">Eligibility for Refunds</h4>
      <ul className="list-inside list-disc">
        <li>
          <b>Damaged or Defective Products:</b> If your flowers arrive damaged
          or defective, please contact us within 48 hours of delivery. We will
          arrange for a replacement or a full refund.
        </li>
        <li>
          <b>Incorrect Orders:</b> If you receive an incorrect order, please
          notify us within 48 hours. We will correct the mistake by sending the
          correct flowers or issuing a full refund.
        </li>
        <li>
          <b>Change of Mind:</b> If you change your mind about your purchase,
          please contact us within 24 hours of placing your order. We will
          cancel the order and issue a full refund.
        </li>
      </ul>
      <br />
      <br />
      <h4 className="text-lg font-semibold">How to Request a Refund</h4>
      <ul className="list-inside list-decimal">
        <li>
          <b>Contact Us:</b> Reach out to our customer service team at
          cs@hanashop.com or call us at +08012345678.
        </li>
        <li>
          <b>Provide Details:</b> Please provide your order number, a
          description of the issue, and any relevant photos if applicable.
        </li>
        <li>
          <b>Return Instructions:</b> If a return is necessary, we will provide
          you with instructions on how to return the product.
        </li>
      </ul>
      <br />
      <br />
      <h4 className="text-lg font-semibold">Processing Refunds</h4>
      <ul className="list-inside list-disc">
        <li>
          Refunds will be processed within 7-10 business days after we receive
          your request.
        </li>
        <li>
          Refunds will be issued to the original payment method used during the
          purchase.
        </li>
        <li>
          You will receive a confirmation email once your refund has been
          processed.
        </li>
      </ul>
      <br />
      <br />
      <h4 className="text-lg font-semibold">Exceptions</h4>
      <ul className="list-inside list-disc">
        <li>
          Custom or personalized orders are non-refundable unless they arrive
          damaged or defective.
        </li>
        <li>Sale items are final sale and cannot be refunded.</li>
      </ul>
      <br />
      <br />
      We value your business and are committed to providing you with the best
      possible service. If you have any questions or concerns, please do not
      hesitate to contact us. Thank you for choosing Hana Shop（花屋）!
    </InfoPageTemplate>
  );
};

export default RefundPage;

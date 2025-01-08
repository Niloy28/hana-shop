import InfoPageTemplate from "@/components/InfoPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Hana Shop (花屋)",
  description: "A shop to buy flowers for your loved ones.",
};

const AboutPage = () => {
  return (
    <InfoPageTemplate title="About Hana Shop（花屋）">
      Welcome to Hana Shop (花屋), your premier destination for exquisite floral
      arrangements and exceptional customer service. Nestled in the heart of
      Kyoto, Hana Shop has been bringing the beauty and elegance of flowers to
      our community for over a decade. At Hana Shop, we believe that flowers
      have the power to convey emotions, celebrate special moments, and brighten
      everyday life. Our talented team of florists is dedicated to creating
      stunning bouquets and arrangements that capture the essence of each
      occasion. Whether you&apos;re looking for a romantic bouquet of roses, a
      cheerful arrangement of sunflowers, or a sophisticated display of orchids,
      we have something to suit every taste and style. Our Mission Our mission
      is to provide our customers with the highest quality flowers and
      exceptional service. We source our flowers from trusted growers and
      suppliers, ensuring that each bloom is fresh, vibrant, and long-lasting.
      We take pride in our craftsmanship and attention to detail, and we are
      committed to exceeding your expectations with every order.
      <br />
      <br />
      <h4 className="text-lg font-semibold">Why Choose Hana Shop?</h4>
      <ul className="list-inside list-disc">
        <li>
          <b>Expert Florists: </b>Our skilled florists have years of experience
          and a passion for creating beautiful floral designs. They are always
          ready to help you choose the perfect arrangement for any occasion.
        </li>
        <li>
          <b>Fresh Flowers: </b>We source our flowers from the best growers,
          ensuring that you receive the freshest and most vibrant blooms.
        </li>
        <li>
          <b>Personalized Service: </b>We take the time to understand your needs
          and preferences, offering personalized recommendations and custom
          arrangements.
        </li>
        <li>
          <b>Convenient Delivery: </b>We offer reliable and timely delivery
          services, so you can enjoy the beauty of our flowers wherever you are.
        </li>
      </ul>
      <br />
      <br />
      <h4 className="text-lg font-semibold">Visit Us</h4>
      We invite you to visit our shop and explore our wide selection of flowers
      and gifts. Whether you&apos;re celebrating a special occasion or simply
      want to brighten someone&apos;s day, Hana Shop is here to help you make
      every moment memorable. Thank you for choosing Hana Shop (花屋). We look
      forward to serving you and sharing the beauty of flowers with you.
    </InfoPageTemplate>
  );
};

export default AboutPage;

import FooterLabel from "./FooterLabel";
import InfoLabel from "./InfoLabel";

function Footer() {
  return (
    <div
      className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <InfoLabel />
      <FooterLabel />
    </div>
  );
}

export default Footer;

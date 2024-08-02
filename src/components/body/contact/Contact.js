import GoogleMap from "../../layout/GoogleMap";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

const Contact = () => {
  return (
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 class="section-title ff-secondary text-center text-primary fw-normal">
            Contact Us
          </h5>
          <h1 class="mb-5">Contact For Any Query</h1>
        </div>
        <div class="row g-4">
          <div class="col-12">
            <ContactLinks />
          </div>
          <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
            <GoogleMap />
          </div>
          <div class="col-md-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

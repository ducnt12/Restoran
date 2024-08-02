function InfoLabel() {
  return (
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
            Company
          </h4>
          <a className="btn btn-link" href="/about">
            About Us
          </a>
          <a className="btn btn-link" href="/contact">
            Contact Us
          </a>
          <a className="btn btn-link" href="/book-table">
            Reservation
          </a>
          <a className="btn btn-link" href="/">
            Privacy Policy
          </a>
          <a className="btn btn-link" href="/">
            Terms & Condition
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
            Contact
          </h4>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3"></i>123 Street, New York,
            USA
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3"></i>+012 345 67890
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3"></i>info@example.com
          </p>
          <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social" href="/">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-outline-light btn-social" href="/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-outline-light btn-social" href="/">
              <i className="fab fa-youtube"></i>
            </a>
            <a className="btn btn-outline-light btn-social" href="/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
            Opening
          </h4>
          <h5 className="text-light fw-normal">Monday - Saturday</h5>
          <p>09AM - 09PM</p>
          <h5 className="text-light fw-normal">Sunday</h5>
          <p>10AM - 08PM</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
            Newsletter
          </h4>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div
            className="position-relative mx-auto"
            style={{ maxWidth: "400px" }}
          >
            <input
              className="form-control border-primary w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoLabel;

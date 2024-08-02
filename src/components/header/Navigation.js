import { useEffect } from "react";

function Navigation() {
  // Control sticky bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        document
          .querySelector(".navbar")
          .classList.add("sticky-top", "shadow-sm");
      } else {
        document
          .querySelector(".navbar")
          .classList.remove("sticky-top", "shadow-sm");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <a href="/" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-utensils me-3"></i>Restoran
        </h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <a id="home" href="/" className="nav-item nav-link">
            Home
          </a>
          <a id="about" href="/about" className="nav-item nav-link">
            About
          </a>
          <a id="service" href="/service" className="nav-item nav-link">
            Service
          </a>
          <a id="menu" href="/menu" className="nav-item nav-link">
            Menu
          </a>
          <div className="nav-item dropdown">
            <a
              id="pages"
              role="button"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu m-0">
              <a id="book-table" href="/book-table" className="dropdown-item">
                Booking
              </a>
              <a id="team" href="/team" className="dropdown-item">
                Our Team
              </a>
              <a id="testimonial" href="/testimonial" className="dropdown-item">
                Testimonial
              </a>
            </div>
          </div>
          <a id="contact" href="/contact" className="nav-item nav-link">
            Contact
          </a>
        </div>
        <a href="/book-table" className="btn btn-primary py-2 px-4">
          Book A Table
        </a>
      </div>
    </nav>
  );
}

export default Navigation;

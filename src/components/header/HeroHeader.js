import { useEffect, useReducer } from "react";

function HeroHeader(props) {
  function reducer(state, action) {
    switch (action.type) {
      case "/about":
        return "About Us";
      case "/service":
        return "Services";
      case "/menu":
        return "Food Menu";
      case "/book-table":
        return "Booking";
      case "/team":
        return "Our Team";
      case "/testimonial":
        return "Testimonial";
      case "/contact":
        return "Contact Us";
      default:
        return "Home";
    }
  }
  // Use reducer to manage page's name
  const [pageName, dispatch] = useReducer(reducer, "");
  // Change page title
  useEffect(() => {
    dispatch({ type: props.page });
    document.title = pageName;
  }, [props.page, pageName]);

  return (
    <div class="container-xxl py-5 bg-dark hero-header mb-5">
      {pageName === "Home" ? (
        <div class="container-xxl py-5 bg-dark hero-header mb-5">
          <div class="container my-5 py-5">
            <div class="row align-items-center g-5">
              <div class="col-lg-6 text-center text-lg-start">
                <h1 class="display-3 text-white animated slideInLeft">
                  Enjoy Our
                  <br />
                  Delicious Meal
                </h1>
                <p class="text-white animated slideInLeft mb-4 pb-2">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <a
                  href="/book-table"
                  class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
                >
                  Book A Table
                </a>
              </div>
              <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                <img class="img-fluid" src="resources/hero.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="container text-center my-5 pt-5 pb-4">
          <h1 class="display-3 text-white mb-3 animated slideInDown">
            {pageName}
          </h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center text-uppercase">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item text-white active" aria-current="page">
                {pageName}
              </li>
            </ol>
          </nav>
        </div>
      )}
    </div>
  );
}

export default HeroHeader;

import Images from "./Images";
import InfoCol from "./InfoCol";

function About() {
  const imgSrc = [
    {
      img: "about-1.jpg",
      style: {},
      divClass: "text-start",
      imgClass: "img-fluid rounded w-100 wow zoomIn",
    },
    {
      img: "about-2.jpg",
      style: { marginTop: "25%" },
      divClass: "text-start",
      imgClass: "img-fluid rounded w-75 wow zoomIn",
    },
    {
      img: "about-3.jpg",
      style: {},
      divClass: "text-end",
      imgClass: "img-fluid rounded w-75 wow zoomIn",
    },
    {
      img: "about-4.jpg",
      style: {},
      divClass: "text-end",
      imgClass: "img-fluid rounded w-100 wow zoomIn",
    },
  ];

  return (
    // <!-- About Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <Images imgSrc={imgSrc} />
          </div>
          <div class="col-lg-6">
            <InfoCol />
          </div>
        </div>
      </div>
    </div>
    /* <!-- About End --> */
  );
}

export default About;

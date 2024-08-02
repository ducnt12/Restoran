import About from "../components/body/about/About";
import Home from "../components/body/home/Home";
import Menu from "../components/body/menu/Menu";
import Service from "../components/body/service/Service";
import BookingPage from "../components/body/reservation/BookingPage";
import Team from "../components/body/team/Team";
import Testimonial from "../components/body/testimonial/Testimonial";
import Contact from "../components/body/contact/Contact";

export const pathConfig = [
  { pathname: "/", component: <Home /> },
  { pathname: "/menu", component: <Menu /> },
  { pathname: "/about", component: <About /> },
  { pathname: "/book-table", component: <BookingPage /> },
  { pathname: "/service", component: <Service /> },
  { pathname: "/team", component: <Team /> },
  { pathname: "/testimonial", component: <Testimonial /> },
  { pathname: "/contact", component: <Contact /> },
];

export const videoPath = {
  reservation: "https://www.youtube.com/embed/DWRcNpR6Kdc",
};

const setting = (slidesToShow, slidesToScroll) => {
  return {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
};
export const carouselSetting = {
  ...setting(3, 1),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        ...setting(2, 1),
      },
    },
    {
      breakpoint: 600,
      settings: {
        ...setting(1, 1),
      },
    },
  ],
};

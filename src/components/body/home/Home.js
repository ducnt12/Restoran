import About from "../about/About";
import BookingPage from "../reservation/BookingPage";
import Service from "../service/Service";
import Team from "../team/Team";
import Testimonial from "../testimonial/Testimonial";

function Home() {
  return (
    <div>
      <Service />
      <About />
      <BookingPage />
      <Team />
      <Testimonial />
    </div>
  );
}

export default Home;

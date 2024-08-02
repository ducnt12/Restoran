import ReservationForm from "./ReservationForm";
import Video from "./Video";
import VideoModal from "./VideoModal";

const BookingPage = () => {
  return (
    <div>
      {/* <!-- Reservation Start --> */}
      <div class="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
        <div class="row g-0">
          <div class="col-md-6">
            <Video />
          </div>
          <div class="col-md-6 bg-dark d-flex align-items-center">
            <ReservationForm />
          </div>
        </div>
      </div>

      <VideoModal />
      {/* Reservation End */}
    </div>
  );
};

export default BookingPage;

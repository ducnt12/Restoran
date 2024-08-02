import { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard";
import { getFeedbacks } from "../../../API/FetchAPI";
import Slider from "react-slick";
import { carouselSetting } from "../../../config/config";

const Testimonial = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    getFeedbacks("likes", "desc", (data) => {
      setFeedbacks(data.comments);
    });
  });

  return (
    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container">
        <div class="text-center">
          <h5 class="section-title ff-secondary text-center text-primary fw-normal">
            Testimonial
          </h5>
          <h1 class="mb-5">Our Clients Say!!!</h1>
        </div>
        <Slider className="testimonial-carousel" {...carouselSetting}>
          {feedbacks.map((feedback) => (
            <FeedbackCard feedback={feedback} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;

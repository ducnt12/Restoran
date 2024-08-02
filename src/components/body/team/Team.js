import { useEffect, useState } from "react";
import { getChefs } from "../../../API/FetchAPI";
import MemberCard from "./MemberCard";
import Loading from "../../layout/Loading";

const Team = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    getChefs((data) => {
      setChefs(data.users);
    });
  }, []);

  return (
    <div>
      {chefs.length === 0 ? (
        <Loading />
      ) : (
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 class="section-title ff-secondary text-center text-primary fw-normal">
              Team Members
            </h5>
            <h1 class="mb-5">Our Master Chefs</h1>
          </div>
          <div class="row g-4">
            {chefs.map((chef, index) => (
              <MemberCard member={chef} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;

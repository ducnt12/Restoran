import { useEffect, useState } from "react";
import { getUserByID } from "../../../API/FetchAPI";
import Loading from "../../layout/Loading";

const FeedbackCard = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (props.feedback.user.id) {
      getUserByID(props.feedback.user.id, (data) => {
        setUser(data);
      });
    }
  }, [props.feedback.user.id]);

  return (
    <div>
      {user.id ? (
        <div class="testimonial-item bg-transparent border rounded p-4">
          <i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
          <p>{props.feedback.body}</p>
          <div class="d-flex align-items-center">
            <img
              class="img-fluid flex-shrink-0 rounded-circle"
              src={user.image}
              style={{ width: "50px", height: "50px" }}
              alt="..."
            />
            <div class="ps-3">
              <h5 class="mb-1">{`${user.firstName} ${user.lastName}`}</h5>
              {user.company ? (
                <small>{user.company.title}</small>
              ) : (
                <small className="placeholder"></small>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default FeedbackCard;

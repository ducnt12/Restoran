import { useState } from "react";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    noPeople: "1",
    datetime: new Date(),
  });

  const handleFormData = (field, data) => {
    setFormData({ ...formData, [field]: data });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //Stop page from re-loading
    console.log(formData);
  };
  return (
    <div class="p-5 wow fadeInUp" data-wow-delay="0.2s">
      <h5 class="section-title ff-secondary text-start text-primary fw-normal">
        Reservation
      </h5>
      <h1 class="text-white mb-4">Book A Table Online</h1>
      <form onSubmit={handleSubmit}>
        <div class="row g-3">
          <div class="col-md-6">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleFormData("name", e.target.value)}
              />
              <label for="name">Your Name</label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => handleFormData("email", e.target.value)}
              />
              <label for="email">Your Email</label>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="form-floating date"
              id="date3"
              data-target-input="nearest"
            >
              <input
                type="datetime-local"
                class="form-control datetimepicker-input"
                id="datetime"
                placeholder="Date & Time"
                value={formData.datetime}
                onChange={(e) =>
                  handleFormData("datetime", new Date(e.target.value))
                }
              />
              <label for="datetime">Date & Time</label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-floating">
              <select
                class="form-select"
                id="select1"
                value={formData.noPeople}
                onChange={(e) => handleFormData("noPeople", e.target.value)}
                defaultValue={"1"}
              >
                <option value="1">People 1</option>
                <option value="2">People 2</option>
                <option value="3">People 3</option>
              </select>
              <label for="select1">No Of People</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Special Request"
                id="message"
                style={{ height: "100px" }}
                value={formData.message}
                onChange={(e) => handleFormData("message", e.target.value)}
              ></textarea>
              <label for="message">Special Request</label>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary w-100 py-3" type="submit">
              Book Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;

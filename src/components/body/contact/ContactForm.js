import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const handleFormData = (field, data) => {
    setFormData({ ...formData, [field]: data });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div class="wow fadeInUp" data-wow-delay="0.2s">
      <form onSubmit={submitForm}>
        <div class="row g-3">
          <div class="col-md-6">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Your Name"
                onChange={(e) =>
                  handleFormData(e.currentTarget.id, e.target.value)
                }
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
                onChange={(e) =>
                  handleFormData(e.currentTarget.id, e.target.value)
                }
              />
              <label for="email">Your Email</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="subject"
                placeholder="Subject"
                onChange={(e) =>
                  handleFormData(e.currentTarget.id, e.target.value)
                }
              />
              <label for="subject">Subject</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a message here"
                id="message"
                style={{ height: "150px" }}
                onChange={(e) =>
                  handleFormData(e.currentTarget.id, e.target.value)
                }
              ></textarea>
              <label for="message">Message</label>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary w-100 py-3" type="submit">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

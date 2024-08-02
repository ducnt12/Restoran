import ServiceCard from "./ServiceCard";

const Service = () => {
  const services = [
    {
      title: "Master Chefs",
      content:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      iconName: "fa-user-tie",
    },
    {
      title: "Quality Food",
      content:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      iconName: "fa-utensils",
    },
    {
      title: "Online Order",
      content:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      iconName: "fa-cart-plus",
    },
    {
      title: "24/7 Service",
      content:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      iconName: "fa-headset",
    },
  ];

  return (
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 class="section-title ff-secondary text-center text-primary fw-normal">
            Our Services
          </h5>
          <h1 class="mb-5">Explore Our Services</h1>
        </div>
        <div class="row g-4">
          {services.map((service) => (
            <ServiceCard
              iconName={service.iconName}
              title={service.title}
              content={service.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;

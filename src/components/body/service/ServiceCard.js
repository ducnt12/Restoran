const ServiceCard = (props) => {
  return (
    <div class="col-lg-6 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
      <div class="service-item rounded pt-3">
        <div class="p-4">
          <i class={`fa fa-3x ${props.iconName} text-primary mb-4`}></i>
          <h5>{props.title}</h5>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

const MemberCard = (props) => {
  return (
    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div class="team-item text-center rounded overflow-hidden">
        <div class="rounded-circle overflow-hidden m-4">
          <img
            class="img-fluid"
            src={`resources/team-${props.index + 1}.jpg`}
            alt=""
          />
        </div>
        <h5 class="mb-0">{`${props.member.firstName} ${props.member.lastName}`}</h5>
        <small>Chef</small>
        <div class="d-flex justify-content-center mt-3">
          <a
            class="btn btn-square btn-primary mx-1"
            href={`www.facebook.com/${props.member.username}`}
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            class="btn btn-square btn-primary mx-1"
            href={`www.twitter.com/${props.member.username}`}
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            class="btn btn-square btn-primary mx-1"
            href={`www.instagram.com/${props.member.username}`}
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;

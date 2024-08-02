function ItemCard(props) {
  return (
    <div class="col-lg-6">
      <div class="d-flex align-items-center">
        <img
          class="flex-shrink-0 img-fluid rounded"
          src={props.data.image}
          alt=""
          style={{ width: "80px" }}
        />
        <div class="w-100 d-flex flex-column text-start ps-4">
          <h5 class="d-flex justify-content-between border-bottom pb-2">
            <span>{props.data.name}</span>
            <span class="text-primary">$115</span>
          </h5>
          <small class="fst-italic">
            Cuisine: {props.data.cuisine}
            <br />
            Rating: {props.data.rating}
          </small>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;

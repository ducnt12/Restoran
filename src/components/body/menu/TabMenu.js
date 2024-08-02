function TabMenu(props) {
  return (
    <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
      <li
        class="nav-item"
        id="breakfast"
        onClick={(e) => props.handleTabAction(e.currentTarget.id)}
      >
        <a
          class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
          data-bs-toggle="pill"
          href="#breakfast"
        >
          <i class="fa fa-coffee fa-2x text-primary"></i>
          <div class="ps-3">
            <small class="text-body">Popular</small>
            <h6 class="mt-n1 mb-0">Breakfast</h6>
          </div>
        </a>
      </li>
      <li
        class="nav-item"
        id="lunch"
        onClick={(e) => props.handleTabAction(e.currentTarget.id)}
      >
        <a
          class="d-flex align-items-center text-start mx-3 pb-3"
          data-bs-toggle="pill"
          href="#lunch"
        >
          <i class="fa fa-hamburger fa-2x text-primary"></i>
          <div class="ps-3">
            <small class="text-body">Special</small>
            <h6 class="mt-n1 mb-0">Lunch</h6>
          </div>
        </a>
      </li>
      <li
        class="nav-item"
        id="dinner"
        onClick={(e) => props.handleTabAction(e.currentTarget.id)}
      >
        <a
          class="d-flex align-items-center text-start mx-3 me-0 pb-3"
          data-bs-toggle="pill"
          href="#dinner"
        >
          <i class="fa fa-utensils fa-2x text-primary"></i>
          <div class="ps-3">
            <small class="text-body">Lovely</small>
            <h6 class="mt-n1 mb-0">Dinner</h6>
          </div>
        </a>
      </li>
    </ul>
  );
}

export default TabMenu;

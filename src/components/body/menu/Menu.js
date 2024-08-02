import { useEffect, useRef, useState } from "react";
import { getDishesBy, LIMIT, MEALTYPE } from "../../../API/FetchAPI.js";
import TabMenu from "./TabMenu.js";
import TabContent from "./TabContent.js";
import Loading from "../../layout/Loading.js";
import ReactPaginate from "react-paginate";

function Menu() {
  const [dishes, setDishes] = useState([]);
  const [tab, setTab] = useState("breakfast");
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const total = useRef(0);
  const pageCount = useRef(0);

  // Handle tab clicked
  const handleTabClick = (data) => {
    setTab(data);
    // setOffset(0);
    // const currActive = document.querySelector(".page-item.active");
    // if (currActive) {
    //   currActive.classList.remove("active");
    // }
    // const firstPageItem = document.querySelector(".page-item");
    // if (firstPageItem) {
    //   firstPageItem.classList.add("active");
    // }
  };

  useEffect(() => {
    setLoading(true); //display loading screen
    // Get dishes data on tab clicked
    getDishesBy(`${MEALTYPE}/${tab}`, offset, (data) => {
      setDishes(data.recipes);
      total.current = data.total;
      pageCount.current = Math.ceil(data.total / LIMIT);
      setLoading(false); // display dishs
    });
  }, [tab, offset]);

  return (
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 class="section-title ff-secondary text-center text-primary fw-normal">
            Food Menu
          </h5>
          <h1 class="mb-5">Most Popular Items</h1>
        </div>
        <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
          <TabMenu handleTabAction={handleTabClick} />
          {loading ? <Loading /> : <TabContent dishes={dishes} />}
          <ReactPaginate
            containerClassName="pagination"
            activeClassName="active"
            pageClassName="page-item"
            breakLabel="..."
            onPageChange={(event) =>
              setOffset((event.selected * LIMIT) % total.current)
            }
            pageCount={pageCount.current}
            previousLabel="< Previous "
            nextLabel=" Next >"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;

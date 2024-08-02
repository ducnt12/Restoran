import ItemCard from "./ItemCard";

function TabContent(props) {
  return (
    <div class="tab-content">
      <div id="breakfast" class="tab-pane fade show p-0 active">
        <div class="row g-4">
          {props.dishes.map((item) => (
            <ItemCard data={item} />
          ))}
        </div>
      </div>
      <div id="lunch" class="tab-pane fade show p-0">
        <div class="row g-4">
          {props.dishes.map((item) => (
            <ItemCard data={item} />
          ))}
        </div>
      </div>
      <div id="dinner" class="tab-pane fade show p-0">
        <div class="row g-4">
          {props.dishes.map((item) => (
            <ItemCard data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TabContent;

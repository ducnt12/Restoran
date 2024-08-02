import { useEffect } from "react";
import Navigation from "./Navigation";
import HeroHeader from "./HeroHeader";

function Header() {
  useEffect(() => {
    let pathname = window.location.pathname;
    if (pathname === "/") {
      pathname = "home";
    } else if (pathname.startsWith("/")) {
      pathname = pathname.slice(1);
    }
    if (
      pathname === "book-table" ||
      pathname === "team" ||
      pathname === "testimonial"
    ) {
      document.querySelector(`#pages`).classList.add("active");
    }
    document.querySelector(`#${pathname}`).classList.add("active");
  }, []);

  return (
    <div class="container-xxl position-relative p-0">
      <Navigation />
      <HeroHeader page={window.location.pathname} />
    </div>
  );
}

export default Header;

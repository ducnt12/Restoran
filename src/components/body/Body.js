import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pathConfig } from "../../config/config.js";

function Body() {
  return (
    <BrowserRouter>
      <Routes>
        {pathConfig.map((config) => (
          <Route path={config.pathname} element={config.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Body;

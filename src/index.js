import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

// init({
//   projectId: "maduara",
//   applicationId: "maduara",
//   appPassword: "bwanayesu"
// });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

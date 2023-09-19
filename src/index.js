import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Provider store ={store}>
      <App />
      </Provider>
    </Router>,
  </StrictMode>
); 
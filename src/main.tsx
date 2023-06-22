import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.css";
import App from "./App";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>
);
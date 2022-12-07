import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { CartProvider } from "react-use-cart";
import { PersistGate } from "redux-persist/integration/react";
import "react-datepicker/dist/react-datepicker.css"
import App from "./App";
import "./index.css";
import { persistor, store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CartProvider>
        <App />
      </CartProvider>
    </PersistGate>
  </Provider>
);

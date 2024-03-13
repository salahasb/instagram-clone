import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { signIn } from "./services/authApi.js";
// import store from "./store.js";
signIn();
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <Provider store={store}> */}
		<App />
		{/* </Provider> */}
	</React.StrictMode>
);

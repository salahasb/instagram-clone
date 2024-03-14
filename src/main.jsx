import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalStyles from "./styles/GlobalStyles.js";
// import { Provider } from "react-redux";
// import store from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GlobalStyles />
		{/* <Provider store={store}> */}
		<App />
		{/* </Provider> */}
	</React.StrictMode>
);

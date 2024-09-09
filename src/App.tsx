import { Provider } from "react-redux";
import "./styles/index.scss";
import { store } from "./redux/store/store";
import { Test } from "./Test";
import { UsersPage } from "./components/UsersPage";
import { Footer } from "./components/Footer";

const App = () => {
	return (
		<Provider store={store}>
			{/* <Test /> */}
			<UsersPage />
			<Footer />
		</Provider>
	);
};

export { App };

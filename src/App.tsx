import { Provider } from "react-redux";
import "./styles/index.scss";
import { store } from "./redux/store/store";
import { UsersPage } from "./components/UsersPage";
import { Footer } from "./components/Footer";

const App = () => {
	return (
		<Provider store={store}>
			<UsersPage />
			<Footer />
		</Provider>
	);
};

export { App };

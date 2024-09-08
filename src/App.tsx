import { Provider } from "react-redux";
import "./styles/index.scss";
import { store } from "./redux/store/store";
import { Test } from "./Test";
import { UsersPage } from "./components/UsersPage";

const App = () => {
	return (
		<Provider store={store}>
			<div className="App">
				{/* <Test /> */}
				<UsersPage />
			</div>
		</Provider>
	);
};

export { App };

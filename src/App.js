import "./App.css";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ProtectedRoute from "./helpers/ProtectedRoute";
import useAuthListener from "./hooks/useAuthListener";

function App() {
	const [user] = useAuthListener();

	return (
		<Router>
			<Switch>
				<ProtectedRoute path="/auth" condition={!user} redirectPath="/chat">
					<Auth />
				</ProtectedRoute>
				<ProtectedRoute path="/chat" condition={user} redirectPath="/auth">
					<Home />
				</ProtectedRoute>
				<ProtectedRoute path="/" redirectPath="/auth" />
			</Switch>
		</Router>
	);
}

export default App;

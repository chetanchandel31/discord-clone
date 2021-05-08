import "./App.css";
import Home from "./components/Home/Home";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import Auth from "./components/Auth/Auth";

function App() {
	const [user] = useAuthState(auth);

	return user ? <Home /> : <Auth />;
}

export default App;

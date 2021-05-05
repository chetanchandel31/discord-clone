import { Button } from "@material-ui/core";
import firebase, { auth } from "../../firebase/firebase";

const Auth = () => {
	const clickHandler = () => {
		auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	};

	return <Button onClick={clickHandler}>Google sign in</Button>;
};

export default Auth;

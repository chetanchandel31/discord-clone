import { Button } from "@material-ui/core";
import firebase, { auth } from "../../firebase/firebase";
import useStyles from "./styles";

const Auth = () => {
	const classes = useStyles();

	const signinHandler = () => {
		auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	};

	const dummySigninHandler = () => {
		auth.signInWithEmailAndPassword("abc@def.com", "12341234");
	};

	return (
		<div className={classes.root}>
			<Button onClick={signinHandler} className={classes.button} variant="outlined">
				Google sign in
			</Button>
			<Button onClick={dummySigninHandler} className={classes.button} variant="outlined">
				Continue as guest
			</Button>
		</div>
	);
};

export default Auth;

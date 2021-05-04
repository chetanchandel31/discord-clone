import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
	root: {
		backgroundColor: "#36393f",
		color: "white",
		minHeight: "100vh",
		width: "100%",
		boxSizing: "border-box",
		padding: theme.spacing(2),
		position: "relative",
	},
	textField: {
		backgroundColor: "#40444b",
		border: "none",
		width: "90%",
	},
	//input's font color
	input: {
		color: "white",
	},
	//input's border
	notchedOutline: {
		// borderWidth: "1px",
		// borderColor: "yellow",
		border: "none",
	},
	inputContainer: {
		display: "flex",
		justifyContent: "space-around",
		position: "absolute",
		bottom: "10px",
		right: "10px",
		left: "10px",
		// width: "50%",
	},
	sendButton: {
		backgroundColor: "#7289da",
		color: "white",
	},
}));

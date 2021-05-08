import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
	root: {
		backgroundColor: "#36393f",
		color: "white",
		height: "100%",
		width: "100%",
		boxSizing: "border-box",
		padding: "10px",
		[theme.breakpoints.up("md")]: {
			padding: theme.spacing(2),
		},
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
		bottom: "12px",
		right: "10px",
		left: "10px",
		height: "8vh",
	},
	sendButton: {
		backgroundColor: "#7289da",
		color: "white",
	},
	chatContainer: {
		height: `calc(90vh - 20px)`,
		overflowY: "auto",
	},
	messageContainer: {
		display: "flex",
		flexDirection: "column-reverse",
	},
}));

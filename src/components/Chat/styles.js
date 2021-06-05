import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
	root: {
		backgroundColor: "#36393f",
		color: "white",
		height: "100%",
		width: "100%",
		position: "relative",
		boxSizing: "border-box",
		padding: "10px",
		paddingLeft: "0",
		[theme.breakpoints.up("md")]: {
			padding: theme.spacing(2),
			paddingLeft: "0",
		},
	},
	textField: {
		backgroundColor: "#40444b",
		border: "none",
		width: "98%",
		borderRadius: "90px",
		"& > div": {
			paddingRight: "0px",
		},
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
		// height: "8vh",
	},
	sendButton: {
		backgroundColor: "#7289da",
		color: "white",
		height: "40px",
		width: "40px",
		minWidth: "40px",
		borderRadius: "50%",
		"&:hover": {
			backgroundColor: "#7289da",
		},
	},
	mediaButton: {
		color: "#b9bbbe",
	},
	chatContainer: {
		height: `calc(100% - 10px - 40px)`,
		overflowY: "auto",
	},
	messageContainer: {
		display: "flex",
		flexDirection: "column-reverse",
	},
}));

import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
	root: {
		height: "100%",
		[theme.breakpoints.up("md")]: {
			marginLeft: "250px",
		},
	},
	appBar: {
		backgroundColor: "#36393f",
		[theme.breakpoints.up("md")]: {
			width: `calc(100% - 250px)`,
		},
	},
	drawer: {
		backgroundColor: "#2f3136",
		height: "100vh",
		width: "250px",
		color: "#8e9297",
	},
	drawerContainer: {
		"& > div": {
			borderRight: "none",
			backgroundColor: "#2f3136",
		},
	},
	channel: {
		boxSizing: "border-box",
		height: "48px",
		position: "relative",
		border: "solid 5px #2f3136",

		"&:hover button": {
			display: "inline-flex",
		},
	},
	highlightedChannel: {
		backgroundColor: "#383c41",
		border: "solid 5px #2f3136",
		borderRadius: "10px",
		color: "white",

		"&:hover": {
			backgroundColor: "#383c41",
		},
	},
	deleteIcon: {
		color: "#8e9297",
		position: "absolute",
		right: "8px",
		display: "none",

		"&:hover": {
			color: "#cecece",
		},
	},
	menuButton: {
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	logoutBtn: {
		color: "grey",
	},
	newChannelInput: {
		marginLeft: "20px",
		color: "white",
	},
	input: {
		color: "white",
	},
	icon: {
		color: "#8e9297",
	},
}));

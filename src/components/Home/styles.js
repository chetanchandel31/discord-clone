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

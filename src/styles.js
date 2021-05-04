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
		color: "white",
		height: "100vh",
		width: "250px",
	},
	menuButton: {
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
}));

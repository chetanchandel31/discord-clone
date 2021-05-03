import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
	root: {
		padding: theme.spacing(2),
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
		width: "250px",
	},
	menuButton: {
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
}));

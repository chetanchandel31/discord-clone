import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
	root: {
		position: "fixed",
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		top: "0",
		left: "0",
		zIndex: "9999",
	},
}));

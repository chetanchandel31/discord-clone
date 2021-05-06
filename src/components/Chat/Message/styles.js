import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
	root: {
		display: "flex",
		marginBottom: "10px",
	},
	avatar: {
		marginRight: "10px",
	},
	messageHeader: {
		display: "flex",
		alignItems: "center",
	},
	userName: {
		marginRight: "5px",
		display: "inline",
	},
	date: {
		color: "grey",
		display: "inline",
	},
	message: {
		color: "#dcddde",
	},
}));

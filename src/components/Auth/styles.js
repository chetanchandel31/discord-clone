import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
		backgroundColor: "#36393f",
	},
	button: {
		color: "#7289da",
		borderColor: "#7289da",
		margin: "10px",
	},
}));

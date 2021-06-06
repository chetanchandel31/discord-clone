import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		position: "fixed",
		width: "100%",
		height: "100%",
		top: 0,
		left: 0,
		zIndex: 9999,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "white",
	},
	inner: {
		backgroundColor: "#36393f",
		borderRadius: "5px",
		width: "80%",
		maxWidth: "400px",
	},
	mainContent: {
		padding: "16px 16px 20px 16px",
		"& h1": {
			marginBottom: "16px",
		},
		"& textarea": {
			color: "#dcddde",
			backgroundColor: "#40444b",
			borderRadius: "4px",
			padding: "10px",
		},
		"& textarea::-webkit-scrollbar": {
			display: "none",
		},
		"& fieldset": {
			border: "none",
		},
		"& > div > div": {
			padding: 0,
		},
	},
	buttonGroup: {
		textAlign: "right",
		backgroundColor: "#2f3136",
		padding: "16px",
		borderRadius: "0 0 5px 5px",
		"& span": {
			textTransform: "none",
			color: "white",
		},
	},
}));

import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
	root: {
		position: "fixed",
		backgroundColor: "rgba(0, 0, 0, 0.7)",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
		zIndex: "9999",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	inner: {
		boxSizing: "border-box",
		backgroundColor: "#36393f",
		borderRadius: "10px",
		width: "90%",
		maxWidth: "530px",
	},
	imagePreview: {
		height: "134px",
		boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
		borderRadius: "8px",
		margin: "-63px 0 0 19px",
		maxWidth: "60vw",
	},
	fileDescription: {
		boxSizing: "border-box",
		padding: "16px 16px 24px 16px",
	},
	fileName: {
		fontSize: "20px",
		fontWeight: "700",
		// height: "22px",
	},
	secondaryText: {
		fontSize: "14px",
		color: "#b9bbbe",
		marginTop: "4px",
		"& > strong": {
			fontWeight: "500",
			color: "white",
		},
	},
	comment: {
		margin: "0 18px 20px 18px",
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
	label: {
		fontSize: "12px",
		fontWeight: "500",
		marginBottom: "6px",
		"& span": {
			fontSize: "12px",
			fontWeight: "500",
			color: "#b9bbbe",
		},
	},
	buttonGroup: {
		textAlign: "right",
		backgroundColor: "#2f3136",
		padding: "20px",
		borderRadius: "0 0 5px 5px",
		"& span": {
			textTransform: "none",
			color: "white",
		},
	},
}));

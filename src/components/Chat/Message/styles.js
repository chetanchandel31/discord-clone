import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
	root: {
		display: "flex",
		marginBottom: "10px",
		paddingLeft: "10px",
		position: "relative",

		"&:hover": {
			backgroundColor: "#32353b",
		},
		"&:hover .iconContainer": {
			display: "block",
		},
		[theme.breakpoints.up("sm")]: {
			paddingLeft: "20px",
		},
	},

	avatar: {
		marginRight: "10px",
		cursor: "pointer",
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

	iconContainer: {
		display: "none",
		position: "absolute",
		right: 0,
		top: "-12px",

		"& svg": {
			color: "#b9bbbe",
			cursor: "pointer",

			"&:hover": {
				color: "white",
			},
			[theme.breakpoints.up("sm")]: {
				margin: "5px",
			},
		},
	},

	imageContainer: {
		maxWidth: "50%",
		position: "relative",

		"&:hover .downloadButton": {
			display: "inline-flex",
		},
		[theme.breakpoints.down("sm")]: {
			maxWidth: "80%",
		},
	},

	messageImage: {
		width: "100%",
		borderRadius: "5px",
		display: "block",
	},

	downloadButton: {
		display: "none",
		position: "absolute",
		top: "0",
		right: "0",
		color: "white",
		backgroundColor: "rgba(0,0,0,0.5)",
		"&:hover": {
			backgroundColor: "rgba(0,0,0,0.5)",
		},
	},
}));

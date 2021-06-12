import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
	root: {
		position: "fixed",
		width: "100%",
		height: "100%",
		backgroundColor: "transparent",
		top: "0",
		left: "0",
		zIndex: "9999",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	inner: {
		backgroundColor: "#18191c",
		color: "#95969a",
		minWidth: "300px",
		borderRadius: "5px",
	},
	avatar: {
		minHeight: "92px",
		minWidth: "92px",
		boxSizing: "border-box",
		border: "solid 6px #18191c",
		position: "absolute",
		top: "16px",
		left: "16px",
	},
	upperHeader: {
		backgroundColor: "grey",
		height: "60px",
		position: "relative",
		borderRadius: "5px 5px 0 0",
	},
	lowerHeader: {
		height: "105px",
		boxSizing: "border-box",
		padding: "64px 16px 16px 16px",
		fontWeight: "600",
		fontSize: "20px",
		borderBottom: "solid 1px #ffffff0f",
	},
	mainBody: {
		minHeight: "122px",
		padding: "16px 16px 20px 16px",
		boxSizing: "border-box",
		"& textarea": {
			color: "#dcddde",
			backgroundColor: "#18191c",
			borderRadius: "4px",
			padding: "10px",
			fontSize: "12px",
			lineHeight: "14px",
			"&:focus": {
				backgroundColor: "#1e1e20",
			},
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
	bodyTitle: {
		fontSize: "12px",
		fontWeight: "700",
		boxSizing: "border-box",
		marginBottom: "8px",
	},
}));

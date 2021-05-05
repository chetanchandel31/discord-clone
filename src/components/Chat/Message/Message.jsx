import { Avatar, Typography } from "@material-ui/core";
import moment from "moment";
import useStyles from "./styles";

const Message = ({ doc }) => {
	//avatar, date, message
	const classes = useStyles();
	console.log(moment(doc.createdAt?.toDate()).format("MMMM Do YYYY, h:mm a"));

	return (
		<div className={classes.root}>
			<Avatar className={classes.avatar} src={doc.photoURL} alt="ok">
				{doc.userName.charAt(0)}
			</Avatar>
			<div>
				<div>
					<Typography variant="subtitle1" style={{ marginRight: "5px", display: "inline" }}>
						{doc.userName}
					</Typography>
					<Typography variant="caption" style={{ color: "grey", display: "inline" }}>
						{moment(doc.createdAt?.toDate()).format("MMMM Do YYYY, h:mm a")}
					</Typography>
				</div>
				<Typography variant="body1" style={{ color: "#dcddde" }}>
					{doc.message}
				</Typography>
			</div>
		</div>
	);
};

export default Message;

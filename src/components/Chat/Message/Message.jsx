import { Avatar, Typography } from "@material-ui/core";
import moment from "moment";
import useStyles from "./styles";

const Message = ({ doc }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Avatar className={classes.avatar} src={doc.photoURL} alt="ok">
				{doc.userName?.charAt(0)}
			</Avatar>

			<div>
				<div>
					<Typography variant="subtitle1" className={classes.userName}>
						{doc.userName}
					</Typography>
					<Typography variant="caption" className={classes.date}>
						{moment(doc.createdAt?.toDate()).format("MMMM Do YYYY, h:mm a")}
					</Typography>
				</div>

				<Typography variant="body1" className={classes.message}>
					{doc.message}
				</Typography>
			</div>
		</div>
	);
};

export default Message;

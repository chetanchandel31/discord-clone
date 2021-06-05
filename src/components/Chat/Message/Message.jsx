import { Avatar, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import useStyles from "./styles";

const Message = ({ doc, user, deleteMessage }) => {
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

				{user.uid === doc.createdBy && (
					<div className={`${classes.iconContainer} iconContainer`}>
						<DeleteIcon onClick={() => deleteMessage(doc.id)} />
						<EditIcon />
					</div>
				)}
			</div>
		</div>
	);
};

export default Message;

import { Avatar, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import { useState } from "react";
import ProfileCard from "../../ProfileCard/ProfileCard";
import EditModal from "../EditModal/EditModal";
import useStyles from "./styles";

const Message = ({ doc, user, deleteMessage, editMessage }) => {
	const [showModal, setShowModal] = useState(false);
	const [showProfileCard, setShowProfileCard] = useState(false);
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Avatar onClick={() => setShowProfileCard(true)} className={classes.avatar} src={doc.photoURL} alt="ok">
				{doc.userName?.charAt(0)}
			</Avatar>

			<div>
				<div>
					<Typography variant="subtitle1" className={classes.userName}>
						{doc.userName}
					</Typography>
					<Typography variant="caption" className={classes.date}>
						{moment(doc.createdAt?.toDate()).format("MMMM Do YYYY, h:mm a")} {doc.edited && "(edited)"}
					</Typography>
				</div>

				<Typography variant="body1" className={classes.message}>
					{doc.message}
				</Typography>

				{doc.image && <img src={doc.image} alt="messageImage" style={{ maxWidth: "50%", borderRadius: "3px" }} />}

				{user.uid === doc.createdBy && (
					<div className={`${classes.iconContainer} iconContainer`}>
						<DeleteIcon onClick={() => deleteMessage(doc.id)} />
						<EditIcon
							onClick={() => {
								setShowModal(true);
							}}
						/>
					</div>
				)}
			</div>

			{showModal && <EditModal setShowModal={setShowModal} doc={doc} editMessage={editMessage} />}
			{showProfileCard && <ProfileCard setShowProfileCard={setShowProfileCard} userName={doc.userName} photoURL={doc.photoURL} />}
		</div>
	);
};

export default Message;

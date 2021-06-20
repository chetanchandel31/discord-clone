import { Avatar, IconButton, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import { useState } from "react";
import ProfileCard from "../../ProfileCard/ProfileCard";
import EditModal from "../EditModal/EditModal";
import useStyles from "./styles";
import DowmloadIcon from "@material-ui/icons/GetApp";
import { ImageDownloader } from "@samvera/image-downloader";
import { useRef } from "react";

const Message = ({ doc, user, deleteMessage, editMessage, scrollToBottom }) => {
	const [showModal, setShowModal] = useState(false);
	const [showProfileCard, setShowProfileCard] = useState(false);
	const classes = useStyles();
	const actualDeleteButtonRef = useRef();

	return (
		<div className={classes.root}>
			<Avatar onClick={() => setShowProfileCard(true)} className={classes.avatar} src={doc.photoURL} alt="avatar">
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

				{doc.image && (
					<div className={classes.imageContainer}>
						<img src={doc.image} className={classes.messageImage} onLoad={scrollToBottom} alt="messageImage" />
						<IconButton onClick={() => actualDeleteButtonRef.current.children[0].click()} className={`${classes.downloadButton} downloadButton`}>
							<DowmloadIcon />
						</IconButton>

						<div style={{ display: "none" }} ref={actualDeleteButtonRef}>
							<ImageDownloader imageUrl={doc.image} imageTitle={"discord-clone-image"} />
						</div>
					</div>
				)}

				{user.uid === doc.createdBy && (
					<div className={`${classes.iconContainer} iconContainer`}>
						<DeleteIcon onClick={() => deleteMessage(doc.id, doc.image || null)} />
						<EditIcon onClick={() => setShowModal(true)} />
					</div>
				)}
			</div>

			{showModal && <EditModal setShowModal={setShowModal} doc={doc} editMessage={editMessage} />}
			{showProfileCard && <ProfileCard setShowProfileCard={setShowProfileCard} userName={doc.userName} photoURL={doc.photoURL} />}
		</div>
	);
};

export default Message;

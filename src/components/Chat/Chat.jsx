import { Button, IconButton, InputAdornment, TextField, Toolbar, Zoom } from "@material-ui/core";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import SendIcon from "@material-ui/icons/Send";
import useStyles from "./styles";

import Message from "./Message/Message";
import ImageUploader from "./ImageUploader/ImageUploader";
import { useEffect, useRef, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firebaseStorage, firestore, serverTimestsamp } from "../../firebase/firebase";
import useFirestore from "../../hooks/useFirestore";

const Chat = ({ selectedChannel }) => {
	const collectionRef = firestore.collection(`channels/wCgXz8YJkDqEJBb0Yrqz/${selectedChannel}`);

	const [file, setFile] = useState(false);
	const [message, setMessage] = useState("");
	const classes = useStyles();
	const [user] = useAuthState(auth);
	const { docs } = useFirestore(`channels/wCgXz8YJkDqEJBb0Yrqz/${selectedChannel}`);
	const bottomDivRef = useRef();
	const inputFileRef = useRef();

	const scrollToBottom = () => bottomDivRef.current.scrollIntoView();

	useEffect(() => {
		scrollToBottom();
	}, [bottomDivRef, docs]);

	const sendMessage = e => {
		e.preventDefault();
		if (!message) return;
		const { displayName, photoURL, uid } = user;
		collectionRef.add({ message, userName: displayName, photoURL, createdAt: serverTimestsamp(), createdBy: uid });
		setMessage("");
	};

	const deleteMessage = (docId, imageUrl) => {
		if (window.confirm("Are you sure you want to delete this message?")) {
			collectionRef.doc(docId).delete();
			if (imageUrl) firebaseStorage.refFromURL(imageUrl).delete();
		}
	};

	const editMessage = (id, message) => {
		collectionRef.doc(id).set({ message, edited: true }, { merge: true });
	};

	return (
		<div className={classes.root}>
			<div className={`${classes.chatContainer} customScrollbar`}>
				<Toolbar />
				<div className={classes.messageContainer}>
					<div ref={bottomDivRef}></div>
					{docs.map(doc => (
						<Message doc={doc} key={doc.id} user={user} deleteMessage={deleteMessage} editMessage={editMessage} scrollToBottom={scrollToBottom} />
					))}
				</div>
			</div>

			<div>
				<form onSubmit={sendMessage} className={classes.inputContainer}>
					<TextField
						color="primary"
						className={classes.textField}
						variant="outlined"
						size="small"
						placeholder={`Message #${selectedChannel}`}
						value={message}
						onChange={({ target }) => setMessage(target.value)}
						InputProps={{
							classes: {
								input: classes.input,
								notchedOutline: classes.notchedOutline,
							},
							endAdornment: (
								<InputAdornment position="end">
									<Zoom in={message ? true : false}>
										<Button type="submit" className={classes.sendButton}>
											<SendIcon />
										</Button>
									</Zoom>
								</InputAdornment>
							),
							startAdornment: (
								<InputAdornment position="start">
									<IconButton className={classes.mediaButton} onClick={() => inputFileRef.current.click()}>
										<PermMediaIcon />
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					<input type="file" accept=".png, .jpg, .jpeg" onChange={({ target }) => setFile(target.files[0])} ref={inputFileRef} style={{ display: "none" }} />
				</form>
			</div>

			{file && <ImageUploader file={file} setFile={setFile} selectedChannel={selectedChannel} />}
		</div>
	);
};

export default Chat;

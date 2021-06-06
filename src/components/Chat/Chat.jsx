import { Button, IconButton, InputAdornment, TextField, Toolbar, Zoom } from "@material-ui/core";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import SendIcon from "@material-ui/icons/Send";
import useStyles from "./styles";

import Message from "./Message/Message";
import { useEffect, useRef, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore, serverTimestsamp } from "../../firebase/firebase";
import useFirestore from "../../hooks/useFirestore";

const Chat = ({ selectedChannel }) => {
	const collectionRef = firestore.collection(`channels/wCgXz8YJkDqEJBb0Yrqz/${selectedChannel}`);

	const [message, setMessage] = useState("");
	const classes = useStyles();
	const [user] = useAuthState(auth);
	const { docs } = useFirestore(`channels/wCgXz8YJkDqEJBb0Yrqz/${selectedChannel}`);
	const bottomDivRef = useRef();

	useEffect(() => {
		setTimeout(() => bottomDivRef.current.scrollIntoView(), 1000);
	}, [bottomDivRef, docs]);

	const sendMessage = e => {
		e.preventDefault();
		if (!message) return;
		const { displayName, photoURL, uid } = user;
		collectionRef.add({ message, userName: displayName, photoURL, createdAt: serverTimestsamp(), createdBy: uid });
		setMessage("");
	};

	const deleteMessage = docId => {
		if (window.confirm("Are you sure you want to delete this message?")) collectionRef.doc(docId).delete();
	};

	const editMessage = (id, message) => {
		collectionRef.doc(id).set({ message }, { merge: true });
		console.log(id, message);
	};

	return (
		<div className={classes.root}>
			<div className={`${classes.chatContainer} customScrollbar`}>
				<Toolbar />
				<div className={classes.messageContainer}>
					<div ref={bottomDivRef}></div>
					{docs.map(doc => (
						<Message doc={doc} key={doc.id} user={user} deleteMessage={deleteMessage} editMessage={editMessage} />
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
									<IconButton className={classes.mediaButton}>
										<PermMediaIcon />
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</form>
			</div>
		</div>
	);
};

export default Chat;

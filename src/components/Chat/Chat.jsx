import { Button, TextField, Toolbar } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import useStyles from "./styles";

import Message from "./Message/Message";
import { useEffect, useRef, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore, serverTimestsamp } from "../../firebase/firebase";
import useFirestore from "../../hooks/useFirestore";

const Chat = () => {
	const [message, setMessage] = useState("");
	const classes = useStyles();
	const [user] = useAuthState(auth);
	const collectionRef = firestore.collection("channels/wCgXz8YJkDqEJBb0Yrqz/general");
	const { docs } = useFirestore("channels/wCgXz8YJkDqEJBb0Yrqz/general");
	const bottomDivRef = useRef();

	useEffect(() => {
		setTimeout(() => bottomDivRef.current.scrollIntoView(), 1000);
	}, [bottomDivRef, docs]);

	const sendMessage = () => {
		if (!message) return;
		const { displayName, photoURL, uid } = user;
		collectionRef.add({ message, userName: displayName, photoURL, createdAt: serverTimestsamp(), createdBy: uid });
		setMessage("");
	};

	return (
		<div className={classes.root}>
			<div className={classes.chatContainer}>
				<Toolbar />
				<div className={classes.messageContainer}>
					<div ref={bottomDivRef}></div>
					{docs.map(doc => (
						<Message doc={doc} key={doc.id} />
					))}
				</div>
			</div>

			<div className={classes.inputContainer}>
				<TextField
					color="primary"
					className={classes.textField}
					variant="outlined"
					placeholder="Message #general"
					value={message}
					onChange={({ target }) => setMessage(target.value)}
					InputProps={{
						classes: {
							input: classes.input,
							notchedOutline: classes.notchedOutline,
						},
					}}
				/>
				<Button className={classes.sendButton}>
					<SendIcon onClick={sendMessage} />
				</Button>
			</div>
		</div>
	);
};

export default Chat;

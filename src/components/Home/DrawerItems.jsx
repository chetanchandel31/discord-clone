import { Button, Divider, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, TextField, Toolbar } from "@material-ui/core";
import { auth, firestore } from "../../firebase/firebase";
import useStyles from "./styles";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import { useEffect, useState } from "react";

const DrawerItems = ({ setOpen, setSelectedChannel }) => {
	const classes = useStyles();
	const [channelNames, setChannelNames] = useState([]);
	const [creatingNewChannel, setCreatingNewChannel] = useState(false);
	const [newChannelName, setNewChannelName] = useState("");

	useEffect(() => {
		const unsub = firestore
			.collection("channel-names")
			.doc("FOp0pPrxTSUjRxXGI82a")
			.onSnapshot(doc => {
				setChannelNames(doc.data().list);
			});

		return () => unsub();
	}, []);

	const changeChannel = channelName => {
		setSelectedChannel(channelName);
		setOpen(false);
	};

	const createNewChannel = e => {
		e.preventDefault();

		let currentChannels = [...channelNames];
		let newChannel = newChannelName.replaceAll(" ", "-");
		currentChannels.push(newChannel);
		firestore.collection("channel-names").doc("FOp0pPrxTSUjRxXGI82a").set({ list: currentChannels }, { merge: true });

		setCreatingNewChannel(false);
		setSelectedChannel(newChannel);
		setOpen(false);
	};

	return (
		<List disablePadding className={classes.drawer}>
			<Toolbar>
				<Button className={classes.logoutBtn} onClick={() => auth.signOut()}>
					Logout
				</Button>
			</Toolbar>
			<Divider />

			<ListItem>
				<ListItemText primary="add new channel" />
				<ListItemSecondaryAction>
					<IconButton className={classes.icon} edge="end" onClick={() => setCreatingNewChannel(prev => !prev)}>
						{creatingNewChannel ? <CloseIcon /> : <AddIcon />}
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>

			{creatingNewChannel && (
				<form onSubmit={createNewChannel}>
					<TextField
						InputProps={{
							classes: {
								input: classes.input,
							},
						}}
						className={classes.newChannelInput}
						placeholder="enter channel's name"
						autoFocus
						value={newChannelName}
						onChange={({ target }) => setNewChannelName(target.value)}
					/>
				</form>
			)}

			{channelNames.map((channelName, i) => (
				<ListItem key={i} button onClick={() => changeChannel(channelName)}>
					<ListItemText primary={`# ${channelName}`} />
				</ListItem>
			))}
		</List>
	);
};

export default DrawerItems;

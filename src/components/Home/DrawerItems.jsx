import { Button, Divider, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, TextField, Toolbar } from "@material-ui/core";
import { auth, firestore } from "../../firebase/firebase";
import useStyles from "./styles";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import { useEffect, useState } from "react";

const DrawerItems = ({ setOpen, setSelectedChannel, selectedChannel }) => {
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
		let newChannel = newChannelName.replaceAll(" ", "-").toLowerCase();

		if (currentChannels.includes(newChannel)) return alert("this channel already exists");

		currentChannels.push(newChannel);
		firestore.collection("channel-names").doc("FOp0pPrxTSUjRxXGI82a").set({ list: currentChannels }, { merge: true });

		setCreatingNewChannel(false);
		setSelectedChannel(newChannel);
		setOpen(false);
	};

	useEffect(() => {
		if (!channelNames.includes(selectedChannel) && channelNames.length > 0) setSelectedChannel(channelNames[channelNames.length - 1]);
		// eslint-disable-next-line
	}, [channelNames]);

	const removeChannel = channelName => {
		setChannelNames(prevChannels => {
			const oldChannels = [...prevChannels];
			const filteredChannels = oldChannels.filter(el => el !== channelName);

			firestore.collection("channel-names").doc("FOp0pPrxTSUjRxXGI82a").set({ list: filteredChannels }, { merge: true });

			return filteredChannels;
		});
	};

	const toggleNewChannelButton = () => {
		setCreatingNewChannel(prevState => !prevState);
		setNewChannelName("");
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
					<IconButton className={classes.icon} edge="end" onClick={toggleNewChannelButton}>
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
				<ListItem key={i} className={`${classes.channel} ${channelName === selectedChannel ? `${classes.highlightedChannel}` : ""}`} button>
					<ListItemText onClick={e => changeChannel(channelName)} primary={`# ${channelName}`} />

					<IconButton onClick={() => removeChannel(channelName)} className={`${classes.deleteIcon} deleteIcon`} edge="end">
						{channelName !== "general" ? <CloseIcon /> : null}
					</IconButton>
				</ListItem>
			))}
		</List>
	);
};

export default DrawerItems;

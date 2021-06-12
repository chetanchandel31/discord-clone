import { Avatar, TextField } from "@material-ui/core";
import { useState } from "react";
import { useRef } from "react";
import useStyles from "./styles";

const ProfileCard = ({ setShowProfileCard, userName, photoURL }) => {
	const [note, setNote] = useState(localStorage.getItem(userName) || "");
	const classes = useStyles();
	const cardRef = useRef();

	const updateNote = note => {
		setNote();
		localStorage.setItem(userName, note);
	};

	return (
		<div
			className={classes.root}
			onClick={e => {
				if (!cardRef.current.contains(e.target)) setShowProfileCard(false);
			}}
		>
			<div className={classes.inner} ref={cardRef}>
				<div>
					<div className={classes.upperHeader}>
						<Avatar src={photoURL} className={classes.avatar} alt="pfp">
							{userName?.charAt(0)}
						</Avatar>
					</div>

					<div className={classes.lowerHeader}>
						<span>{userName}</span>
					</div>
				</div>

				<div className={classes.mainBody}>
					<div className={classes.bodyTitle}>NOTE</div>

					<TextField
						value={note}
						onChange={({ target }) => updateNote(target.value)}
						fullWidth
						variant="outlined"
						placeholder="Click to add a note"
						multiline
						rows={4}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;

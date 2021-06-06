import { Button, TextField } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useRef, useState } from "react";
import useStyles from "./styles";

const EditModal = ({ setShowModal, doc, editMessage }) => {
	const [editedMessage, setEditedMessage] = useState(doc.message);
	const classes = useStyles();
	const modalRef = useRef();

	const theme = createMuiTheme({
		palette: {
			primary: { main: "#059669" },
		},
	});

	const editHandler = () => {
		editMessage(doc.id, editedMessage);
		setShowModal(false);
	};

	return (
		<div
			className={classes.overlay}
			onClick={e => {
				if (!modalRef.current.contains(e.target)) setShowModal(false);
			}}
		>
			<div className={classes.inner} ref={modalRef}>
				<div className={classes.mainContent}>
					<h1>Edit Message</h1>
					<TextField
						fullWidth
						variant="outlined"
						value={editedMessage}
						onChange={({ target }) => setEditedMessage(target.value)}
						autoFocus
						multiline
						rows={4}
					/>
				</div>

				<div className={classes.buttonGroup}>
					<ThemeProvider theme={theme}>
						<Button onClick={() => setShowModal(false)}>Cancel</Button>

						<Button onClick={editHandler} disabled={doc.message === editedMessage || editedMessage.length === 0} variant="contained" color="primary">
							Save
						</Button>
					</ThemeProvider>
				</div>
			</div>
		</div>
	);
};

export default EditModal;

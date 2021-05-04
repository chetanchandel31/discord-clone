import { Button, TextField, Toolbar } from "@material-ui/core";
import useStyles from "./styles";
import SendIcon from "@material-ui/icons/Send";

const Chat = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Toolbar />

			<div className={classes.inputContainer}>
				<TextField
					color="primary"
					className={classes.textField}
					variant="outlined"
					placeholder="Message #general"
					InputProps={{
						classes: {
							input: classes.input,
							notchedOutline: classes.notchedOutline,
						},
					}}
				/>
				<Button className={classes.sendButton}>
					<SendIcon />
				</Button>
			</div>
		</div>
	);
};

export default Chat;

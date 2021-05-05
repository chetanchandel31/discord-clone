import { AppBar, Button, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useState } from "react";
import { auth } from "../../firebase/firebase";
import Chat from "../Chat/Chat";
import useStyles from "./styles";

const Home = () => {
	const [open, setOpen] = useState(false);
	const classes = useStyles();
	const drawerItems = (
		<List disablePadding className={classes.drawer}>
			<Toolbar>
				<Button className={classes.logoutBtn} onClick={() => auth.signOut()}>
					Logout
				</Button>
			</Toolbar>
			<Divider />
			<ListItem>
				<ListItemText primary="#first-item" />
			</ListItem>
			<ListItem>
				<ListItemText primary="#second-item" />
			</ListItem>
		</List>
	);

	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} position="fixed">
				<Toolbar>
					<IconButton className={classes.menuButton} color="inherit" onClick={() => setOpen(true)}>
						<Menu />
					</IconButton>
					<Typography>#general</Typography>
				</Toolbar>
			</AppBar>

			<Chat />

			<Hidden smUp implementation="css">
				<Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
					{drawerItems}
				</Drawer>
			</Hidden>
			<Hidden smDown implementation="css">
				<Drawer variant="permanent" anchor="left" open={open} onClose={() => setOpen(false)}>
					{drawerItems}
				</Drawer>
			</Hidden>
		</div>
	);
};

export default Home;

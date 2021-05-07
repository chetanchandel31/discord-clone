import { AppBar, Drawer, Hidden, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useState } from "react";
import Chat from "../Chat/Chat";
import DrawerItems from "./DrawerItems";
import useStyles from "./styles";

const Home = () => {
	const [open, setOpen] = useState(false);
	const [selectedChannel, setSelectedChannel] = useState("general");

	const classes = useStyles();
	const drawerItems = <DrawerItems setOpen={setOpen} setSelectedChannel={setSelectedChannel} />;

	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} position="fixed">
				<Toolbar>
					<IconButton className={classes.menuButton} color="inherit" onClick={() => setOpen(true)}>
						<Menu />
					</IconButton>
					<Typography>#{selectedChannel}</Typography>
				</Toolbar>
			</AppBar>

			<Chat selectedChannel={selectedChannel} />

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

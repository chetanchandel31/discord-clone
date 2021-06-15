import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import useStyles from "./styles";
import { TextField, Button, createMuiTheme, ThemeProvider } from "@material-ui/core";
import UploadProgress from "./UploadProgress";

const ImageUploader = ({ file, setFile, selectedChannel }) => {
	const [message, setMessage] = useState("");
	const [upload, setUpload] = useState(false);
	const [previewURL, setPreviewURL] = useState("");
	const classes = useStyles();
	const modalRef = useRef();

	const theme = createMuiTheme({
		palette: {
			primary: { main: "#7289da" },
		},
	});

	useEffect(() => {
		const objectUrl = URL.createObjectURL(file);
		setPreviewURL(objectUrl);

		return () => URL.revokeObjectURL(objectUrl);
	}, [file]);

	return (
		<div
			className={classes.root}
			onClick={e => {
				if (!modalRef.current.contains(e.target) && !upload) setFile(null);
			}}
		>
			<div className={classes.inner} ref={modalRef}>
				<div>
					<img src={previewURL} className={classes.imagePreview} alt={file.name} />
					<div className={classes.fileDescription}>
						<div className={classes.fileName}>{file.name}</div>
						<div className={classes.secondaryText}>
							Upload to <strong>{`#${selectedChannel}`}</strong>
						</div>
					</div>

					{upload ? (
						<UploadProgress file={file} message={message} setFile={setFile} selectedChannel={selectedChannel} />
					) : (
						<div className={classes.comment}>
							<div className={classes.label}>
								ADD A COMMENT <span>(OPTIONAL)</span>
							</div>
							<TextField onChange={({ target }) => setMessage(target.value)} value={message} fullWidth variant="outlined" autoFocus multiline rows={1} />
						</div>
					)}
				</div>

				<div className={classes.buttonGroup}>
					<Button onClick={() => setFile(null)} disabled={upload}>
						Cancel
					</Button>

					<ThemeProvider theme={theme}>
						<Button onClick={() => setUpload(true)} disabled={upload} variant="contained" color="primary">
							Upload
						</Button>
					</ThemeProvider>
				</div>
			</div>
		</div>
	);
};

export default ImageUploader;

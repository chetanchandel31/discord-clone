import { useEffect } from "react";
import useStorage from "../../../hooks/useStorage";

const UploadProgress = ({ file, message, setFile, selectedChannel }) => {
	const { progress, url } = useStorage(file, message, selectedChannel);

	useEffect(() => {
		if (url) setFile(null);
	}, [url, setFile]);

	return (
		<div style={{ textAlign: "center", marginBottom: "20px" }}>
			<span>Uploading image, please wait... ({`${Math.round(progress)}%`})</span>
		</div>
	);
};

export default UploadProgress;

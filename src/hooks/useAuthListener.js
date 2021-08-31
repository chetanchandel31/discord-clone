import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

function useAuthListener() {
	const [storedUser, setStoredUser] = useState(JSON.parse(localStorage.getItem("authenticated-user")));

	useEffect(() => {
		const listener = auth.onAuthStateChanged(user => {
			if (user) {
				localStorage.setItem("authenticated-user", JSON.stringify(user));
				setStoredUser(user);
			} else {
				localStorage.removeItem("authenticated-user");
				setStoredUser("");
			}
		});

		return () => listener();
	}, []);

	return [storedUser];
}

export default useAuthListener;

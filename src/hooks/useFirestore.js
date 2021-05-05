import { useEffect } from "react";
import { useState } from "react";
import { firestore } from "../firebase/firebase";

const useFirestore = collection => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		const unsub = firestore
			.collection(collection)
			.orderBy("createdAt", "desc")
			.onSnapshot(snap => {
				let documents = [];
				snap.forEach(doc => documents.push({ ...doc.data(), id: doc.id }));
				setDocs(documents);
			});

		return () => unsub();
	}, [collection]);

	return { docs };
};

export default useFirestore;

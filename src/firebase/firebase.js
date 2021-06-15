import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

firebase.initializeApp({
	apiKey: "AIzaSyDrW5vXjKSUleD4OpufgOwJA7Jk_fNcFso",
	authDomain: "discord-clone-9000a.firebaseapp.com",
	projectId: "discord-clone-9000a",
	storageBucket: "discord-clone-9000a.appspot.com",
	messagingSenderId: "990454593401",
	appId: "1:990454593401:web:ef0157aa43ab61c60da1a8",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const firebaseStorage = firebase.storage();
export const serverTimestsamp = firebase.firestore.FieldValue.serverTimestamp;

export default firebase;

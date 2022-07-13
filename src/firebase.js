import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwZ0Y3V-ns1ZhB_zkQKnHst2jYuL8LPTk",
  authDomain: "misyntest-26666.firebaseapp.com",
  projectId: "misyntest-26666",
  storageBucket: "misyntest-26666.appspot.com",
  messagingSenderId: "261320847698",
  appId: "1:261320847698:web:6039a40cc77393a38f8a8b",
  measurementId: "G-4RD8P0Z3NM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// firebase.database().ref().set('it works');

export { db }
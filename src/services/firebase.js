import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAuth,
    } from "firebase/auth";
import { getDatabase, ref } from 'firebase/database'
import { MessageList } from "../components/MessageList/MessageList";

// Your web app's Firebase configuration
// TO DO: CLEAR IT BEFORE PUBLISH 
const firebaseConfig = {
    apiKey: "AIzaSyB2OmfEjkesZB9dcCT_8jNGKWKXd1pIq_w",
    authDomain: "gb-messenger-bec3d.firebaseapp.com",
    projectId: "gb-messenger-bec3d",
    storageBucket: "gb-messenger-bec3d.appspot.com",
    messagingSenderId: "748272921222",
    appId: "1:748272921222:web:70166b71cff5d02228bf07"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db = getDatabase(app)

export const auth = getAuth(app);

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
}

export const signIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
}

export const logOut = async () => {
    await signOut(auth);
}

export const userRef = ref(db, "user")
export const userNameRef = ref(db, "user/name")
export const userShowNameRef = ref(db, "user/showName")

export const chatsRef = ref(db, 'chats')
export const getChatRefById = (id) => ref(db, `chats/${id}`)

export const msgsRef = ref(db, 'messages')
export const getMsgsRefById = (chatId) => ref(db, `messages/${chatId}`)
export const getMsgsListRefById = (chatId) => ref(db, `messages/${chatId}/messageList`)




import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTXYMDNqjS6p33gHC7zIlhuOFiVAoesAo",
  authDomain: "tarefasplus-b65c2.firebaseapp.com",
  projectId: "tarefasplus-b65c2",
  storageBucket: "tarefasplus-b65c2.firebasestorage.app",
  messagingSenderId: "867972797887",
  appId: "1:867972797887:web:13fb24e22c82e9cd647d0a"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export {db}


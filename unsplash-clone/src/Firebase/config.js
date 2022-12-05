import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCnk7vGChNBiUnvCozT3GEd13haUTKdE80",
  authDomain: "unsplash-clone-auth.firebaseapp.com",
  projectId: "unsplash-clone-auth",
  storageBucket: "unsplash-clone-auth.appspot.com",
  messagingSenderId: "213862158734",
  appId: "1:213862158734:web:9bd7cad2b19819946d54df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};
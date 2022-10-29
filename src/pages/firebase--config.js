// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAHE6skctGhIpD_5rm1eL6nc9VcUUpLmDc",
  authDomain: "notesapp-ebbf1.firebaseapp.com",
  projectId: "notesapp-ebbf1",
  storageBucket: "notesapp-ebbf1.appspot.com",
  messagingSenderId: "205826637155",
  appId: "1:205826637155:web:fc3efc6f257eb3d04c6756",
  measurementId: "G-GC5C2MECRX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getStorage(app);

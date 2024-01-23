import { initializeApp } from "firebase/app";
import { Firestore, getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDqfKi1zV6OwflhPnB3lvqceUhZDA8Y_0w",
  authDomain: "iuris-help-comision-49930.firebaseapp.com",
  projectId: "iuris-help-comision-49930",
  storageBucket: "iuris-help-comision-49930.appspot.com",
  messagingSenderId: "1095722959197",
  appId: "1:1095722959197:web:6d1d9f306d48c7723fa8b4",
  measurementId: "G-JR5TV20S2S"
};

// Initialize Fir
initializeApp(firebaseConfig);

const db = getFirestore()

export default db

import './App.css'
import { app } from '../firebase'
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

function App() {
  const auth = getAuth(app);
  const signIN = () => {
    signInWithEmailAndPassword(auth, "saurabhb7678@gmial.com", "12345678").then((user) => {
      console.log(user);
    })
  }
  signIN();
  return (
    <>
    </>
  )
}

export default App

import React, {useState} from "react";
import { getAuth,createUserWithEmailAndPassword , GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import {app} from "../firebase";
const googleprovider = new GoogleAuthProvider();
const auth = getAuth(app);

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(value => alert('suucess'));
    }
    const signinwithgoogle = () => {
        signInWithPopup(auth,googleprovider);
    }
    return (
        <div>
            <h1>Signup</h1>
            <label>email</label>
            <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder="Email" />
            <label>Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
            <button onClick={createUser}>Signup</button><br />
            <button onClick={signinwithgoogle}>signup with google</button>
        </div>
    );
}
export default Signup;
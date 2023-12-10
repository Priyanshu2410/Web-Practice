import React, {useState} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from "../firebase";
const auth = getAuth(app);

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signinuser = () => {
        signInWithEmailAndPassword(auth, email, password).then(value => alert('suucess')).catch(err => alert(err));
    }
    return (
        <div>
            <h1>SignIn</h1>
            <label>enter your email</label>
            <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder="Email" />
            <label>Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
            <button onClick={signinuser}>Signin</button>
        </div>
    );
}
export default Signup;
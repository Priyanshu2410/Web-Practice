// import {getDatabase ,ref,get, set} from 'firebase/database'
import {getAuth , createUserWithEmailAndPassword ,onAuthStateChanged} from 'firebase/auth'
import {getFirestore,collection,addDoc,doc,getDoc,query,where,getDocs} from 'firebase/firestore'
import {app} from './firebase'
import './App.css';
import Signup from './page/signup';
import Signin from './page/Signin';
import { useEffect,useState } from 'react';
// const db = getDatabase(app);
const auth = getAuth(app);
const db = getFirestore(app);

function App() {
  // const putdata = () => {
  //   set(ref(db, 'users/second'), {
  //     username: "first",
  //     email: "dsdjk@.snd",
  //   });
  //   console.log("data putted");
  // }

 
  // const signupuser = () => {
  //   createUserWithEmailAndPassword(auth, "priyanshu@jsdh.sjd", "jsdhdjk").then((value) => console.log(value));
  // }
  
  const writedata = async () => {
    const docRef = await addDoc(collection(db, "user"), {
      first: "prishu",
      age: 20,
      ismale:false
    });
    console.log("Document written with ID: ", docRef);
  }
  const makedoc = async () => {
    await addDoc(collection(db, "user/KfNjXKIa7vF8SToujfER/Orders"), {
      Price:10000,
      name:"computer"
    });
    console.log("Document written with ID: ");
  }
  const getdata = async () => {
    const docRef = await getDoc(doc(db, "user/KfNjXKIa7vF8SToujfER" ));
    console.log("Document data:", docRef.data());
  }
  const getdatabyquery = async () => {
    const q = query(collection(db, "user"), where("ismale", "==", true));
    const querySnapshot = await getDocs(q);
    const cities = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      cities.push(doc.data());
    });
    console.log("cities", cities);
  }
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("no user");
        setUser(null);
      }
    });
  }, []);
  if(user===null){
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        {/* <button onClick={putdata} >Put Data</button> */}
        {/* <button onClick={signupuser} >sign up</button> */}
        <Signup />
        <Signin/>
        <br />
        <button onClick={writedata} >write data</button>
        <button onClick={makedoc} >write sub-data</button>
        <button onClick={getdata} >get your data</button>
        <button onClick={getdatabyquery} >get your query data</button>
      </div>
    );
  }
  else{
    return(
      <div>
        <h1>hello {user.email}</h1>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </div>
    )
  }
}

export default App;

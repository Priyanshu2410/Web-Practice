import { createContext, useState, useEffect } from "react"
import { useContext } from "react"
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, query, where } from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const FirebaseContext = createContext(null)

export const useFirebase = () => useContext(FirebaseContext);
const firebaseConfig = {
    apiKey: "AIzaSyBBGRW6FiI2ZkNKDotFTL6GiSKg7_k4SZw",
    authDomain: "book-app-74444.firebaseapp.com",
    projectId: "book-app-74444",
    storageBucket: "book-app-74444.appspot.com",
    messagingSenderId: "345570811504",
    appId: "1:345570811504:web:7bc28da89c075e33219eb5"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseapp);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(firebaseapp);
const storage = getStorage(firebaseapp);

export const FirebaseProvider = (props) => {
    const [User, SetUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) SetUser(user);
            else SetUser(null);
        });
    }, [])
    const signupuseremailandpswd = (email, password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password);
    }
    const loginuseremailandpswd = (email, password) => {
        signInWithEmailAndPassword(firebaseAuth, email, password);

    }
    const signinwithgoogle = () => {
        signInWithPopup(firebaseAuth, googleProvider);
    }
    const getImageUrl = (path) => {
        return getDownloadURL(ref(storage, path));
    }
    const addlist = async (name, isbnnumber, price, coverpic) => {
        const imageref = ref(storage, `uploads/images/${Date.now()}-{coverpic.name}`);
        const uploadresult = await uploadBytes(imageref, coverpic);
        return await addDoc(collection(firestore, "books"), {
            name,
            isbnnumber,
            price,
            imageUrl: uploadresult.ref.fullPath,
            userId: User.uid,
            userEmail: User.email,
            displayName: User.displayName,
            photoURL: User.photoURL,

        })
    }
    const listallbooks = () => {
        return getDocs(collection(firestore, "books"));
    }
    const getbookbyid = async (id) => {
        const docref = doc(firestore, "books", id);
        const result = await getDoc(docref);
        return result;
    }
    const placeorder = async (bookId,qty) => {
        const collectionRef = collection(firestore, "books", bookId, "orders");
        const result = await addDoc(collectionRef, {
            userId: User.uid,
            userEmail: User.email,
            displayName: User.displayName,
            photoURL: User.photoURL,
            qty : Number(qty),
        })
        return result;
    }
    const fetchMybook =async (userId) =>{
  
        const collectionref = collection(firestore,"books");
        console.log(collectionref);
        const q = query(collectionref,where("userId","==" , userId));
        const result =await getDocs(q);
        return result;
    }
    const getorder = async (bookId) => {
        const collectionRef = collection(firestore, "books", bookId, "orders");
        const result = await getDocs(collectionRef);
        return result;
    }
    const isLoggedin = User ? true : false;
    return (
        <FirebaseContext.Provider value={{ signupuseremailandpswd, loginuseremailandpswd, signinwithgoogle, isLoggedin, addlist, listallbooks, getImageUrl, getbookbyid,placeorder,fetchMybook,User,getorder }}>
            {props.children}
        </FirebaseContext.Provider>
    )
};
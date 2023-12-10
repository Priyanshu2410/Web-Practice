import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBoug487gG5EUrIgzf4mucNpVfBaeOgA74",
    authDomain: "test-myapp-390e0.firebaseapp.com",
    projectId: "test-myapp-390e0",
    storageBucket: "test-myapp-390e0.appspot.com",
    messagingSenderId: "271418365566",
    appId: "1:271418365566:web:90efd5c24daf9df5106a2f",
    databaseURL: "https://test-myapp-390e0-default-rtdb.firebaseio.com",
  };
  
  // Initialize Firebase
export  const app = initializeApp(firebaseConfig);
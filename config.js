import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  apiKey: "AIzaSyCRJP0jveMO6LZZRHUluh3ExGzM4tmhKp8",
  authDomain: "ciclistaeletronico-90528.firebaseapp.com",
  projectId: "ciclistaeletronico-90528",
  storageBucket: "ciclistaeletronico-90528.appspot.com",
  messagingSenderId: "284936852699",
  appId: "1:284936852699:web:6437cbf03f53a4d45028fe"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

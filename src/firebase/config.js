import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDtw2O9Y_Ga278MI7nZUdzIJke-AcZFXF8',
  authDomain: 'cooking-ninja-78c0a.firebaseapp.com',
  projectId: 'cooking-ninja-78c0a',
  storageBucket: 'cooking-ninja-78c0a.appspot.com',
  messagingSenderId: '679620790923',
  appId: '1:679620790923:web:216f2a38dc46346bb9e28e',
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }

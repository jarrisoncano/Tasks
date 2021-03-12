import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyCvHN2Q8vTv1LtP0FFyhpubkFnuBiiOyl0',
  authDomain: 'tasks-84582.firebaseapp.com',
  projectId: 'tasks-84582',
  storageBucket: 'tasks-84582.appspot.com',
  messagingSenderId: '156504680276',
  appId: '1:156504680276:web:4b8ef43e42a31637b08ac1',
}

const fb = firebase.initializeApp(firebaseConfig)
export const db = fb.firestore()

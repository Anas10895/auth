import config from './firebaseConfig'
import firebase from 'firebase'
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()




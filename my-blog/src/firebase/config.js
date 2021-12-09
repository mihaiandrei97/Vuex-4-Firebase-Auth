import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
firebase: 'your firebase config info'
};

initializeApp(firebaseConfig)

const auth = getAuth()

export { auth }
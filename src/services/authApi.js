import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { app, db } from './firebase';
import { doc, addDoc, collection, setDoc } from 'firebase/firestore';

// firebase auth service ref
const auth = getAuth(app);

// data references
const usersCol = collection(db, 'users');

export async function signUp(body) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      'salahakon1998@gmail.com',
      '123456',
    );

    const user = userCredential.user;
    console.log(user);

    // create user in the firestore
    setDoc(doc(usersCol, user.uid), {
      name: 'salah',
      age: '20',
      avatar: '',
      bio: 'New user here',
      gender: 'male',
    });

    return user;
  } catch (error) {
    console.error(error);
    const { errorCode, errorMessage } = error;

    throw new Error(`something went wrong with signing up`);
  }
}

export async function login({ email, password }) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    console.log(userCredential.user);
  } catch (error) {
    console.error(error);
    const { errorCode, errorMessage } = error;

    throw new Error(`something went wrong with signing up`);
  }
}

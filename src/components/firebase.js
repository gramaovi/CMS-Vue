import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { onUnmounted } from 'vue'
const firebaseConfig = {
    apiKey: "AIzaSyCk91d8DqyK6jHg_j_NPoQymSrROWotOiE",
    authDomain: "employees-ea1e9.firebaseapp.com",
    projectId: "employees-ea1e9",
    storageBucket: "employees-ea1e9.appspot.com",
    messagingSenderId: "654545035041",
    appId: "1:654545035041:web:da9b191b0df4c1c5c2a860"
  }
  firebase.initializeApp(firebaseConfig)

  // utils
const db = firebase.firestore()

// collection references
const usersCollection = db.collection('users')

export const createUser = user=>{
    return usersCollection.add(user)
}
export const getUser=async id=>
{
    const user=await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}
export const updateUser =(id,user)=>
{
    return usersCollection.doc(id).update(user)
}
export const deleteUser=id=>{
    return usersCollection.doc(id).delete()
}
export const useLoadUsers = () =>{
    const users=ref([])
    const close=usersCollection.onSnapshot(snapshot=>{
        users.value=snapshot.docs.map(doc=>({id:doc.id, ...doc.data()}))
    })
    onUnmounted(close)
    return users
}
/*
export {
    db,
    usersCollection
  }*/
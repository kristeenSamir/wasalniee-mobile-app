import Firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyA-1pVBz-K57UXpt8agLz03qeHWxQNZV5U",
  authDomain: "hxpp-d85cb.firebaseapp.com",
  databaseURL: "https://hxpp-d85cb.firebaseio.com",
  projectId: "hxpp-d85cb",
  storageBucket: "hxpp-d85cb.appspot.com",
  messagingSenderId: "569268348750",
  appId: "1:569268348750:web:e0c944e3ffadb2e5"
};
let appd = Firebase.initializeApp(firebaseConfig);
export const db = appd.database();
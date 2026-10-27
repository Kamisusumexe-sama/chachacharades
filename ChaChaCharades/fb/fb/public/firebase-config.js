// Paste your Firebase web app config here (see README step 4).
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1IWJL9avfgeCig6WbozIRb5lk6RtAJgY",
  authDomain: "chachacha-8d974.firebaseapp.com",
  databaseURL: "https://chachacha-8d974-default-rtdb.firebaseio.com",
  projectId: "chachacha-8d974",
  storageBucket: "chachacha-8d974.firebasestorage.app",
  messagingSenderId: "786662841839",
  appId: "1:786662841839:web:661456c4b762de6ace2a1a",
  measurementId: "G-M7YE55HYPK"
};
window.FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "PASTE_DATABASE_URL",   // looks like https://xxxx-default-rtdb.firebaseio.com (or a regional URL). Required!
  projectId: "YOUR_PROJECT_ID",
  appId: "PASTE_APP_ID"
};
// Seats per room (one letter per player). 2 players for now. To allow more, add letters here AND widen the
// /^[ab]$/ pattern in database.rules.json, for example "abcd" and /^[a-d]$/.
window.SLOTS = "ab";


var firebaseConfig = {
    apiKey: "AIzaSyAgCekUG4u_18MY8YgTUbjTILbLp6z3ZcI",
    authDomain: "lets-chat-web-app-eb420.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-eb420-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-eb420",
    storageBucket: "lets-chat-web-app-eb420.appspot.com",
    messagingSenderId: "457902726831",
    appId: "1:457902726831:web:be425e1c0f1c9b5f09be5a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
   
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != purpose){
    firebase_message_id = childKey;
    message_data = childData;
} }); }); }
getData();

function logout()
{
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
    window.location = "index.html";
}

function send()
{
      msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            like: 0,
            message: msg,
            name: user_name
      });

      document.getElementById("msg").value = "";
}
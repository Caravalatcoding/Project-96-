
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
document.getElementById("user_name").innerHTML = "Welcome" + user_name
 + "!";

 function addRoom()
 {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child("room_name").update({
        purpose: "adding room name"
    })

    localStorage.setItem("room_name", room_name);

    window.location = "Let's_chat_app_page.html";
 }





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.Key
        Room_names = childKey;

        console.log("Room Name - " + Room_names);
        row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div></hr>";
        document.getElementById("output").innerHTML += row;
});});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"
}

function logout()
{
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
    window.location = "index.html";
}
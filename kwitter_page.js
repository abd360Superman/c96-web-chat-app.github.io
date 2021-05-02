// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBr-_ehsaJ-PWJG7n5DNVrtSLSHzj_8TBM",
    authDomain: "kwitter-decorated.firebaseapp.com",
    databaseURL: "https://kwitter-decorated-default-rtdb.firebaseio.com",
    projectId: "kwitter-decorated",
    storageBucket: "kwitter-decorated.appspot.com",
    messagingSenderId: "203531325627",
    appId: "1:203531325627:web:891e4636d539327663999e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+ Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = " ";
}

function logout() { 
    localStorage.removeItem("user_name"); 
    localStorage.removeItem("room_name"); 
    window.location.replace("index.html"); 
}
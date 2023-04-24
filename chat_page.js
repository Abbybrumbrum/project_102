//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBm5uOhcwj35JPlzgp5711JA2_WX3IDmm8",
    authDomain: "project101-8ed0e.firebaseapp.com",
    databaseURL: "https://project101-8ed0e-default-rtdb.firebaseio.com",
    projectId: "project101-8ed0e",
    storageBucket: "project101-8ed0e.appspot.com",
    messagingSenderId: "753821693541",
    appId: "1:753821693541:web:a9dcc4b39a7ad17bd2f88c"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

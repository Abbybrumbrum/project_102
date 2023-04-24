
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}




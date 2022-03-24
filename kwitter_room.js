
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBMQhlWEJ4NXp_u0MG2n87kQ7B2Ln4CDOU",
      authDomain: "kwitter-21e67.firebaseapp.com",
      projectId: "kwitter-21e67",
      storageBucket: "kwitter-21e67.appspot.com",
      messagingSenderId: "798141172500",
      appId: "1:798141172500:web:a71f10e70eba8a1aabd001"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    function addroom()
    { 
      room_name = document.getElementById("room_name").value; 
     firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name", room_name);
     window.location = "kwitter_page.html"; 
    } 
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logout() 
{ 
localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
  window.location.replace("kwitter.html");
 }
 
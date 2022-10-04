var firebaseConfig = {
      apiKey: "AIzaSyBNF6FRtD5jxTRBYgUmxuC8BQwk0F0YnHA",
      authDomain: "kwitter-94596.firebaseapp.com",
      databaseURL: "https://kwitter-94596-default-rtdb.firebaseio.com",
      projectId: "kwitter-94596",
      storageBucket: "kwitter-94596.appspot.com",
      messagingSenderId: "648267078678",
      appId: "1:648267078678:web:89683b17053326f98c2937"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";         
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      
}
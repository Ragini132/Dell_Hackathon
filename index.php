<html>
<head>
    <title> Retrieve Data</title>
    </head>
    <body>
        
            <h2>
                Enter name of user to get information
            </h2>
        
        <input type="text"id="user"required="required"><br>
        <button type="button" onclick="getdata();">Get</button>
        <p>Name: <strong id="name"></strong></p>
        <p>Gender: <strong id="gender"></strong></p>
        <p>Country: <strong id="country"></strong></p>
        <script src="https://www.gstatic.com/firebasejs/6.4.2/firebase-app.js"></script>
       
        <script src="https://www.gstatic.com/firebasejs/5.8.2/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/3.1.0/firebase-database.js"></script>
        <script>
        var firebaseConfig = {
    apiKey: "AIzaSyCSb2j6sh3UNuCB13JruNsA1a5LlrXsQ6I",
    authDomain: "fir-8639a.firebaseapp.com",
    databaseURL: "https://fir-8639a.firebaseio.com",
    projectId: "fir-8639a",
    storageBucket: "fir-8639a.appspot.com",
    messagingSenderId: "1097706184437",
    appId: "1:1097706184437:web:972bd8e6641860a5"
  };
  firebase.initializeApp(firebaseConfig);
        </script>
        <script type="text/javascript" src="app.js"></script>
    </body>


</html>
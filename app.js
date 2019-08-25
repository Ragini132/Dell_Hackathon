function getdata(){
    var user = document.getElementById("user").value;

  firebase.database().ref('user/'+user).once('value').then(function(snapshot)
    {
    
     var name=snapshot.val().userName;
    
     var gender=snapshot.val().userGender;
     var country=snapshot.val().userCountry;
     document.getElementById("name").innerHTML=name;
     document.getElementById("gender").innerHTML=gender;
     document.getElementById("country").innerHTML=country;
    
    })

}
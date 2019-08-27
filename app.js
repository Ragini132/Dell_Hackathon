function getdata(){
  var user = document.getElementById("user").value;

firebase.database().ref('user/'+user).once('value').then(function(snapshot)
  {
  
   var n0=snapshot.val().user0;
  
   var n1=snapshot.val().user1;
   var n2=snapshot.val().user2;
  
   var n3=snapshot.val().user3;
   var n4=snapshot.val().user4;
  
  // var n5=snapshot.val().user5;
   
  // var country=snapshot.val().userCountry;
   document.getElementById("n0").innerHTML=n0;
   document.getElementById("n1").innerHTML=n1;
   document.getElementById("n2").innerHTML=n2;
   document.getElementById("n3").innerHTML=n3;
   document.getElementById("n4").innerHTML=n4;
  // document.getElementById("n5").innerHTML=n5;
  //const preObject=document.getElementById('0');
  //const dbRefObject=firebase.database().ref().child('0');
  //dbRefObject.on('value', snap =>{ preObject.innerText=JSON.stringify(snap.val(),null,14);});
   
   
  
    
  // document.getElementById("country").innerHTML=country;
  
  })

}
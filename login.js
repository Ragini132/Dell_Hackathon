(function(){
    var ui = new firebaseui.auth.AuthUI(firebase.default.auth());

  //  var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          },
          uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
          }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: 'main.html',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
         // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //  firebase.auth.TwitterAuthProvider.PROVIDER_ID,
         // firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
         // firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '.html',
        // Privacy policy url.
       // privacyPolicyUrl: '<your-privacy-policy-url>'
      };
      ui.start('#firebaseui-auth-container', uiConfig);
      /*
      var currentUid = null;  
 firebase.auth().onAuthStateChanged(function(user) {  
  // onAuthStateChanged listener triggers every time the user ID token changes.  
  // This could happen when a new user signs in or signs out.  
  // It could also happen when the current user ID token expires and is refreshed.  
  if (user && user.uid != currentUid) {  
   // Update the UI when a new user signs in.  
   // Otherwise ignore if this is a token refresh.  
   // Update the current user UID.  
   currentUid = user.uid;  
   document.body.innerHTML = '<h1> Congrats ' + user.displayName + ', you are done! </h1> <h2> Now get back to what you love building. </h2> <h2> Need to verify your email address or reset your password? Firebase can handle all of that for you using the email you provided: ' + user.email + '. <h/2>';  
  } else {  
   // Sign out operation. Reset the current user UID.  
   currentUid = null;  
   console.log("no user signed in");  
  }  
 });  
 
*/

})()


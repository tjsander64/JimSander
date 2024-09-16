import {React, useEffect} from "react";
import { getAuth, EmailAuthProvider, onAuthStateChanged } from 'firebase/auth'
import { StyledFirebaseAuth } from "react-firebaseui";

const auth = getAuth();


const firebaseUIConfig = {
    signInOptions: [ //array of sign in options supported
      //array can include just "Provider IDs", or objects with the IDs and options
      { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true }
    ],
    signInFlow: 'popup', //don't redirect to authenticate
    credentialHelper: 'none', //don't show the email account chooser
    callbacks: { //"lifecycle" callbacks
      signInSuccessWithAuthResult: () => {
        return false; //don't redirect after authentication
      }
    }
  }
  
export function AuthPanel() {

    useEffect(() => {
        const auth = getAuth(); //access the "authenticator"
   
        const unregisterFunction = onAuthStateChanged(auth, (firebaseUser) => {
            if(firebaseUser){ //firebaseUser defined: is logged in
                console.log('logged in', firebaseUser.displayName);
                //do something with firebaseUser (e.g. assign to a state variable)
            }
            else { //firebaseUser is undefined: is not logged in
                console.log('logged out');
            }
        })

        function cleanup() {
            unregisterFunction();
        }
        return cleanup;
    })
    

  
    return (
      <div>
        <h3>Curator Mode</h3>
        <p>Sign-in:</p>
        <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
      </div>
    );
}
import {React, useEffect, useState} from "react";
import { getAuth, EmailAuthProvider, onAuthStateChanged } from 'firebase/auth'
import { StyledFirebaseAuth } from "react-firebaseui";
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadPane from "./UploadPane";



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
        
    const auth = getAuth();

    const [displayPanel, setDisplayPanel] = useState("");

    var loggedIn = "";
    useEffect(() => {
        const auth = getAuth(); //access the "authenticator"
   
        const unregisterFunction = onAuthStateChanged(auth, (firebaseUser) => {
            if(firebaseUser){ //firebaseUser defined: is logged in
                console.log('logged in', firebaseUser.uid);
                //do something with firebaseUser (e.g. assign to a state variable)
                setDisplayPanel("d-none");

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
    

    if(displayPanel==="") {
      return (
        <div>
                {console.log(displayPanel)}

          <div className={displayPanel}>
            <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
          </div>

        </div>
      );
  } else {
    return (
      <div>
        <UploadPane />
      </div>
    )
  }
}
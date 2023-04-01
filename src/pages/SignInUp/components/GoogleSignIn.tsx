
import { useState } from 'react';
import GoogleButton from 'react-google-button'

function GoogleSignIn(){


    const [loading, setLoading] = useState(false)

    // async function signInWithGoogle() {
    //     setLoading(true);
    //     await firebase
    //         .auth()
    //         .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    //         .then(async (result) => {
    //             //const token = result.credential.accessToken;
    //             const userFirebase = result.user;
    //             console.log("user: ", userFirebase);
    //             if(!userFirebase){
    //                 return;                    
    //             }
    //             await onSignIn(userFirebase, false);
                
    //         })
    //           .catch((error) => {
    //             console.error(error);
    //         });
    //         setLoading(false);
    // }

    return(
        <div>
            <GoogleButton/>
        </div>
    )
}

export default GoogleSignIn
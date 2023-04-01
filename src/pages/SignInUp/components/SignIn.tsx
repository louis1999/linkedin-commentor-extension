import { useState } from "react"
import GoogleSignIn from "./GoogleSignIn"




interface SignInProps{
}



function SignIn(props:SignInProps){
  


    return(
        <div>
            <GoogleSignIn/>
        </div>
    )
}

export default SignIn
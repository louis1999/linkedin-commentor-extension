import { useEffect, useState } from "react"
import SignIn from "./SignIn"




interface SignInUpFormsProps{
    signIn:boolean
}

function SignInUpForms(props:SignInUpFormsProps){

    const [signIn,  setSignIn] = useState<boolean>()

    useEffect(()=>{
        setSignIn(props.signIn)
    }, [props.signIn])

    if(signIn){
        return(
           <SignIn/> 
        )
    }else{
        return(
            <div>
                sign up
            </div>
        )
    }
}


export default SignInUpForms
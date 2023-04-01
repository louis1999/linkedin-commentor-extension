import { CButton, CButtonGroup, CCard, CCardBody, CCardTitle } from "@coreui/react"
import { useState } from "react"
import SignInUpForms from "./components/SignInUpForms"




function SignInUp(){

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [name, setName] = useState<string>("")

    const [signIn, setSignIn] = useState<boolean>(false)



    return(
        <div style={{paddingTop:"10%"}}>
            <div style={{width:"50%", margin:"auto"}}>
                <CCard>
                    <CCardBody>
                        <div >
                            <CCardTitle>
                                <div style={{width:"50%", margin:"auto"}}>
                                    <CButtonGroup style={{width:"100%"}} role="group" aria-label="Basic example">
                                        <CButton color="primary" size={signIn?"lg":"sm"} onClick={()=>setSignIn(true)}>Sign in</CButton>
                                        <CButton color="primary" size={signIn?"sm":"lg"} onClick={()=>setSignIn(false)}>Sign up</CButton>
                                    </CButtonGroup>
                                </div>
                            </CCardTitle>
                        </div>
                        <SignInUpForms signIn={signIn}/>
                    </CCardBody>
                </CCard>
            </div>
        </div>
    )

    // if(signIn){
    //     return(
    //         <SignIn/>
    //     )
    // }else{
    //     return(
    //         <SignUp/>
    //     )
    // }
}


export default SignInUp
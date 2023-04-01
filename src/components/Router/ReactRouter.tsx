import { Route, Routes } from "react-router-dom"
import SignInUp from "../../pages/SignInUp/SignInUp"



function ReactRouter(){


    return(
        <Routes>

            <Route path="/signInUp" element={<SignInUp/>}/>

        </Routes>
    )
}


export default ReactRouter
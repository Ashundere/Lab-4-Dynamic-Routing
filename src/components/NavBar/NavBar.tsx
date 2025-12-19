import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import type { AuthContextType } from "../../types"
import AuthContext from "../../context/AuthContext"
import profileImg from "../../lib/images/userprofile.png"

export default function NavBar(){
    const {isAuthenticated, logout} = useContext<AuthContextType>(AuthContext)
    const navigate = useNavigate()

    function handleLogOut(){
        logout()
    }
    return(

        <div className="nav-bar">
            <img src={profileImg} alt="default user profile image"/>
            {!isAuthenticated && <button onClick = {() => navigate("/login")}>Log In</button>}
            {isAuthenticated && <button onClick = {handleLogOut}>Log Out</button>}
        </div>
    )
}
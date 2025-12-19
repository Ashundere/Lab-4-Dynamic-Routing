
import { useContext } from "react"
import type { AuthContextType } from "../../types"
import AuthContext from "../../context/AuthContext"
import userProfileImg from "../../lib/images/userprofile.png"
export default function AdminPage(){
    const {isAuthenticated, currentUser, logout} = useContext<AuthContextType>(AuthContext)

    return(
        <div className="page">
            <img src={userProfileImg} alt="Currently logged-in user profile picture"/>
            <h1>Hi, {currentUser}</h1>
            <h3>You are currently {isAuthenticated? "Logged In": "Not Logged In"}</h3>
            <p>Not {currentUser}?</p>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}
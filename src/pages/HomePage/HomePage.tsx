import AuthContext from "../../context/AuthContext"
import type { AuthContextType } from "../../types"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import "./HomePage.css"

export default function HomePage(){
const {currentUser} = useContext<AuthContextType>(AuthContext)
const navigate = useNavigate()

    return(
        <div className="page">
            {currentUser && 
                <div>
                    <h1>{currentUser}'s Blog</h1>
                    <h3>Welcome Back!</h3>
                    <button onClick={()=>navigate("/blogs")}>Today's Blogs</button>
                </div>}
            {!currentUser && 
                <div>
                    <h1>Please sign in to continue!</h1>
                    <button onClick={()=> navigate("/login")}>Log In!</button>
                </div>}
        </div>
    )
}
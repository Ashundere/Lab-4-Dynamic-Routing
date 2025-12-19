import { useContext, useState } from "react"
import type { AuthContextType } from "../../types"
import AuthContext from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function LoginPage(){
const {currentUser, isAuthenticated, login} = useContext<AuthContextType>(AuthContext)
const [formData, setFormData] = useState<string>(" ")
const navigate = useNavigate()

function handleSubmit(event: React.FormEvent){
    event.preventDefault()
    login(formData)
    setFormData(prevData => "")
    navigate("/")
}

function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    setFormData( prevData => event.target.value)

}


    return(
        <form onSubmit={handleSubmit} className="page">
            <h1>Log In</h1>
            <label htmlFor="username">Username:</label>
            <input 
            type="text"
            placeholder="John Doe"
            value= {formData}
            onChange={handleChange}
            required
            />
            <label htmlFor="password">Password:</label>
            <input 
            type="password"
            placeholder="********"
            required
            />
            <button type="submit">Log In</button>
        </form>
    )
}
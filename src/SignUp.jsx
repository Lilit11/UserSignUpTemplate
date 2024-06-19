import { useState } from "react"

export const SignUp = ({ onAdd, users }) => {

    const [user, setUser] = useState({ name: "", surname: "", login: "", password: "" })
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegEx = /^.{6,}$/
    const handleClick = e => {
        e.preventDefault()
        setSuccess("")
        if (!user.name.trim()) {
            return setError("Please fill in the name")
        }
        if (!user.surname.trim()) {
            return setError("Please fill in the surname")
        }
        if (!emailRegEx.test(user.login)) {
            return setError("Login must be an email")
        }
        let flag = users.some(elm =>
            elm.login.toLowerCase() == user.login)
        // Armen jan, inchia vor stex  cods {} eri mej em grum false a berum??

        if (flag) {
            return setError("This email is already used")
        }
        if (!passRegEx.test(user.password)) {
            return setError("Password must be at least 6 characters")
        }
        onAdd(user)
        setUser({ name: "", surname: "", login: "", password: "" })
        setError("")
        setSuccess("You have successfully Signed up!")
    }


    return <div>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleClick}>
            <input
                placeholder="name"
                value={user.name}
                onChange={e => setUser({ ...user, name: e.target.value })}>
            </input>
            <input
                placeholder="surname"
                value={user.surname}
                onChange={e => setUser({ ...user, surname: e.target.value })}>
            </input>
            <input
                placeholder="login"
                value={user.login}
                onChange={e => setUser({ ...user, login: e.target.value })}>
            </input>
            <input
                placeholder="password"
                value={user.password}
                onChange={e => setUser({ ...user, password: e.target.value })}>
            </input>
            <button>submit</button>
            {success && <p style={{ color: "green" }}>{success}</p>}
        </form>
    </div>
}

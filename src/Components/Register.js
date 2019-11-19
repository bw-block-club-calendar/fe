
import React from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";


export default function Register(props) {

    const [form, setForm] = React.useState({ username: "", password: "" });

    const handleChanges = e => {
        setForm({...form, [e.target.name]: e.target.value}); 
    }

    const login = e => {
        e.preventDefault(); 
        AxiosWithAuth()
            .post("/api/auth/register", form) 
            .then(res => {
                console.log("LOGIN", res);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/profile");
            })
            .catch(error => {
                console.log("SIGNUPERROR", error.response.data.message)
                alert(error.response.data.message)
                setForm({ username: "", password: "" }); 
         });
    };

    return (
        <div>
            <h2>CREATE ACCOUNT</h2>
            <div>
            <form onSubmit={login}>
                <label>Username</label>
                <input 
                    required
                    type="text"
                    placeholder="username"
                    name="username" 
                    onChange={handleChanges}
                    value={form.username}
                />
            
                <label>Password</label>
                <input 
                    required
                    type="password"
                    placeholder="password"
                    name="password" 
                    onChange={handleChanges}
                    value={form.password}
                />
                <button type="submit">SUBMIT</button>
                
            </form>
            </div>

        </div>
    )
}
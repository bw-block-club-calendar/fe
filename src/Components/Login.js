import React from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";

const Login = props => {
  const [form, setForm] = React.useState({ username: "", password: "" });

  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login = e => {
    e.preventDefault();
    AxiosWithAuth()
      .post("/api/auth/login", credentials)
      .then(res => {
        console.log("LOGIN", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.userId);
        props.history.push("/profile");
      })
      .catch(error => {
        console.log("LOGINERROR", error.response.data.message);
        alert(error.response.data.message);
        setForm({ username: "", password: "" });
      });
  };

  return (
    <div>
      <h2>LOGIN</h2>
      <div>
        <form onSubmit={login}>
          <label>Username</label>
          <input
            required
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChanges}
            value={---.username}
          />
          <label>Password</label>
          <input
            required
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChanges}
            value={----.password}
          />
          <button type="submit">Login</button>
         
        </form>
      </div>
    </div>
  );
};

export default Login;

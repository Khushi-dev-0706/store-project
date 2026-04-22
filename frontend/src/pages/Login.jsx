import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Success");

      window.location.href = "/dashboard";

    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={styles.box}>
      <h1>Login</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <button onClick={submitHandler} style={styles.button}>
        Login
      </button>
    </div>
  );
}

const styles = {
  box: {
    width: "350px",
    margin: "60px auto",
    padding: "30px",
    background: "#1e1e2f",
    color: "white",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: { padding: "12px" },
  button: {
    padding: "12px",
    background: "green",
    color: "white",
    border: "none"
  }
};

export default Login;
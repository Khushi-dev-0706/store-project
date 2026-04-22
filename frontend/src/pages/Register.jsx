import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async () => {
    try {
      const res = await axios.post(
        "https://khushi-store-backend.onrender.com/api/users/register",
        { name, email, password }
      );

      alert(res.data.message);

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div style={styles.box}>
      <h1>Register</h1>

      <input placeholder="Name" value={name}
        onChange={(e) => setName(e.target.value)} style={styles.input} />

      <input placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} style={styles.input} />

      <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} style={styles.input} />

      <button onClick={submitHandler} style={styles.button}>
        Register
      </button>
    </div>
  );
}

const styles = {
  box: { width: "350px", margin: "60px auto", padding: "30px", background:"#1e1e2f", color:"white", display:"flex", flexDirection:"column", gap:"15px" },
  input: { padding:"12px" },
  button: { padding:"12px", background:"blue", color:"white", border:"none" }
};

export default Register;
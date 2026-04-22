function Dashboard() {
  const token = localStorage.getItem("token");

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Welcome to Dashboard 🔥</h1>
      <p>JWT Token Found: {token ? "Yes" : "No"}</p>
    </div>
  );
}

export default Dashboard;
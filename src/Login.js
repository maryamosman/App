import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div className="loginbody">
      <h2>Daxil ol</h2>
      <form>
        <label>
          İstifadəçi adı:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Parol:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          İrəli
        </button>
      </form>
      <div>
        Hesabınız yoxdur? <Link to="/register">Qeydiyyatdan keçin</Link>.
      </div>
    </div>
  );
};

export default Login;

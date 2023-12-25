import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/user");
  };

  return (
    <div className="registerbody">
      <h2>Qeydiyyatdan keçin</h2>
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
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>
          İrəli
        </button>
      </form>
      <div>
        Artıq bir hesabınız var mı?<Link to="/login">Daxil olun</Link>.
      </div>
    </div>
  );
};

export default Register;

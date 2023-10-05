import "./Register.scss";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { DataLogin } from "./LoginData";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [iconOn, setIconOn] = useState(true);
  const [iconOff, setIconOff] = useState(false);
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState("");
  const [email, setEmail] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mess, setMess] = useState(false);
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePass = () => {
    setShowPass(true);
    setIconOn(false);
    setIconOff(true);
  };
  const handleEyeOff = () => {
    setShowPass(false);
    setIconOn(true);
    setIconOff(false);
  };
  const handleAccount = (e) => {
    setAccount(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSignUp = async () => {
    const Sign = {
      account: account,
      email: email,
      password: password,
    };

    // const accountCheck = DataLogin.some((acc) => acc.account === Sign.account); validate

    const res = await axios.post("http://localhost:5000/api/register", {
      account: account,
      password: email,
      rePassword: password,
    });

    if (res.data.success === false) {
      setSuccess(false);
      setMess(true);
      toast.error(res.data.message);
    } else {
      DataLogin.push(Sign);
      setPassword("");
      setAccount("");
      setEmail("");
      setSuccess(true);
      navigate("/login");
      toast.success("Sign Up Success !");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-content">
          <div className="login-form">
            <div className="text-login">Sign Up</div>
            <div className="login-label">
              <div className="login-account">
                <AiOutlineUser className="icons-login" />
                <input
                  type="text"
                  required
                  value={account}
                  onChange={handleAccount}
                />
                <label className="text-label-acc">Account</label>
              </div>
              <div className="login-password-em">
                <AiFillLock className="icons-pass" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={handleEmail}
                />
                <label className="text-label-pass-em">Email</label>
              </div>
              <div className="login-password">
                {iconOff && (
                  <FiEye className="icons-pass" onClick={handleEyeOff} />
                )}
                {iconOn && (
                  <FiEyeOff className="icons-pass" onClick={handlePass} />
                )}
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  required
                  onChange={handlePassword}
                />
                <label className="text-label-pass">Enter Password</label>
              </div>
              <div className="login-enter">
                <button onClick={() => handleSignUp()}>Sign Up</button>
              </div>
              <div className="option-login">
                <span>You want to go back to login ? </span>
                <Link to="/login">Login</Link> or&nbsp;
                <Link to="/">Home</Link>
              </div>
            </div>
            {mess && (
              <p
                style={{
                  color: "red",
                  fontSize: "1rem",
                  fontWeight: "500",
                  marginTop: "0px",
                }}
                className="err"
              >
                ERROR: Account already exists !
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;

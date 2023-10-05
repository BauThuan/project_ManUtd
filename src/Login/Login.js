import "./Login.scss";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { DataLogin } from "./LoginData";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../authenticate/Authenticate";

function Login() {
  const { setInforUser } = useContext(MyContext);
  const navigate = useNavigate();
  const [iconOn, setIconOn] = useState(true);
  const [iconOff, setIconOff] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleOn = () => {
    setIconOn(false);
    setIconOff(true);
    setShowPass(true);
  };
  const handleOff = () => {
    setIconOn(true);
    setIconOff(false);
    setShowPass(false);
  };
  const handleShow = (e) => {
    setPassword(e.target.value);
  };
  const handleAccount = (e) => {
    setAccount(e.target.value);
  };

  const handleLogin = async () => {
    if (!account) {
      return setMessage("Thiếu trường này !");
    }
    if (!password) {
      return setMessage("Thiếu trường này !");
    }
    // const LoginOk = DataLogin.find((acc) => {
    //   return acc.account === account && acc.password === password;
    // });

    const res = await axios.post("http://localhost:5000/api/login", {
      account,
      password,
    });
    if (res.data.success) {
      toast.success(res.data.message);
      localStorage.setItem("vanthuan", res.data.token);
      // setInforUser(res.data.data);
      navigate("/success");
    } else {
      return toast.error(res.data.message);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-content">
          <div className="login-form">
            <div className="text-login">LOGIN</div>
            <div className="login-label">
              <div className="login-account">
                <AiOutlineUser className="icons-login" />
                <input
                  type="text"
                  required
                  value={account}
                  onChange={handleAccount}
                  onKeyDown={(e) => handleKeyDown(e)}
                />

                <label className="text-label-acc">Account</label>
              </div>
              <div className="login-password">
                {iconOn && (
                  <FiEyeOff className="icons-pass" onClick={handleOn} />
                )}
                {iconOff && (
                  <FiEye className="icons-pass" onClick={handleOff} />
                )}
                <input
                  type={showPass ? "text" : "password"} // nếu showpass là true thì thực thi "text"  còn ngược lại là false thì là password
                  required
                  value={password}
                  onChange={handleShow}
                />
                <label className="text-label-pass">Password</label>
              </div>
              <p style={{ color: "blue", fontSize: "12px" }}>{message}</p>
              <div className="login-enter">
                <button onClick={handleLogin} onKeyDown={handleKeyDown}>
                  Login
                </button>
              </div>
              <div className="option-login">
                <span>Do not have an account ?</span>
                <Link to="/register">Sign Up</Link> or&nbsp;
                <Link to="/">Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;

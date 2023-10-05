import "./Sheader.scss";
import { Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { FiAlertTriangle, FiUser } from "react-icons/fi";
import { DataLogin } from "../Login/LoginData";
import { Avartar } from "./Avatar";

function Sheader() {
  window.scrollTo(0, 0);
  const Avatar = Avartar.map((a) => {
    return a.image;
  });
  return (
    <>
      <div className="navbar_container">
        <div className="navbar_content">
          <div className="navbar_up">
            <div className="navbar_up_img">
              <Link to="/success">
                <img src="https://thekingincatsle.github.io/Manchester-United-website/pic/logo.png" />
              </Link>
            </div>
            <div className="navbar_up_text">
              <Link className="link-unstyled" to="/success">
                MY UNITED
              </Link>
            </div>
            <div className="navbar_up_text">
              <Link
                className="link-unstyled"
                // onClick={handleLoading}
                to="/fsuccess"
              >
                FIRST TEAM
              </Link>
            </div>
            <div className="navbar_up_text">
              <Link
                className="link-unstyled"
                // onClick={handleLoading}
                to="/msuccess"
              >
                MANAGER
              </Link>
            </div>
            <div className="navbar_up_text">
              <Link
                className="link-unstyled"
                // onClick={handleLoading}
                to="/shopsu"
              >
                SHOP MUNTD
              </Link>
            </div>
          </div>
          <div className="navbar_down-nd">
            <div className="navbar_down_login-nd">
              <Link className="link-login-nd" to="/mu">
                <img className="avatar-image" src={Avatar} />
              </Link>
              <div className="menu-multilevel">
                <div className="logout-text">
                  <Link className="logout" to="/mu">
                    Log Out
                    <BiLogIn className="icons-log" />
                  </Link>
                </div>
                <div>
                  <Link className="logout" to="/profile">
                    Information <FiUser className="icons-log" />
                  </Link>
                </div>
                <div>
                  <Link className="logout" to="/mu">
                    Error <FiAlertTriangle className="icons-log" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sheader;

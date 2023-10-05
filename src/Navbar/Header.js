import "./Header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
function Header() {
  // đưa trang lên đầu trang khi trang mới được tải lại.
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  const [load, setLoad] = useState(false);
  const handleLoading = () => {
    setLoad(true);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  return (
    <>
      <div className="navbar_container">
        {load && <Loading />}
        <div className="navbar_content">
          <div className="navbar_up">
            <div className="navbar_up_img">
              <Link to="/">
                <img src="https://thekingincatsle.github.io/Manchester-United-website/pic/logo.png" />
              </Link>
            </div>
            <div className="navbar_up_text">
              <Link className="link-unstyled" onClick={handleLoading} to="/mu">
                MY UNITED
              </Link>
            </div>
            <div className="navbar_up_text">
              <Link
                className="link-unstyled"
                // onClick={handleLoading}
                to="/home"
              >
                FIRST TEAM
              </Link>
            </div>
            <div className="navbar_up_text">
              <Link
                className="link-unstyled"
                // onClick={handleLoading}
                to="/manage"
              >
                MANAGER
              </Link>
            </div>
            <div className="navbar_up_text">
              <Link
                className="link-unstyled"
                // onClick={handleLoading}
                to="/shop"
              >
                SHOP MUNTD
              </Link>
            </div>
          </div>
          <div className="navbar_down">
            <div className="navbar_down_login">
              <Link className="link-login" to="/login">
                LOGIN
              </Link>
            </div>
            <div className="navbar_down_seperate"></div>
            <div className="navbar_down_login">
              <Link className="link-login" to="/register">
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;

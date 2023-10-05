import "./Mheader.scss";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useState } from "react";

function Mheader() {
  // đưa trang lên đầu trang khi trang mới được tải lại.
  window.scrollTo(0, 0);
  const [show, setShow] = useState(false);
  const HandleShow = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 500);
  };

  return (
    <>
      <div className="navbar_container">
        {show && <Loading />}
        <div className="navbar_content">
          <div className="navbar_up">
            <div className="navbar_up_img">
              <Link to="/">
                <img src="https://thekingincatsle.github.io/Manchester-United-website/pic/logo.png" />
              </Link>
            </div>
            <div className="navbar_up_text">
              <Link className="link-unstyled" onClick={HandleShow} to="/mu">
                MY UNITED
              </Link>
            </div>
            <div className="navbar_up_text">
              <Link className="link-unstyled" onClick={HandleShow} to="/home">
                FIRST TEAM
              </Link>
            </div>
            <div className="navbar_up_text">
              <Link className="link-unstyled" onClick={HandleShow} to="/manage">
                MANAGER
              </Link>
            </div>
            <div className="navbar_up_text">
              <Link className="link-unstyled" onClick={HandleShow} to="/shop">
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
export default Mheader;

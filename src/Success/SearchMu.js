import "./SearchMu.scss";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { Avartar } from "./Avatar";
import { CiLogout, CiUser } from "react-icons/ci";
import { FiAlertTriangle } from "react-icons/fi";
import Detail from "../ShopMu/Detail";
import Adidas from "./Adidas";

function SearchMu() {
  return (
    <>
      <div className="search-container">
        <div className="search-content">
          <div className="logo-image">
            <Link to="/success">
              <img src="https://thekingincatsle.github.io/Manchester-United-website/pic/logo.png" />
            </Link>
            UNITED DIRECT
          </div>
          <div className="search-input">
            <input type="search" placeholder="Search..." />
            <BiSearchAlt2 className="search-icons" />
            <FiShoppingCart className="cart-shop" />
          </div>
          <div className="all-code">
            <div className="image-ava">
              {Avartar.map((a) => {
                return <img className="image-along" src={a.image} />;
              })}
            </div>
            <div className="information-content">
              <div className="information-far">
                <div className="information">
                  <Link className="information-text" to="/mu">
                    Log Out
                    <CiLogout className="icons-information" />
                  </Link>
                </div>
                <div className="information">
                  <Link className="information-text" to="/profile">
                    Information
                    <CiUser className="icons-information" />
                  </Link>
                </div>
                <div className="information">
                  <Link className="information-text" to="/mu">
                    Error
                    <FiAlertTriangle className="icons-information" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Adidas />
    </>
  );
}
export default SearchMu;

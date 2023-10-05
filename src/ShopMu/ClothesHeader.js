import "./ClothesHeader.scss";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function ClothesHeader() {
  return (
    <>
      <div className="header-clothes-container">
        <div className="clothes-image">
          <div>
            <Link to="/shop">
              <img src="https://thekingincatsle.github.io/Manchester-United-website/pic/logo.png" />
            </Link>
            <span>UNITED DIRECT</span>
          </div>
        </div>
        <div className="clothes-search">
          <input type="search" placeholder="Search..." />
          <CiSearch className="icons-btn" />
          <RiShoppingCart2Fill className="cart-icons" />
        </div>
      </div>
      <div className="cart-image">
        <img src="https://store.manutd.com/content/ws/all/f92cec00-a559-46b0-930b-becaad176919__1250X60.png" />
      </div>
    </>
  );
}
export default ClothesHeader;

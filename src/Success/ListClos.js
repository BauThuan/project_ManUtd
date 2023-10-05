import Sheader from "./Sheader";
import "./SearchMu.scss";
import { ListNews } from "../ShopMu/ListNew";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footers from "../Manage/Footers";
import "../ShopMu/Detail.scss";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { Avartar } from "./Avatar";
import { CiLogout, CiUser } from "react-icons/ci";
import { FiAlertTriangle } from "react-icons/fi";
import { toast } from "react-toastify";
function ListClo() {
  const { id } = useParams();
  const [list, setList] = useState(null);
  const [SelectSize, setSelectSize] = useState("");
  console.log(ListNews);
  useEffect(() => {
    const foundClother = ListNews.find((item) => {
      return item.id === +id;
    });
    setList(foundClother);
  }, [id]);
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };
  const handleSelect = (e) => {
    setSelectSize(e.target.value);
  };
  const handleBuy = () => {
    if (quantity === 0 || SelectSize === "") {
      return toast.error("You have not registered any products yet !");
    } else {
      return toast.success("You have successfully registered !");
    }
  };

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
                <Link className="information-text" to="/information">
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
      </div>{" "}
      <div className="detail-container">
        <h2>Kit Sale</h2>
        {(list && (
          <div className="detail-content">
            <div className="detail-up">
              <img src={list.image} />
            </div>
            <div className="detail-down">
              <p className="text-p">{list.information}</p>
              <p className="text-price">{list.price}</p>
              <div className="size-content">
                <label>
                  <input type="radio" name="size" onChange={handleSelect} />M
                </label>
                <label>
                  <input type="radio" name="size" onChange={handleSelect} />L
                </label>
                <label>
                  <input type="radio" name="size" onChange={handleSelect} />
                  XL
                </label>
                <label>
                  <input type="radio" name="size" onChange={handleSelect} />
                  XXL
                </label>
              </div>
              <label className="buy-btn">
                <button className="btn-1" onClick={decreaseQuantity}>
                  -
                </button>
                <input
                  type="number"
                  max="99"
                  min="0"
                  placeholder="0"
                  value={quantity}
                />
                <button className="btn-2" onClick={increaseQuantity}>
                  +
                </button>
              </label>
              <div className="buy">
                <button onClick={handleBuy}>Buy</button>
              </div>
            </div>
          </div>
        )) || <p>Không tìm thấy dữ liệu</p>}
      </div>
      <Footers />
    </>
  );
}
export default ListClo;

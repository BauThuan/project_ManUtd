import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Clothes } from "../ShopMu/Shop";
import { ListNew } from "../ShopMu/ListNew";
import Footers from "../Manage/Footers";
import "../ShopMu/Detail.scss";
import { toast } from "react-toastify";

function Adidas() {
  const { id } = useParams();
  const [clothesData, setClothesData] = useState(null);
  useEffect(() => {
    const foundClothes = Clothes.find((item) => {
      return item.id === +id;
    });
    setClothesData(foundClothes);
  }, [id]);
  const [quantity, setQuantity] = useState(0);
  const [SelectSize, setSelectSize] = useState("");
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
      <div className="detail-container">
        <h2>Adidas Lifestyle</h2>
        {(clothesData && (
          <div className="detail-content">
            <div className="detail-up">
              <img src={clothesData.image} />
            </div>
            <div className="size-container"></div>
            <div className="detail-down">
              <p className="text-p">{clothesData.information}</p>
              <p className="text-price">{clothesData.price}</p>
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
export default Adidas;

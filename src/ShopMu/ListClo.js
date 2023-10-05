import ClothesHeader from "./ClothesHeader";
import { ListNews } from "./ListNew";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footers from "../Manage/Footers";
import "./Detail.scss";
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
    // if (quantity === 0 || SelectSize === "") {
    //   return toast.error("You have not registered any products yet !");
    // } else {
    //   return toast.error("You have successfully registered !");
    // }
    return toast.error("You must be logged in to purchase !");
  };

  return (
    <>
      <ClothesHeader />
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

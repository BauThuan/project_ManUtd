import "../ShopMu/Shop.scss";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Scrolling } from "../Navbar/Scroll";
import { useRef } from "react";
import { Link } from "react-router-dom";

function NewClo() {
  const sliderContentrr = useRef();
  const sliderShowrr = useRef();
  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderContentrr.current.scrollWidth - sliderContentrr.current.clientWidth;
    if (sliderContentrr.current.scrollLeft < maxScrollLeft) {
      Scrolling(
        sliderContentrr.current,
        250,
        sliderShowrr.current.clientWidth,
        sliderContentrr.current.scrollLeft
      );
    }
  };
  const handleScrollLeft = () => {
    if (sliderContentrr.current.scrollLeft > 0) {
      Scrolling(
        sliderContentrr.current,
        250,
        -sliderShowrr.current.clientWidth,
        sliderContentrr.current.scrollLeft
      );
    }
  };
  const NewClothes = [
    {
      image:
        "https://images.footballfanatics.com/manchester-united/adidas-train-essentials-train-cotton-3-stripes-hoodie-black/white-womens_ss4_p-13371002+u-irvdl4ejpv1900cs87gt+v-71b5380dc97141048615ca9e8d33ef09.jpg?_hv=2&w=340",
      price: "380 USD",
      information:
        "adidas Train Essentials Train Cotton 3-Stripes Hoodie - Black/White - Womens",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/adidas-train-essentials-feelready-training-t-shirt-dark-blue/white-mens_ss4_p-13370970+u-zba6md42wzxbnlutr9hf+v-a4ae4d2dc3f64cdd84398a346888dbab.jpg?_hv=2&w=340",
      price: "210 USD",
      information:
        "adidas Train Essentials Feelready Training T-Shirt - Dark Blue/White - Mens",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/adidas-train-essentials-seasonal-training-full-zip-jacket-dark-blue/white-mens_ss4_p-13370964+u-14sfxbker6u7qpmjtobz+v-33b5d4ff848946cf8aa6235483c8ca7b.jpg?_hv=2&w=340",
      price: "450 USD",
      information:
        "adidas Train Essentials Seasonal Training Full-Zip Jacket - Dark Blue/White - Mens",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/adidas-designed-for-training-heatrdy-hiit-allover-print-training-shorts-grey-three/grey-one-mens_ss4_p-13370955+u-6x5ym9qdkysdtkvuf6b7+v-2f6680bee9e945dababae08fe124ec83.jpg?_hv=2&w=340",
      price: "380 USD",
      information:
        "adidas Designed For Training Heat.Rdy Hiit Allover Print Training Shorts - Grey Three/Grey One - Mens",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/adidas-train-essentials-seasonal-training-full-zip-jacket-black/grey-five-mens_ss4_p-13370971+u-76mcqc76e60eh5gs6m7x+v-c0bab2bac62148f499682f95d7483fb0.jpg?_hv=2&w=340",
      price: "460 USD",
      information:
        "adidas Train Essentials Seasonal Training Full-Zip Jacket - Black/Grey Five - Mens",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/adidas-train-essentials-feelready-training-t-shirt-collegiate-burgundy/black-mens_ss4_p-13370948+u-1gysbzwqa8ta5po6cz6n+v-6f3d1f0c0cac471bb0640f657848fbc6.jpg?_hv=2&w=340",
      price: "210 USD   ",
      information:
        "adidas Train Essentials Feelready Training T-Shirt - Collegiate Burgundy/Black - Mens",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/adidas-train-essentials-feelready-logo-training-t-shirt-dark-blue/white-mens_ss4_p-13370979+u-18hxki265jj1kob0npf7+v-76b4a1c2ec45437fae57c2716fdb72c3.jpg?_hv=2&w=340",
      price: "210 USD",
      information:
        "adidas Train Essentials Feelready Logo Training T-Shirt - Dark Blue/White - Mens",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/adidas-train-essentials-3-stripes-training-t-shirt-dark-blue-mens_ss4_p-13381142+u-15kvxxuix308oot6zh4q+v-18e2b6829d84434f9963690fd7d7fa88.jpg?_hv=2&w=340",
      price: "190 USD",
      information:
        "adidas Train Essentials 3-Stripes Training T-Shirt - Dark Blue - Mens",
    },
  ];
  return (
    <>
      <div className="clothes-shop">
        <h1>Kit Sale</h1>
        <div className="list-clothes" ref={sliderContentrr}>
          {NewClothes.map((clothes, index) => {
            return (
              <div className="list-infor" ref={sliderShowrr}>
                <Link to={`/newlists/${index}`}>
                  <img src={clothes.image} />
                </Link>
                <p className="price-list">{clothes.price}</p>
                <p className="text-list">{clothes.information}</p>
              </div>
            );
          })}
        </div>
        <div className="icons-left">
          <BiChevronLeft className="clo-Left" onClick={handleScrollLeft} />
        </div>
        <div className="icons-right">
          <BiChevronRight className="clo-Right" onClick={handleScrollRight} />
        </div>
      </div>
    </>
  );
}
export default NewClo;
export const NewClothes = [
  {
    id: 0,
    image:
      "https://images.footballfanatics.com/manchester-united/adidas-train-essentials-train-cotton-3-stripes-hoodie-black/white-womens_ss4_p-13371002+u-irvdl4ejpv1900cs87gt+v-71b5380dc97141048615ca9e8d33ef09.jpg?_hv=2&w=340",
    price: "380 USD",
    information:
      "adidas Train Essentials Train Cotton 3-Stripes Hoodie - Black/White - Womens",
  },
  {
    id: 1,
    image:
      "https://images.footballfanatics.com/manchester-united/adidas-train-essentials-feelready-training-t-shirt-dark-blue/white-mens_ss4_p-13370970+u-zba6md42wzxbnlutr9hf+v-a4ae4d2dc3f64cdd84398a346888dbab.jpg?_hv=2&w=340",
    price: "210 USD",
    information:
      "adidas Train Essentials Feelready Training T-Shirt - Dark Blue/White - Mens",
  },
  {
    id: 2,
    image:
      "https://images.footballfanatics.com/manchester-united/adidas-train-essentials-seasonal-training-full-zip-jacket-dark-blue/white-mens_ss4_p-13370964+u-14sfxbker6u7qpmjtobz+v-33b5d4ff848946cf8aa6235483c8ca7b.jpg?_hv=2&w=340",
    price: "450 USD",
    information:
      "adidas Train Essentials Seasonal Training Full-Zip Jacket - Dark Blue/White - Mens",
  },
  {
    id: 3,
    image:
      "https://images.footballfanatics.com/manchester-united/adidas-designed-for-training-heatrdy-hiit-allover-print-training-shorts-grey-three/grey-one-mens_ss4_p-13370955+u-6x5ym9qdkysdtkvuf6b7+v-2f6680bee9e945dababae08fe124ec83.jpg?_hv=2&w=340",
    price: "380 USD",
    information:
      "adidas Designed For Training Heat.Rdy Hiit Allover Print Training Shorts - Grey Three/Grey One - Mens",
  },
  {
    id: 4,
    image:
      "https://images.footballfanatics.com/manchester-united/adidas-train-essentials-seasonal-training-full-zip-jacket-black/grey-five-mens_ss4_p-13370971+u-76mcqc76e60eh5gs6m7x+v-c0bab2bac62148f499682f95d7483fb0.jpg?_hv=2&w=340",
    price: "460 USD",
    information:
      "adidas Train Essentials Seasonal Training Full-Zip Jacket - Black/Grey Five - Mens",
  },
  {
    id: 5,
    image:
      "https://images.footballfanatics.com/manchester-united/adidas-train-essentials-feelready-training-t-shirt-collegiate-burgundy/black-mens_ss4_p-13370948+u-1gysbzwqa8ta5po6cz6n+v-6f3d1f0c0cac471bb0640f657848fbc6.jpg?_hv=2&w=340",
    price: "210 USD   ",
    information:
      "adidas Train Essentials Feelready Training T-Shirt - Collegiate Burgundy/Black - Mens",
  },
  {
    id: 6,
    image:
      "https://images.footballfanatics.com/manchester-united/adidas-train-essentials-feelready-logo-training-t-shirt-dark-blue/white-mens_ss4_p-13370979+u-18hxki265jj1kob0npf7+v-76b4a1c2ec45437fae57c2716fdb72c3.jpg?_hv=2&w=340",
    price: "210 USD",
    information:
      "adidas Train Essentials Feelready Logo Training T-Shirt - Dark Blue/White - Mens",
  },
  {
    id: 6,
    image:
      "https://images.footballfanatics.com/manchester-united/adidas-train-essentials-3-stripes-training-t-shirt-dark-blue-mens_ss4_p-13381142+u-15kvxxuix308oot6zh4q+v-18e2b6829d84434f9963690fd7d7fa88.jpg?_hv=2&w=340",
    price: "190 USD",
    information:
      "adidas Train Essentials 3-Stripes Training T-Shirt - Dark Blue - Mens",
  },
];

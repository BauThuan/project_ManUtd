import "./Shop.scss";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Scrolling } from "../Navbar/Scroll";
import { useRef } from "react";
import { Link } from "react-router-dom";
function ListNew() {
  const sliderContents = useRef();
  const sliderShows = useRef();
  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderContents.current.scrollWidth - sliderContents.current.clientWidth;
    if (sliderContents.current.scrollLeft < maxScrollLeft) {
      Scrolling(
        sliderContents.current,
        250,
        sliderShows.current.clientWidth,
        sliderContents.current.scrollLeft
      );
    }
  };
  const handleScrollLeft = () => {
    if (sliderContents.current.scrollLeft > 0) {
      Scrolling(
        sliderContents.current,
        250,
        -sliderShows.current.clientWidth,
        sliderContents.current.scrollLeft
      );
    }
  };
  const ListNews = [
    {
      image:
        "https://images.footballfanatics.com/manchester-united/manchester-united-third-shirt-2022-23_ss4_p-13313262+u-8nhsa3vcjk95kdq67480+v-8dffa5ded49242148d8790219b2f62ba.jpg?_hv=2&w=340",
      price: "220 USD",
      information: "Manchester United Third Shirt 2022-23",
    },

    {
      image:
        "https://images.footballfanatics.com/manchester-united/manchester-united-home-shirt-2022-23-kids_ss4_p-13307688+u-ezvzd4rz8bxh95cfkptl+v-5f5c5161f87f49c78bf48a3c9a20cc95.jpg?_hv=2&w=340",
      price: "260 USD",
      information: "Manchester United Home Shirt 2022-23 - Kids",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/manchester-united-home-shirt-2022-23_ss4_p-13307715+u-5muuro76i0kukjj2r392+v-a22955b33acc4d29b6e5e72c3d4821c1.jpg?_hv=2&w=340",
      price: "450 USD",
      information: "Manchester United Home Shirt 2022-23",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/manchester-united-away-authentic-shirt-2022-23_ss4_p-13307707+u-vtowsabcbujun2vbhc5x+v-56a1e81954f14f90a3f866183014b04d.jpg?_hv=2&w=340",
      price: "420 USD",
      information: "Manchester United Away Authentic Shirt 2022-23",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/manchester-united-third-authentic-shirt-2022-23_ss4_p-13313252+u-1e8relffnvutgb7tqyy5+v-ea855e9f056a4747a91531df832f4800.jpg?_hv=2&w=340",
      price: "340 USD",
      information: "Manchester United Third Authentic Shirt 2022-23",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/manchester-united-away-shirt-2022-23_ss4_p-13307691+u-183syu0k8suiiicaf1xe+v-406b7bb2a4174ef8981b639f3d729d17.jpg?_hv=2&w=340",
      price: "340 USD",
      information: "Manchester United Away Shirt 2022-23",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/manchester-united-home-babykit-2022-23_ss4_p-13307754+u-10yo8rxy32ozmqam1mqe+v-fcf69e014f2e4029bb8efcdd010c9120.jpg?_hv=2&w=340",
      price: "200 USD",
      information: "Manchester United Home Babykit 2022-23",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/manchester-united-home-authentic-shirt-2022-23_ss4_p-13307701+u-skyjtpdsdifd85q7gn1a+v-5c38b7aedcfe43e79ad60b12d4e2e980.jpg?_hv=2&w=340",
      price: "520 USD",
      information: "Manchester United Home Authentic Shirt 2022-23",
    },
  ];
  return (
    <>
      <div className="clothes-shop">
        <h1>Kit Sale</h1>
        <div className="list-clothes" ref={sliderContents}>
          {ListNews.map((clothes, index) => {
            return (
              <div className="list-infor" ref={sliderShows}>
                <Link to={`/list/${index}`}>
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
export default ListNew;
export const ListNews = [
  {
    id: 0,
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-third-shirt-2022-23_ss4_p-13313262+u-8nhsa3vcjk95kdq67480+v-8dffa5ded49242148d8790219b2f62ba.jpg?_hv=2&w=340",
    price: "220 USD",
    information: "Manchester United Third Shirt 2022-23",
  },

  {
    id: 1,
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-home-shirt-2022-23-kids_ss4_p-13307688+u-ezvzd4rz8bxh95cfkptl+v-5f5c5161f87f49c78bf48a3c9a20cc95.jpg?_hv=2&w=340",
    price: "260 USD",
    information: "Manchester United Home Shirt 2022-23 - Kids",
  },
  {
    id: 2,
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-home-shirt-2022-23_ss4_p-13307715+u-5muuro76i0kukjj2r392+v-a22955b33acc4d29b6e5e72c3d4821c1.jpg?_hv=2&w=340",
    price: "450 USD",
    information: "Manchester United Home Shirt 2022-23",
  },
  {
    id: 3,
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-away-authentic-shirt-2022-23_ss4_p-13307707+u-vtowsabcbujun2vbhc5x+v-56a1e81954f14f90a3f866183014b04d.jpg?_hv=2&w=340",
    price: "420 USD",
    information: "Manchester United Away Authentic Shirt 2022-23",
  },
  {
    id: 4,
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-third-authentic-shirt-2022-23_ss4_p-13313252+u-1e8relffnvutgb7tqyy5+v-ea855e9f056a4747a91531df832f4800.jpg?_hv=2&w=340",
    price: "340 USD",
    information: "Manchester United Third Authentic Shirt 2022-23",
  },
  {
    id: 5,
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-away-shirt-2022-23_ss4_p-13307691+u-183syu0k8suiiicaf1xe+v-406b7bb2a4174ef8981b639f3d729d17.jpg?_hv=2&w=340",
    price: "340 USD",
    information: "Manchester United Away Shirt 2022-23",
  },
  {
    id: 6,
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-home-babykit-2022-23_ss4_p-13307754+u-10yo8rxy32ozmqam1mqe+v-fcf69e014f2e4029bb8efcdd010c9120.jpg?_hv=2&w=340",
    price: "200 USD",
    information: "Manchester United Home Babykit 2022-23",
  },
  {
    id: 7,
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-home-authentic-shirt-2022-23_ss4_p-13307701+u-skyjtpdsdifd85q7gn1a+v-5c38b7aedcfe43e79ad60b12d4e2e980.jpg?_hv=2&w=340",
    price: "520 USD",
    information: "Manchester United Home Authentic Shirt 2022-23",
  },
];

import "../ShopMu/Shop.scss";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Scrolling } from "../Navbar/Scroll";
import { useRef, useState } from "react";
import ListNew from "../ShopMu/ListNew";
import NewClo from "../ShopMu/NewClo";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import ListNews from "./ListNews";
import NewClos from "./NewClos";

function Shop() {
  const Clothes = [
    {
      image:
        "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-colorblock-3-stripes-tracksuit-legend-ink/better-scarlet/white-kids_ss4_p-13378078+u-1f8q3vww0pium0b82jvz+v-81ead0eb65d2474081c69fa3b9854e47.jpg?_hv=2&w=340",
      price: "500 USD",
      information:
        "Manchester United adidas Colorblock 3-Stripes Tracksuit - Legend Ink/Better Scarlet/White - Kids",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-future-icons-3-stripe-full-zip-hoodie-black-mens_ss4_p-13338708+u-xtev92ut504kj3eowu51+v-9d9da1311cd14107997a5e1504d660f0.jpg?_hv=2&w=340",
      price: "600 USD",
      information:
        "Manchester United adidas Future Icons 3 Stripe Full Zip Hoodie - Black - Mens",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-long-padded-down-jacket-black-boys_ss4_p-13341462+u-xsruxtwerzlzbchrt2p6+v-51abc4ecb7ce4048817fe1e4192c72f4.jpg?_hv=2&w=340",
      price: "700 USD",
      information:
        "Manchester United adidas Long Padded Down Jacket - Black - Boys",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-essentials-colorblock-t-shirt-legend-ink/scarlet/white-mens_ss4_p-13338713+u-1autt4zy3s7rc7lok3ae+v-6c41c14a085e49be84d1d98d795a0214.jpg?_hv=2&w=340",
      price: "800 USD",
      information:
        "Manchester United adidas Essentials Colorblock T-Shirt - Legend Ink/Scarlet/White - Mens",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-varilite-hooded-down-jacket-legend-ink-mens_ss4_p-13338709+u-kh7i2ksl86xkp54pzr38+v-c880abb933044229b0f5c88bf14b5ea8.jpg?_hv=2&w=340",
      price: "850 USD",
      information:
        "Manchester United adidas Varilite Hooded Down Jacket - Legend Ink - Mens",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-future-icons-3-stripe-t-shirt-black-mens_ss4_p-13338678+u-zaaxsohbatyyo1eujbtr+v-1f083381b3c943fcbfd2dd2f56e48f2e.jpg?_hv=2&w=340",
      price: "900 USD",
      information:
        "Manchester United adidas Future Icons 3 Stripe T-Shirt - Black - Mens",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-all-szn-french-terry-hoodie-pink-strata-mens_ss4_p-13378035+u-ipg3cknu1mh28w35az2m+v-88c8bd1a6e7540698af33786d2660cf9.jpg?_hv=2&w=340",
      price: "600 USD",
      information:
        "Manchester United adidas ALL SZN French Terry Hoodie - Pink Strata - Mens",
    },
    {
      image:
        "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-essentials-warm-up-3-stripe-track-top-legend-ink/white-mens_ss4_p-13338691+u-lua385p1fwgt94br8kwn+v-e6f84c6d8e1241fabe0d5e6e4acff5f9.jpg?_hv=2&w=340",
      price: "500 USD",
      information:
        "Manchester United adidas Essentials Warm-Up 3 Stripe Track Top - Legend Ink/White - Mens",
    },
  ];
  const Sale = [
    "https://store.manutd.com/content/ws/all/26d92e46-5e68-4b18-9ff2-e589a4003780__400X612.png",
    "https://store.manutd.com/content/ws/all/93046962-155b-4ce3-856f-86596fa2a4db__400X612.png",
    "https://store.manutd.com/content/ws/all/0c6e4672-dd23-47da-97e7-da48ed3a5712__400X612.png",
    "https://store.manutd.com/content/ws/all/e8e2bc92-3070-4293-8afc-122760cc39df__400X612.png",
  ];
  const logos = [
    "https://store.manutd.com/content/ws/146296/e_spot_brands_adidas.jpg",
    "https://store.manutd.com/content/ws/251759/e_spot_brands_maui_jim.jpg",
    "https://store.manutd.com/content/ws/all/78ec96f9-a2b9-4a54-8554-43c26984eff1__267X267.png",
    "https://store.manutd.com/content/ws/213271/e_spot_brands_paul_smith.jpg",
    "https://store.manutd.com/content/ws/213271/e_spot_brands_remington.jpg",
  ];
  const { index } = useParams();
  const sliderContentes = useRef();
  const sliderShowes = useRef();
  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderContentes.current.scrollWidth - sliderContentes.current.clientWidth;
    if (sliderContentes.current.scrollLeft < maxScrollLeft) {
      Scrolling(
        sliderContentes.current,
        250,
        sliderShowes.current.clientWidth,
        sliderContentes.current.scrollLeft
      );
    }
  };
  const handleScrollLeft = () => {
    if (sliderContentes.current.scrollLeft > 0) {
      Scrolling(
        sliderContentes.current,
        250,
        -sliderShowes.current.clientWidth,
        sliderContentes.current.scrollLeft
      );
    }
  };
  return (
    <>
      <div className="shop-container">
        {/* <Loading /> */}
        <div className="background-shop">
          <img src="https://store.manutd.com/content/ws/all/d1788208-4c63-463d-9558-810d6ba9dcb5__3200X1224.jpg" />
        </div>
        <div className="clothes-shop">
          <h1>Adidas Lifestyle</h1>
          <div className="list-clothes" ref={sliderContentes}>
            {Clothes.map((clothers, index) => {
              return (
                <div className="list-infor" ref={sliderShowes}>
                  <Link to={`/searchmu/${index}`}>
                    <img src={clothers.image} />
                  </Link>
                  <p className="price-list">{clothers.price}</p>
                  <p className="text-list">{clothers.information}</p>
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
        <div className="background-shop">
          <img src="https://store.manutd.com/content/ws/all/bc0a984e-e946-4f77-92df-e224b3dc75bd__3200X1224.jpg" />
          <img src="https://store.manutd.com/content/ws/all/16b0e3d8-1576-4e0b-9205-abad804f1b2f__1600X177.png" />
        </div>
        <div className="background-sale">
          {Sale.map((sale) => {
            return (
              <>
                <img src={sale} />
              </>
            );
          })}
        </div>
        <div className="background-shop">
          <img src="https://store.manutd.com/content/ws/all/5d007950-b2ba-47f2-b982-1a4b723f5db0__1600X312.png" />
        </div>
        <ListNews />
        <div className="background-shop">
          <img src="https://store.manutd.com/content/ws/all/f7322a8c-1d35-47bb-a1fb-7309bd1d4223__1600X312.png" />
        </div>
        <NewClos />
        <div className="logo-clo">
          <div>
            {logos.map((logo) => {
              return <img src={logo} />;
            })}
          </div>
        </div>
        <div className="background-text">
          <div>
            The Official Manchester United Online Store is your premier source
            for authentic Manchester United kits and merchandise to support your
            club. Suit up like your favourite Man United heroes when you watch
            the next match with newly released 2022-23 Manchester United kits in
            sizes for men, women and youth, available in the widest assortment
            here at the Manchester United store. No supporter’s wardrobe is
            complete without the Manchester United away kit and third kit, and
            true Red Devils can take it up a notch with the Man United training
            range. Show your allegiance to popular Man United heroes like Marcus
            Rashford, Bruno Fernandes and all the rest. Man United football
            shirts are just the start of our range of merchandise – you’re also
            sure to find the best Manchester United gifts and collectibles
            within our assortment. No matter what you need for the season, the
            Manchester United Store is the place to find it. The Manchester
            United Online Store is committed to bringing you the easiest, most
            stress-free shopping experience online. Contact our dedicated
            customer service team for any concerns, or find answers to
            frequently asked questions in the customer service navigation tool.
          </div>
        </div>
      </div>
    </>
  );
}
export default Shop;
export const Clothes = [
  {
    id: 0,
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-colorblock-3-stripes-tracksuit-legend-ink/better-scarlet/white-kids_ss4_p-13378078+u-1f8q3vww0pium0b82jvz+v-81ead0eb65d2474081c69fa3b9854e47.jpg?_hv=2&w=340",
    price: "500 USD",
    information:
      "Manchester United adidas Colorblock 3-Stripes Tracksuit - Legend Ink/Better Scarlet/White - Kids",
  },
  {
    id: 1,
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-future-icons-3-stripe-full-zip-hoodie-black-mens_ss4_p-13338708+u-xtev92ut504kj3eowu51+v-9d9da1311cd14107997a5e1504d660f0.jpg?_hv=2&w=340",
    price: "600 USD",
    information:
      "Manchester United adidas Future Icons 3 Stripe Full Zip Hoodie - Black - Mens",
  },
  {
    id: 2,
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-long-padded-down-jacket-black-boys_ss4_p-13341462+u-xsruxtwerzlzbchrt2p6+v-51abc4ecb7ce4048817fe1e4192c72f4.jpg?_hv=2&w=340",
    price: "700 USD",
    information:
      "Manchester United adidas Long Padded Down Jacket - Black - Boys",
  },
  {
    id: 3,
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-essentials-colorblock-t-shirt-legend-ink/scarlet/white-mens_ss4_p-13338713+u-1autt4zy3s7rc7lok3ae+v-6c41c14a085e49be84d1d98d795a0214.jpg?_hv=2&w=340",
    price: "800 USD",
    information:
      "Manchester United adidas Essentials Colorblock T-Shirt - Legend Ink/Scarlet/White - Mens",
  },
  {
    id: 4,
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-varilite-hooded-down-jacket-legend-ink-mens_ss4_p-13338709+u-kh7i2ksl86xkp54pzr38+v-c880abb933044229b0f5c88bf14b5ea8.jpg?_hv=2&w=340",
    price: "850 USD",
    information:
      "Manchester United adidas Varilite Hooded Down Jacket - Legend Ink - Mens",
  },
  {
    id: 5,
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-future-icons-3-stripe-t-shirt-black-mens_ss4_p-13338678+u-zaaxsohbatyyo1eujbtr+v-1f083381b3c943fcbfd2dd2f56e48f2e.jpg?_hv=2&w=340",
    price: "900 USD",
    information:
      "Manchester United adidas Future Icons 3 Stripe T-Shirt - Black - Mens",
  },
  {
    id: 6,
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-all-szn-french-terry-hoodie-pink-strata-mens_ss4_p-13378035+u-ipg3cknu1mh28w35az2m+v-88c8bd1a6e7540698af33786d2660cf9.jpg?_hv=2&w=340",
    price: "600 USD",
    information:
      "Manchester United adidas ALL SZN French Terry Hoodie - Pink Strata - Mens",
  },
  {
    id: 7,
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-essentials-warm-up-3-stripe-track-top-legend-ink/white-mens_ss4_p-13338691+u-lua385p1fwgt94br8kwn+v-e6f84c6d8e1241fabe0d5e6e4acff5f9.jpg?_hv=2&w=340",
    price: "500 USD",
    information:
      "Manchester United adidas Essentials Warm-Up 3 Stripe Track Top - Legend Ink/White - Mens",
  },
];

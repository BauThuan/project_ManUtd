import "./Body.scss";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useRef } from "react";
import { Scrolling } from "./Scroll";

const imageList = [
  "  https://wallpapercave.com/wp/wp3293644.jpg",
  "  https://wallpapercave.com/dwp1x/wp3293632.jpg",
  "  https://wallpapercave.com/wp/wp2884230.jpg",
  "  https://wallpapercave.com/dwp1x/wp3293759.jpg",
  "  https://wallpapercave.com/wp/wp3293769.jpg",
  "  https://wallpapercave.com/wp/wp3293772.jpg",
];

function Body() {
  const sliderContent = useRef();
  const sliderShow = useRef();

  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderContent.current.scrollWidth - sliderContent.current.clientWidth;
    console.log(maxScrollLeft);
    console.log(sliderContent.current.scrollWidth);
    console.log(sliderContent.current.clientWidth);
    if (sliderContent.current.scrollLeft < maxScrollLeft) {
      Scrolling(
        sliderContent.current,
        250,
        sliderShow.current.clientWidth,
        sliderContent.current.scrollLeft
      );
    }
  };
  const handleScrollLeft = () => {
    if (sliderContent.current.scrollLeft > 0) {
      Scrolling(
        sliderContent.current,
        250,
        -sliderShow.current.clientWidth,
        sliderContent.current.scrollLeft
      );
    }
  };
  return (
    <>
      <div className="slider-container">
        <div className="slider-content" ref={sliderContent}>
          {imageList.map((image, index) => {
            return (
              <div key={index} className="slider-show" ref={sliderShow}>
                <img src={image} className="image-slider" />
              </div>
            );
          })}
        </div>
        <div className="btn-left" onClick={handleScrollLeft}>
          <BiChevronLeft className="chevronLeft" />
        </div>
        <div className="btn-right" onClick={handleScrollRight}>
          <BiChevronRight className="chevronRight" />
        </div>
      </div>
    </>
  );
}
export default Body;

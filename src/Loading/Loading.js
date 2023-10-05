import "./Loading.scss";
function Loading() {
  const quydo = [
    "https://thekingincatsle.github.io/Manchester-United-website/pic/logo.png",
  ];
  return (
    <>
      <div className="loading-container">
        <div className="loading-content"></div>
        <div className="loading-down">
          <img src="https://thekingincatsle.github.io/Manchester-United-website/pic/logo.png" />
        </div>
      </div>
    </>
  );
}
export default Loading;

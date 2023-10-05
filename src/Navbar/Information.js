import "./Information.scss";
import React from "react";
function Information() {
  const players = [
    {
      image:
        "https://assets.manutd.com/AssetPicker/images/0/0/15/66/1000164/Treated_Player_Profile_Thumbnail_Henderson1626356504141.jpg",
      name: "DEAN HENDERSON",
      age: "26",
    },
  ];

  const playersInfor = [
    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/players/bissaka.jpg",
      name: "A.WAN BISSAKA",
      age: "29",
    },
    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/players/lindelof.jpg",
      name: "VICTOR LINDERLOF",
      age: "28",
    },
    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/players/maguire.jpg",
      name: "HARRY MAGUIRE",
      age: "29",
    },
    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/players/shaw.jpg",
      name: "LUKE SHAW",
      age: "25",
    },
  ];
  const Cm = [
    {
      image:
        "https://vtv1.mediacdn.vn/2023/2/1/photo-1-16752152084711771284524.jpg",
      name: "MARCEL SABITZER",
      age: "29",
    },

    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/players/mctom.jpg",
      name: "SCOTT MCTOMINAY",
      age: "29",
    },
    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/players/bruno.jpg",
      name: "BRUNO FERNANDES",
      age: "29",
    },
    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/players/paul.jpg",
      name: "PAUL POGBA",
      age: "29",
    },
  ];
  const St = [
    {
      image:
        "https://assets.manutd.com/AssetPicker/images/0/0/15/78/1003014/Player-Profile-Thumbnail-Sancho1627370980650.jpg",
      name: "JADON SANCHO",
      age: "29",
    },
    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/players/cavani.jpg",
      name: "EDISON CAVANI",
      age: "29",
    },
    {
      image:
        "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/TBUVFQR7NJIEJKWVPP5GQDWVZY.jpg",
      name: "MATHEUS ANTONY",
      age: "29",
    },
    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/players/rash4.jpg",
      name: "MARCUS RASHFORH",
      age: "29",
    },
  ];
  return (
    <>
      <div className="information-container">
        <div className="information-content">
          <div className="information-title">
            <h1>FIRST TEAM</h1>
          </div>
          <div className="information-football-up">
            <div className="football-goal">GOAL KEEPPERS</div>
            <div className="goal-keepers">
              <div>
                {players.map((play, index) => {
                  return (
                    <div key={index}>
                      <img src={play.image} className="image-play" />
                      <p className="play-age">{play.age}</p>
                      <div className="line"></div>
                      <p className="play-Name">{play.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="information-football-down">
            <div className="player-cb">DEFEN DERS</div>
            <div className="center-back">
              <div>
                {playersInfor.map((cb, index) => {
                  return (
                    <div key={index}>
                      <img src={cb.image} className="cb-player-image" alt="" />
                      <p className="age-cb">{cb.age}</p>
                      <div className="line"></div>
                      <p className="name-cb">{cb.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="information-football-down">
            <div className="player-cb">MIDFIEL DERS</div>
            <div className="center-back">
              <div>
                {Cm.map((cm, index) => {
                  return (
                    <div key={index}>
                      <img src={cm.image} className="cb-player-image" alt="" />
                      <p className="age-cb">{cm.age}</p>
                      <div className="line"></div>
                      <p className="name-cb">{cm.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="information-football-down">
            <div className="player-cb">FORWARDS</div>
            <div className="center-back">
              <div>
                {St.map((st, index) => {
                  return (
                    <div key={index}>
                      <img src={st.image} className="cb-player-image" alt="" />
                      <p className="age-cb">{st.age}</p>
                      <div className="line"></div>
                      <p className="name-cb">{st.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Information;

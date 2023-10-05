import "./Olesosa.scss";

function Olesosa() {
  const Information = [
    { name: "POSITION", type: "Manager" },
    { name: "COUNTRY", type: " Scotland" },
    { name: "DATE OF BIRTH", type: "December 31, 1941" },
    { name: "JOINED", type: "November 6, 1986" },
    { name: "FIRST MATCH", type: " November 8, 1986" },
  ];
  return (
    <>
      <div className="manage-container">
        <div className="manage-text">
          <h1>MANAGER</h1>
        </div>
        <div className="manage-information">
          <div className="manage-content">
            <div className="manage-image">
              <p>MANGER</p>
              <p>
                SIR ALEX
                <br />
                FERGUSON
              </p>
              <p>
                <i>
                  " I always felt that
                  <br />
                  our triumphs were an
                  <br /> expression of the
                  <br /> consistent application <br />
                  of discipline."
                </i>
              </p>
            </div>
            <div className="manage-image">
              <img src="https://www.footyrenders.com/render/sir-alex-ferguson.png" />
            </div>
            <div className="manage-image">
              <p>
                MATCHES:
                <br />
                1500
              </p>
              <p>
                WINS:
                <br />
                895
              </p>
              <p>
                CUP:
                <br />
                38
              </p>
            </div>
          </div>
        </div>
        <div className="manage-biography">
          <div className="biography-text">
            <div className="biography-type">
              <div className="text-up">BIOGRAPHY</div>
              <div className="text-down">
                <i>
                  Ferguson was appointed manager at Old Trafford on 6 November
                  1986. He was initially worried that many of the players, such
                  as Norman Whiteside, Paul McGrath and Bryan Robson were
                  drinking too much and was "depressed" by their level of
                  fitness, but he managed to increase the players' discipline
                  and United climbed up the table to finish the season in 11th
                  place, having been 21st (second from bottom) when he took
                  over.
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="information-text">
          <div className="information-content">
            <div className="information-position">
              {Information.map((infor, index) => {
                return (
                  <div key={index}>
                    <h2 className="h2-manage">{infor.name}</h2>
                    <p className="p-manage">{infor.type}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Olesosa;

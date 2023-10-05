import "./United.scss";
import { useState } from "react";
import { Modal } from "antd";
function United() {
  const MyLengend = [
    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/btnImage/ferguson.jpg",
      name: "SIR ALEX FERGUSON",
      case: "Ferguson trước đây quản lý East Stirlingshire, St Mirren, một thời gian trước khi thành công với câu lạc bộ Aberdeen. Ông được giao làm huấn luyện viên tạm quyền của đội tuyển quốc gia Scotland - trong một thời gian (do cái chết của Jock Stein). Tháng 11 năm 1986, ông được bổ nhiệm làm huấn luyện viên trưởng của Manchester United.",
    },
    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/btnImage/catona.jpg",
      name: "ERIC CANTONA",
      case: "Là một tiền đạo cần mẫn, sở hữu thể chất mạnh mẽ, kết hợp giữa kĩ năng và sức sáng tạo với sức mạnh và khả năng săn bàn, Cantona thường được xem là giữ vai trò chủ chốt trong sự hồi sinh của Manchester United để trở thành một thế lực bóng đá ở thập niên 1990 và giữ vị thế huyền thoại biểu tượng của câu lạc bộ.",
    },
    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/btnImage/giggs.jpg",
      name: "RYAN GIGGS",
      case: "Giggs là cầu thủ sở hữu nhiều huy chương nhất trong lịch sử bóng đá với 1 câu lạc bộ.[4] Ngày 16 tháng 5 năm 2009, ông trở thành cầu thủ bóng đá đầu tiên có được 11 danh hiệu cùng câu lạc bộ. Giggs là cầu thủ đầu tiên trong lịch sử giành giải thưởng Cầu thủ trẻ xuất sắc nhất năm của PFA trong hai năm liên tiếp (1992 và 1993). Ông là cầu thủ duy nhất đã chơi trong 22 mùa giải và ghi bàn trong cả 21 mùa giải đầu tiên của Premier League",
    },
    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/btnImage/charlton.jpg",
      name: "BOBBY CHARLTON",
      case: "cựu cầu thủ bóng đá chuyên nghiệp của Anh, người đã giành chức vô địch World Cup và danh hiệu Quả Bóng Vàng năm 1966. Ông đã cống hiến phần lớn sự nghiệp chơi bóng cho câu lạc bộ Manchester United, nơi mà ông đã thành danh với những khả năng tấn công xuất sắc của một tiền vệ cùng những cú sút xa.",
    },
    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/btnImage/scholes.jpg",
      name: "PAUL SCHOLES",
      case: "cựu cầu thủ bóng đá Anh. Anh được coi là một trong những cầu thủ xuất sắc nhất trong lịch sử câu lạc bộ Manchester United. Anh đã dành toàn bộ sự nghiệp thi đấu chuyên nghiệp của mình tại đây. Anh hiện là đồng chủ sở hữu của Salford City. Anh là cầu thủ bóng đá người Anh giành nhiều danh hiệu nhất mọi thời đại và là một trong những cầu thủ bóng đá thành công nhất trong lịch sử với 27 danh hiệu lớn, trong đó có 11 chức vô địch Ngoại hạng Anh và 2 Champions League.",
    },
  ];
  const MyUnited = [
    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/btnImage/rooney.jpg",
      name: "WAYNE ROONEY",
      case: "cựu cầu thủ và hiện là huấn luyện viên bóng đá cho câu lạc bộ D.C. United. Anh thường chơi ở vị trí tiền đạo, đôi khi anh cũng được sử dụng ở vị trí tiền vệ. Được đánh giá là một trong những cầu thủ xuất sắc nhất thế hệ của anh, Rooney là cầu thủ ghi nhiều bàn thắng nhất cho đội tuyển bóng đá quốc gia Anh và Manchester United.[5]",
    },
    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/btnImage/beckham.jpg",
      name: "DAVID BECKHAM",
      case: "t cựu cầu thủ bóng đá chuyên nghiệp người Anh từng thi đấu cho các câu lạc bộ Manchester United, Preston North End, Real Madrid, A.C. Milan, Los Angeles Galaxy, Paris Saint-Germain và đội tuyển quốc gia Anh ở vị trí tiền vệ. Anh đã có được trận đấu thứ 100 với đội tuyển Anh trong trận đấu với Pháp vào tháng 3 năm 2008. Anh là một trong những cầu thủ sút phạt xuất sắc nhất trong lịch sử bóng đá",
    },
    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/btnImage/ole.jpg",
      name: "O.GUNNAR SOLSKJAER",
      case: "Solskjær đã ra sân 366 lần trong màu áo Manchester United và ghi được 126 bàn thắng. Solskjær đã xuất hiện từ băng ghế dự bị trong trận chung kết UEFA Champions League 1999, khi ông ghi được một bàn thắng vào phút bù giờ cuối cùng trước Bayern München, giúp United giành cú ăn ba lịch sử. Khi còn thi đấu tại Manchester United, Ole được mệnh danh là một Siêu dự bị bởi ông đã ghi nhiều bàn thắng quan trọng khi vào sân từ băng ghế dự bị",
    },

    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/btnImage/ronaldo.jpg",
      name: "CRISTIANO RONALDO",
      case: " đội trưởng của câu lạc bộ Saudi Pro League Al Nassr và Đội tuyển bóng đá quốc gia Bồ Đào Nha. Được coi là một trong những cầu thủ vĩ đại nhất mọi thời đại,[8] Ronaldo là chủ nhân của 5 Quả bóng vàng châu Âu[ghi chú 3] và 4 Chiếc giày vàng châu Âu. Anh đã giành được 32 danh hiệu trong sự nghiệp của mình, bao gồm 7 chức vô địch quốc gia, 5 UEFA Champions League, 1 UEFA European Championship và 1 UEFA Nations League",
    },
    {
      image:
        "https://thekingincatsle.github.io/Manchester-United-website/pic/btnImage/ruud.jpg",
      name: "R.VAN NISTELROOY",
      case: "ựu cầu thủ bóng đá người Hà Lan chơi ở vị trí tiền đạo. Anh ghi được 56 bàn tại giải đấu Champions League. Anh cũng ba lần là vua phá lưới Champions League, Van Nistelrooy là cầu thủ đoạt giải vua phá lưới ở ba giải bóng đá quốc gia khác nhau ở châu Âu là Hà Lan, Anh và Tây Ban Nha. ",
    },
  ];
  const History = [
    {
      title: "Early years (1878–1945)",
      information:
        "Manchester United was founded in 1878 as Newton Heath LYR Football Club by the Carriage and Wagon department of the Lancashire and Yorkshire Railway depot. They initially played against other railway departments and companies before joining regional and national leagues. The club faced financial difficulties and a potential bankruptcy until a group of local businessmen, including John Henry Davies, invested and changed the club's name to Manchester United in 1902. Under the management of Ernest Mangnall, the team achieved success, winning the First Division in 1908 and their first FA Cup title. However, they faced ups and downs, experiencing relegation and promotion over the years. Financial stability was secured with the support of James W. Gibson in 1931. The club persevered through the challenges of World War II and continued to compete in the First Division.",
    },
    {
      title: "Busby years (1945–1969)",
      information:
        "Manchester United, initially known as Newton Heath LYR Football Club, was formed in 1878. After facing financial difficulties, the club was rebranded as Manchester United in 1902. Under the management of Matt Busby, they experienced success in the 1950s, winning league titles and becoming the first English team to compete in the European Cup. However, tragedy struck in 1958 with the Munich air disaster, resulting in the loss of several players' lives. Busby rebuilt the team in the 1960s, culminating in their first European Cup triumph in 1968. The following years saw managerial changes and mixed performances for the club.",
    },
    {
      title: "Ferguson years (1986–2013)",
      information:
        "After taking over as manager in 1986, Alex Ferguson led Manchester United to success in the late 1980s and early 1990s. They won the FA Cup in 1990 and the UEFA Cup Winners' Cup in 1991. In 1993, they secured their first league title in 26 years and went on to win the league and FA Cup double in 1994. The team continued their success by winning the league title again in 1996 and achieving the (Double) once more in 1996-1997. In the historic 1998-1999 season, Manchester United became the first English team to win the Premier League, FA Cup, and UEFA Champions League in the same season, completing the remarkable treble. They added more silverware by winning the Intercontinental Cup in 1999. The club maintained their dominance, winning three consecutive league titles from 1999 to 2001 and securing the league title in 2003. They also claimed the FA Cup in 2004 and went on to win the league title in 2007 and 2008, along with the UEFA Champions League in 2008. The club won their 19th league title in 2011 and their 20th in 2013. Throughout this period, Manchester United had a number of talented players, including Ryan Giggs and Cristiano Ronaldo, who made significant contributions to their success.",
    },
    {
      title: "2013–present",
      information:
        "In 2013, Sir Alex Ferguson retired as Manchester United's manager, ending his highly successful tenure. David Moyes was appointed as his successor but was sacked after a disappointing season. Louis van Gaal took over in 2014, winning the FA Cup but failing to achieve consistent success. José Mourinho replaced Van Gaal in 2016, winning the Community Shield, EFL Cup, and UEFA Europa League in his first season. Under Mourinho, Wayne Rooney became the club's all-time top scorer. Mourinho was sacked in 2018, and Ole Gunnar Solskjær became caretaker manager before being appointed permanently in 2019. In 2021, Manchester United faced backlash for their involvement in the European Super League, leading to protests and the resignation of key personnel. Despite a 9-0 win over Southampton, the team failed to win any trophies in recent seasons. Solskjær left in 2021, and Ralf Rangnick took over as interim manager. Erik ten Hag was appointed as manager in 2022, winning the EFL Cup but also suffering a heavy defeat against Liverpool.",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [LengendIndex, setLengendIndex] = useState(null);
  const handleLengendClick = (index) => {
    setUnitedIndex(null);
    setLengendIndex(index);
    setIsModalOpen(true);
  };
  const [UnitedIndex, setUnitedIndex] = useState(null);

  const handleUnitedClick = (index) => {
    setLengendIndex(null);
    setUnitedIndex(index);
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="my-container">
        <div className="my-content">
          <div className="my-lengend">LEGEND</div>
          <div className="lengend-player">
            {MyLengend.map((my, index) => {
              return (
                <div key={index}>
                  <img
                    onClick={() => {
                      handleLengendClick(index);
                      setIsModalOpen(true);
                    }}
                    src={my.image}
                  />
                  <div className="my-line"></div>
                  <p>{my.name}</p>
                </div>
              );
            })}
          </div>
          <div className="lengend-player">
            {MyUnited.map((my, index) => {
              return (
                <div key={index}>
                  <img
                    src={my.image}
                    onClick={() => {
                      handleUnitedClick(index);
                      setIsModalOpen(true);
                    }}
                  />
                  <div className="my-line"></div>
                  <p>{my.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Modal
        className="infor-lengend"
        // key:{value}
        title="STORY"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {(LengendIndex !== null && <p>{MyLengend[LengendIndex].case}</p>) ||
          (UnitedIndex !== null && <p>{MyUnited[UnitedIndex].case}</p>)}
      </Modal>
      <div className="club-information">
        <div className="club-content">
          {History.map((infor) => {
            return (
              <div>
                <h2>{infor.title}</h2>
                <p>{infor.information}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default United;

// có một vấn đề như sau:
// - khi click vào image của MyLengend thì nó sẽ gọi  vào function  handleLengendClick => nó sẽ thực thi logic trong hàm và reder ra giao diện "case" thì khi đó setLengendIndex có giá trị khác null
// - đến khi ta tiếp tục click vào image của MyUnited thì nó sẽ gọi hàm và thực thi logic tuy nhiên vấn đề xuất hiện ở đây. ở thẻ Modal nó sẽ bắt đầu so sánh điều kiện, hiển nhiên UnitedIndex bây giò khác null thỏa mãn điều kiện nhưng mà LengendIndex cũng khác null nên nó sẽ tiếp tục render là LengendIndex mà không phải là United( code thực thi trên xuống dưới trái sang phải)
// - Biện pháp: khi gọi hàm HandleUnitedClick chúng ta set luôn cho SetLengendIndex trở lại giá trị null măcj định là được
// - Đây là lỗi cực kỳ nghiêm trọng

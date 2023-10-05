import React, { useState, useEffect } from "react";
import "./Profile.scss";
import Sheader from "./Sheader";
import { BsFillCameraFill } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
import { toast } from "react-toastify";

function Profile() {
  const [show, setShow] = useState(true);
  const [shows, setShows] = useState(false);
  const Infor = [];
  const Option = [
    {
      option: "Title (optional)",
    },
    {
      option: "Mr",
    },
    {
      option: "Mrs",
    },
    {
      option: "Miss",
    },
    {
      option: "Ms",
    },
    {
      option: "Dr",
    },
    {
      option: "Prof",
    },
    {
      option: "Rev",
    },
    {
      option: "Sir",
    },
  ];
  const Date = [
    "date",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];
  const month = ["month", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const year = [
    "year",
    1930,
    1931,
    1932,
    1933,
    1934,
    1935,
    1936,
    1937,
    1938,
    1939,
    1940,
    1941,
    1942,
    1943,
    1944,
    1945,
    1946,
    1947,
    1948,
    1949,
    1950,
    1951,
    1952,
    1953,
    1954,
    1955,
    1956,
    1957,
    1958,
    1959,
    1960,
    1961,
    1962,
    1963,
    1964,
    1965,
    1966,
    1967,
    1968,
    1969,
    1970,
    1971,
    1972,
    1973,
    1974,
    1975,
    1976,
    1977,
    1978,
    1979,
    1980,
    1981,
    1982,
    1983,
    1984,
    1985,
    1986,
    1987,
    1988,
    1989,
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
    2022,
    2023,
    2024,
    2025,
    2026,
    2027,
    2028,
    2029,
    2030,
  ];
  const [image, setImage] = useState(null);
  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview);
    };
  }, [image]);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };
  const [firstName, setFirstName] = useState("");
  const handleFirstName = (e) => {
    const Fname = e.target.value;
    setFirstName(Fname);
  };
  const [surname, setSurname] = useState("");
  const handleSurName = (e) => {
    const Sname = e.target.value;
    setSurname(Sname);
  };
  const [date, setDate] = useState(localStorage.getItem("date") || "");
  const handleDate = (e) => {
    const date = e.target.value;
    setDate(date);
  };
  const [months, setMonths] = useState("");
  const handleMonth = (e) => {
    const monther = e.target.value;
    setMonths(monther);
  };
  const [years, setYears] = useState("");
  const handleYear = (e) => {
    const years = e.target.value;
    setYears(years);
  };
  const [phone, setPhone] = useState("");
  const handlePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };
  const [messFname, setMessFname] = useState(
    localStorage.getItem("firstName") || ""
  );
  const [messPhone, setMessPhone] = useState(
    localStorage.getItem("phone") || ""
  );
  const [messSur, setMessSur] = useState(localStorage.getItem("surname") || "");
  //   hamf suwr lys
  const handleSave = () => {
    const result = {
      FirstName: firstName,
      SurName: surname,
      Date: date,
      Month: months,
      Year: years,
      Phone: phone,
    };
    if (result.FirstName !== "") {
      setMessFname(false);
    } else {
      setMessFname(true);
    }
    if (result.SurName !== "") {
      setMessSur(false);
    } else {
      setMessSur(true);
    }
    if (result.Date !== "") {
    } else {
      toast.error("you are leaving the date blank !");
    }
    if (result.Month !== "") {
    } else {
      toast.error("you are leaving the month blank !");
    }
    if (result.Year !== "") {
    } else {
      toast.error("you are leaving the year blank !");
    }
    if (result.Phone.length == 10) {
      setMessPhone(false);
    } else {
      toast.error("The phone number must be in the form of 10 digits !");
      setMessPhone(true);
    }
    if (
      result.FirstName !== "" &&
      result.SurName !== "" &&
      result.Date !== "" &&
      result.Month !== "" &&
      result.Year !== "" &&
      result.Phone.length == 10
    ) {
      toast.success("Successfully updated !");
    }
    Infor.push(result);
  };
  useEffect(() => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("surname", surname);
    localStorage.setItem("date", date);
    localStorage.setItem("months", months);
    localStorage.setItem("years", years);
    localStorage.setItem("phone", phone);
    setMessFname(false);
    setMessSur(false);
    setMessPhone(false);
  }, [firstName, surname, date, months, years, phone]);

  return (
    <>
      <Sheader />
      <div className="profile-container">
        <div className="profile-content">
          <div className="profile-text">
            <h1>UPDATE PROFILE</h1>
          </div>
          <div className="profile-image">
            <div className="profile-img">
              <div className="load-image">
                {image && (
                  <img src={image.preview} className="" alt="Selected" />
                )}
              </div>
              <BsFillCameraFill className="icons-camera" />
              <input
                className="custom-file-input"
                accept="image"
                type="file"
                placeholder="Open file"
                onChange={handleImageUpload}
              />
            </div>
            <div className="profile-option">
              <select className="profile-select">
                {Option.map((e, index) => (
                  <option className="profile-op" key={index}>
                    {e.option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="profile-name">
            <div className="first-name">
              <p className="first-text">First Name</p>
              <input
                className="first-input"
                placeholder="First Name..."
                type="text"
                defaultValue={messFname}
                onChange={handleFirstName}
              />
              {messFname && <FiAlertTriangle className="icons-1" />}
            </div>
          </div>
          <div className="profile-name">
            <div className="first-name">
              <p className="first-text">Surname</p>
              <input
                className="first-input"
                placeholder="Surname..."
                type="text"
                defaultValue={messSur}
                onChange={handleSurName}
              />
              {messSur && <FiAlertTriangle className="icons-1" />}
            </div>
          </div>
          <div className="profile-date">
            <div className="date-name">
              <p className="date-text">Date of Birth</p>
              <div className="option-num">
                <select onChange={handleDate}>
                  {Date.map((date) => {
                    return <option value={date}>{date}</option>;
                  })}
                </select>
                <select onChange={handleMonth}>
                  {month.map((month) => {
                    return <option>{month}</option>;
                  })}
                </select>
                <select onChange={handleYear}>
                  {year.map((year) => {
                    return <option>{year}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="profile-name">
            <div className="first-name">
              <p className="first-text">Phone</p>
              <input
                className="first-input"
                placeholder="Phone..."
                type="text"
                defaultValue={messPhone}
                onChange={handlePhone}
              />
              {messPhone && <FiAlertTriangle className="icons-1" />}
            </div>
          </div>
          <div className="btn-name">
            <div className="btn-name">
              <button className="btn-input" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyContext = createContext();

function Authenticate({ children }) {
  const [inforUser, setInforUser] = useState({});
  const nameLocalstore = "vanthuan";
  const setHeaderToRequest = (token) => {
    if (token) {
      return (axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`);
    }
    return null;
  };

  const login = async () => {
    if (localStorage[nameLocalstore]) {
      setHeaderToRequest(localStorage[nameLocalstore]);
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth");
      if (res.data.success) {
        setInforUser(res.data.data);
      } else {
        localStorage.removeItem(nameLocalstore);
      }
    } catch (error) {
      localStorage.removeItem(nameLocalstore);
      console.log(error);
    }
  };
  useEffect(() => {
    login();
  }, []);

  const data = {
    inforUser,
  };

  return (
    <>
      <MyContext.Provider value={data}>{children}</MyContext.Provider>
    </>
  );
}

export default Authenticate;

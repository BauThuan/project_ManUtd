import "./App.css";
import Navba from "./Navbar/Navba";
import Manages from "./Manage/Manages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mymu from "./Manchester/Mymu";
import Home from "./Navbar/Home";
import ShopMu from "./ShopMu/ShopMu";
import Loading from "./Loading/Loading";
import Detail from "./ShopMu/Detail";
import ListClo from "./ShopMu/ListClo";
import Newlist from "./ShopMu/Newlist";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Success from "./Success/Success";
import Fsuccess from "./Success/Fsuccess";
import Msuccess from "./Success/Msuccess";
import Shopsu from "./Success/Shopsu";
import SearchMu from "./Success/SearchMu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListClos from "./Success/ListClos";
import Newlists from "./Success/Newlists";
import Information from "./Success/Information";
import Profile from "./Success/Profile";
import Authenticate from "./authenticate/Authenticate";
function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
        <Authenticate>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mu" element={<Mymu />} />
              <Route path="/home" element={<Navba />} />
              <Route path="/manage" element={<Manages />} />
              <Route path="/shop" element={<ShopMu />} />
              <Route path="/loading" element={<Loading />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/list/:id" element={<ListClo />} />
              <Route path="/newlist/:id" element={<Newlist />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/success" element={<Success />} />
              <Route path="/fsuccess" element={<Fsuccess />} />
              <Route path="/msuccess" element={<Msuccess />} />
              <Route path="/shopsu" element={<Shopsu />} />
              <Route path="/searchmu/:id" element={<SearchMu />} />
              <Route path="/listclo/:id" element={<ListClos />} />
              <Route path="/newlists/:id" element={<Newlists />} />
              <Route path="/information" element={<Information />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
        </Authenticate>
    </>
  );
}

export default App;

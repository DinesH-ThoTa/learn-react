import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const status = useOnlineStatus();
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-4">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-2">
          <li className="px-2 hover:bg-pink-200">
            Status : {status ? " Online ✅ " : "Offline 🔴"}
          </li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/groceries">Groceries</Link>
          </li>
          <li className="px-2">
            <Link to="about">Aboutus</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contactus</Link>
          </li>
          <li className="px-2">Cart</li>
          <li className="px-2">
            <button
              className="login-btn"
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

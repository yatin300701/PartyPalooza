import { useEffect, useState } from "react";
import {
  CakeNavBody,
  CakeNavLeft,
  CakeNavRight,
  CakePlace,
  CompanyImg,
} from "../Styles/CakeNav.style";
import CompanyLogo from "../assets/Logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineHelpOutline, MdPersonOutline } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LoginComponent from "./LoginComponent";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [loginToggle, setLoginToggle] = useState(false);
  const [localtion, setLocation] = useState("Other");
  const [user, setUser] = useState("");
  const [reload, setReload] = useState(false);
  useEffect(() => {
    let tuse = localStorage.getItem("user");
    let loc = localStorage.getItem("location");

    if (loc != undefined && loc != null) {
      setLocation(loc);
    }
    if (tuse != undefined && tuse != null) {
      setUser(tuse);
    }
  }, [reload]);

  return (
    <>
      <CakeNavBody>
        <CakeNavLeft>
          <CompanyImg
            src={CompanyLogo}
            onClick={() => navigate("/")}
          ></CompanyImg>
          <CakePlace onClick={() => navigate("#")}>
            {localtion} <IoMdArrowDropdown />
          </CakePlace>
        </CakeNavLeft>
        <CakeNavRight>
          <CakePlace onClick={() => navigate("#")}>
            <MdOutlineHelpOutline /> Help
          </CakePlace>
          <CakePlace
            onClick={() => {
              user == "" ? setLoginToggle(true) : "";
            }}
          >
            {user != "" ? (
              <>
                <MdPersonOutline /> {user}
              </>
            ) : (
              <>
                <MdPersonOutline /> Sign In
              </>
            )}
          </CakePlace>
          <CakePlace onClick={() => navigate("/checkout")}>
            <AiOutlineShoppingCart /> Cart
          </CakePlace>
        </CakeNavRight>
      </CakeNavBody>
      <LoginComponent
        setReload={setReload}
        loginToggle={loginToggle}
        setLoginToggle={setLoginToggle}
      />
    </>
  );
}

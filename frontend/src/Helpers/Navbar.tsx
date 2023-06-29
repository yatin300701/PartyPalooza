import { useEffect, useState } from "react";
import {
  CakeNavBody,
  CakeNavLeft,
  CakeNavRight,
  CakePlace,
  CakePlaceLocation,
  CompanyImg,
  Option,
} from "../Styles/CakeNav.style";
import CompanyLogo from "../assets/Logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineHelpOutline, MdPersonOutline } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LoginComponent from "./LoginComponent";
import { useNavigate } from "react-router-dom";
import SignUpComponent from "./SignUpComponent";
import SignOut from "./SignOut";

export default function Navbar() {
  const navigate = useNavigate();
  const [loginToggle, setLoginToggle] = useState(false);
  const [localtiondefault, setLocation] = useState<any>("OTHER");
  const [user, setUser] = useState<any>();
  const [reload, setReload] = useState(false);
  const [signupToggle, setSignupToggle] = useState(false);
  const [signOut, setSignOut] = useState(false)


  useEffect(() => {
    let use = localStorage.getItem("user");
    if (use == undefined) return;
    let tuse = JSON.parse(use);
    let loc = localStorage.getItem("location");

    console.log("userit", tuse);

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
          <CakePlaceLocation value={localtiondefault} onClick={() => navigate("#")} onChange={(e) => setLocation(e.target.value)}>
            <Option value="OTHER">OTHER</Option>
            <Option value="DELHI">DELHI</Option>
            <Option value="MUMBAI" >MUMBAI</Option>
            <Option value="GURGAON">GURGAON</Option>
            {/* {localtion} <IoMdArrowDropdown /> */}
          </CakePlaceLocation>
        </CakeNavLeft>
        <CakeNavRight>
          <CakePlace onClick={() => navigate("#")}>
            <MdOutlineHelpOutline /> Help
          </CakePlace>
          <CakePlace
            onClick={() => {
              user == undefined ? setLoginToggle(true) : setSignOut(true);
            }}
          >
            {user != null ? (
              <>
                <MdPersonOutline /> {user?.username.split(" ")[0]}
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
      </CakeNavBody >
      <LoginComponent
        setReload={setReload}
        loginToggle={loginToggle}
        setLoginToggle={setLoginToggle}
        setSignupToggle={setSignupToggle}
      />
      <SignUpComponent
        signupToggle={signupToggle}
        setSignupToggle={setSignupToggle}
        setLoginToggle={setLoginToggle}
      />
      <SignOut setReload={setReload}
        loginToggle={signOut}
        setUser={setUser}
        setLoginToggle={setSignOut}
      />
    </>
  );
}

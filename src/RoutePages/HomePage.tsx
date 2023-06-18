import { useEffect, useState } from "react";
import {
  AppDonloadImg,
  AppDonloadImgMid,
  Benefits,
  BenefitsCard,
  BenefitsImg,
  Btn,
  CompanyImg,
  Description,
  Display,
  FindLocationBtn,
  HDisplay,
  Heading,
  LeftDisplay,
  LocationInput,
  LoginBtn,
  Midbody,
  OurServicesCities,
  PDisplay,
  PWhite,
  PartyPImg,
  PhoneImg,
  RightDisplay,
  SearchBar,
  SignInBtn,
  Topbody,
  WhiteH3,
} from "../Styles/Home.style";
import CmpImg from "../assets/Logo.png";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { theme } from "../mui-theme";
import FooterBodyComponent from "../Helpers/FooterBodyComponent";
import LoginComponent from "../Helpers/LoginComponent";
import SignUpComponent from "../Helpers/SignUpComponent";
import SnackbarComponent from "../Helpers/Snackbar";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [loginToggle, setLoginToggle] = useState(false);
  const [signupToggle, setSignupToggle] = useState(false);
  const [location, setLocation] = useState("");
  const [reload, setReload] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();
  // const [location, setLocation] = useState("");

  // const sentences: string[] = [
  //   "Important Event?",
  //   "Someone Leaving?",
  //   "Target Achieved?",
  //   "Upword Growth?",
  // ];

  const myImage = new CloudinaryImage("party2_vmlavp.jpg", {
    cloudName: "dhlgspecl",
  }).resize(fill().width(700).height(467));

  useEffect(() => {
    const fetchImage = async () => {
      try {
        localStorage.clear();
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [reload]);

  const handleFindFood = () => {
    if (
      location === "Delhi" ||
      location === "Mumbai" ||
      location === "Gurgaon"
    ) {
      localStorage.setItem("location", location);
      setMessage("Sucessfully Saved your location");
      setType("success");
      setOpen(true);
      navigate("/cake");
    } else {
      setMessage("Sorry, we are currently in Delhi,Mumbai and Gurgaon only");
      setType("error");
      setOpen(true);
    }
  };

  return (
    <>
      <Topbody>
        <Display>
          <LeftDisplay>
            <Heading>
              <CompanyImg>
                <PartyPImg src={CmpImg} alt="Company Logo"></PartyPImg>
              </CompanyImg>
              <Btn>
                <LoginBtn
                  onClick={() => {
                    setLoginToggle(true);
                  }}
                >
                  Login
                </LoginBtn>
                <SignInBtn
                  variant="contained"
                  onClick={() => {
                    setSignupToggle(true);
                  }}
                >
                  Sign up
                </SignInBtn>
                <LoginComponent
                  setReload={setReload}
                  loginToggle={loginToggle}
                  setLoginToggle={setLoginToggle}
                />
                <SignUpComponent
                  signupToggle={signupToggle}
                  setSignupToggle={setSignupToggle}
                />
              </Btn>
            </Heading>
            <Description>
              <HDisplay>Target achieved?</HDisplay>
              <PDisplay>
                Order Cake from your favourite restorants near you
              </PDisplay>
            </Description>
            <SearchBar>
              <LocationInput
                sx={{
                  "& .MuiInputLabel-root": {
                    color: theme.customPalette.Grey,
                    opacity: 0.5,
                  }, //styles the label
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: theme.customPalette.Orange,
                    },
                  },
                }}
                placeholder={"Enter your delivery location"}
                onChange={(e) => setLocation(e.target.value)}
              ></LocationInput>
              <FindLocationBtn variant="contained" onClick={handleFindFood}>
                {" "}
                Find Food
              </FindLocationBtn>
            </SearchBar>
            <br />
            <OurServicesCities>
              <p>SERVICE AVAILABLE CURRENTLY</p>

              <b>Delhi Mumbai Gurgaon </b>
            </OurServicesCities>
          </LeftDisplay>
          <RightDisplay>
            <AdvancedImage
              style={{ width: "100%", height: "100%" }}
              cldImg={myImage}
            />
          </RightDisplay>
        </Display>
        <Benefits>
          <BenefitsCard>
            <BenefitsImg src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"></BenefitsImg>
            <WhiteH3>No Minimum Order</WhiteH3>
            <PWhite>
              <p style={{ margin: "0px", padding: "0px" }}>
                Order in for yourself or for the group,
              </p>
              <p style={{ margin: "0px", padding: "0px" }}>
                {" "}
                with no restrictions onorder value
              </p>
            </PWhite>
          </BenefitsCard>
          <BenefitsCard>
            <BenefitsImg src="https://res.cloudinary.com/dhlgspecl/image/upload/v1685566178/delivery_nwnbk7.png"></BenefitsImg>
            <WhiteH3>Fastest Delivery</WhiteH3>
            <PWhite>
              <p style={{ margin: "0px", padding: "0px" }}>
                Experience fastest delivery of items,
              </p>
              <p style={{ margin: "0px", padding: "0px" }}>
                {" "}
                with one of best packages
              </p>
            </PWhite>
          </BenefitsCard>
          <BenefitsCard>
            <BenefitsImg src="https://res.cloudinary.com/dhlgspecl/image/upload/v1685566178/stores_bwqrto.png"></BenefitsImg>
            <WhiteH3>On Place On Time</WhiteH3>
            <PWhite>
              <p style={{ margin: "0px", padding: "0px" }}>
                Place your order and we will make sure
              </p>
              <p style={{ margin: "0px", padding: "0px" }}>
                {" "}
                you get your product at right time
              </p>
            </PWhite>
          </BenefitsCard>
        </Benefits>
      </Topbody>
      {/* party at your wish */}
      <Midbody>
        <LeftDisplay>
          <HDisplay>Party Anywhere </HDisplay>
          <HDisplay>at your wish</HDisplay>
          <br />
          <PDisplay>
            Order from your favorite restaurants & track on the go.
          </PDisplay>
          <br />
          <AppDonloadImgMid src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"></AppDonloadImgMid>
          <AppDonloadImgMid src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"></AppDonloadImgMid>
        </LeftDisplay>
        <RightDisplay>
          <PhoneImg src="https://res.cloudinary.com/dhlgspecl/image/upload/v1685568571/cakeWeb_iphone13blue_portrait_mh9lug.png"></PhoneImg>
        </RightDisplay>
      </Midbody>
      <FooterBodyComponent />
      <SnackbarComponent
        open={open}
        setOpen={setOpen}
        message={message}
        type={type}
      />
    </>
  );
}

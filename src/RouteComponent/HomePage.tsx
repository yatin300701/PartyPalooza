import { useEffect } from "react";
import {
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
  OurServicesCities,
  PDisplay,
  PWhite,
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

export default function HomePage() {
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
        console.log("response", myImage);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <>
      <Topbody>
        <Display>
          <LeftDisplay>
            <Heading>
              <CompanyImg>
                <img src={CmpImg} alt="Company Logo" width={350} />
              </CompanyImg>
              <Btn>
                <LoginBtn>Login</LoginBtn>
                <SignInBtn variant="contained">Sign up</SignInBtn>
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
                placeholder={"Enter your delivery location"}
              ></LocationInput>
              <FindLocationBtn variant="contained"> Find Food</FindLocationBtn>
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
      <body></body>
      <footer></footer>
    </>
  );
}

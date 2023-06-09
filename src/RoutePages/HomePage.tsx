import { useEffect, useState } from "react";
import {
  AppDonloadImg,
  Benefits,
  BenefitsCard,
  BenefitsImg,
  Btn,
  CloseButton,
  CompanyImg,
  CreateAccText,
  DWhite,
  Description,
  Display,
  DrawerBottom,
  DrawerBttn,
  DrawerInput,
  DrawerTandC,
  DrawerTop,
  Drawerdiv,
  FindLocationBtn,
  FooterBody,
  FooterBox,
  FooterBoxHeading,
  HDisplay,
  Heading,
  HrDwawer,
  LeftDisplay,
  LocationInput,
  LoginBtn,
  LoginDrawerImg,
  LoginLeft,
  LoginRight,
  LoginSpan,
  LoginText,
  Midbody,
  OptionsInput,
  OurServicesCities,
  PDisplay,
  PWhite,
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
import { Drawer } from "@mui/material";
import { theme } from "../mui-theme";

export default function HomePage() {
  const [loginToggle, setLoginToggle] = useState(false);
  const [signupToggle, setSignupToggle] = useState(false);
  const [reload, setReload] = useState(false);

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
  }, [reload]);

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

                <Drawer
                  anchor={"right"}
                  open={loginToggle}
                  onClose={() => setLoginToggle(false)}
                >
                  <Drawerdiv>
                    <CloseButton onClick={() => setLoginToggle(false)}>
                      x
                    </CloseButton>
                    <DrawerTop>
                      <LoginLeft>
                        <LoginText>Login</LoginText>
                        <CreateAccText>
                          or <LoginSpan>create an account</LoginSpan>
                        </CreateAccText>
                      </LoginLeft>
                      <LoginRight>
                        <LoginDrawerImg src="https://www.allrecipes.com/thmb/beS8LVFvG9oxFe9UgGA3Bn3WG64=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/708879-One-Bowl-Chocolate-Cake-III-Dianne-4x3-0b686cb5d1d647cabefd86545b1bccdf.jpg"></LoginDrawerImg>
                      </LoginRight>
                    </DrawerTop>
                    <HrDwawer></HrDwawer>
                    <DrawerBottom>
                      <DrawerInput
                        label="Phone Number"
                        type="number"
                        sx={{
                          "& .MuiInputLabel-root": {
                            color: theme.customPalette.Grey,
                            opacity: 0.5,
                          }, //styles the label
                          "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                              borderColor: theme.customPalette.Grey,
                              border: "1px solid rgb(83, 86, 101,0.5)",
                            },
                          },
                        }}
                        InputProps={{
                          style: {
                            borderRadius: "0px",
                          },
                        }}
                      ></DrawerInput>
                      <DrawerBttn>Login</DrawerBttn>
                      <DrawerTandC>
                        By clicking on Login, I accept the
                        <b>Terms & Conditions & Privacy Policy</b>
                      </DrawerTandC>
                    </DrawerBottom>
                  </Drawerdiv>
                </Drawer>

                <Drawer
                  anchor={"right"}
                  open={signupToggle}
                  onClose={() => setSignupToggle(false)}
                >
                  <Drawerdiv>
                    <CloseButton onClick={() => setSignupToggle(false)}>
                      x
                    </CloseButton>
                    <DrawerTop>
                      <LoginLeft>
                        <LoginText>Sign up</LoginText>
                        <CreateAccText>
                          or <LoginSpan>login to your account</LoginSpan>
                        </CreateAccText>
                      </LoginLeft>
                      <LoginRight>
                        <LoginDrawerImg src="https://stylesweet.com/wp-content/uploads/2022/06/ChocolateCakeForTwo_Featured.jpg"></LoginDrawerImg>
                      </LoginRight>
                    </DrawerTop>
                    <HrDwawer></HrDwawer>
                    <DrawerBottom>
                      <DrawerInput
                        label="Phone Number"
                        type="number"
                        sx={{
                          "& .MuiInputLabel-root": {
                            color: theme.customPalette.Grey,
                            opacity: 0.5,
                          }, //styles the label
                          "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                              borderColor: theme.customPalette.Grey,
                              border: "1px solid rgb(83, 86, 101,0.5)",
                            },
                          },
                        }}
                        InputProps={{
                          style: {
                            borderRadius: "0px",
                          },
                        }}
                      ></DrawerInput>
                      <DrawerInput
                        label="Name"
                        sx={{
                          "& .MuiInputLabel-root": {
                            color: theme.customPalette.Grey,
                            opacity: 0.5,
                          }, //styles the label
                          "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                              borderColor: theme.customPalette.Grey,
                              border: "1px solid rgb(83, 86, 101,0.5)",
                            },
                          },
                        }}
                        InputProps={{
                          style: {
                            borderRadius: "0px",
                          },
                        }}
                      ></DrawerInput>
                      <DrawerInput
                        label="Email"
                        sx={{
                          "& .MuiInputLabel-root": {
                            color: theme.customPalette.Grey,
                            opacity: 0.5,
                          }, //styles the label
                          "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                              borderColor: theme.customPalette.Grey,
                              border: "1px solid rgb(83, 86, 101,0.5)",
                            },
                          },
                        }}
                        InputProps={{
                          style: {
                            borderRadius: "0px",
                          },
                        }}
                      ></DrawerInput>
                      <DrawerBttn>Login</DrawerBttn>
                      <DrawerTandC>
                        By clicking on Login, I accept the
                        <b>Terms & Conditions & Privacy Policy</b>
                      </DrawerTandC>
                    </DrawerBottom>
                  </Drawerdiv>
                </Drawer>
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
              ></LocationInput>
              <FindLocationBtn variant="contained"> Find Food</FindLocationBtn>
            </SearchBar>
            {/* <OptionsInput
              disabled
              defaultValue="Hello"  
              variant="filled"
              sx={{
                "& .MuiInputBase-root": {
                  width: "640px",
                  backgroundColor: "white",
                },
              }}
            ></OptionsInput> */}
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
          <AppDonloadImg src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"></AppDonloadImg>
          <AppDonloadImg src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"></AppDonloadImg>
        </LeftDisplay>
        <RightDisplay>
          <PhoneImg src="https://res.cloudinary.com/dhlgspecl/image/upload/v1685568571/cakeWeb_iphone13blue_portrait_mh9lug.png"></PhoneImg>
        </RightDisplay>
      </Midbody>
      <FooterBody>
        <FooterBox>
          <FooterBoxHeading>COMPANY</FooterBoxHeading>
          <DWhite>
            <span>About Us</span>
            <span>Team</span>
            <span>Careers</span>
          </DWhite>
        </FooterBox>
        <FooterBox>
          <FooterBoxHeading>CONTACT</FooterBoxHeading>
          <DWhite>
            <span>Help</span>
            <span>Parnter with us</span>
            <span>Ride with us </span>
          </DWhite>
        </FooterBox>
        <FooterBox>
          <FooterBoxHeading>LEGAL </FooterBoxHeading>
          <DWhite>
            <span>Terms and Conditions</span>
            <span>Refund Policy</span>
          </DWhite>
        </FooterBox>
        <FooterBox>
          <AppDonloadImg src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"></AppDonloadImg>
          <AppDonloadImg src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"></AppDonloadImg>
        </FooterBox>
      </FooterBody>
    </>
  );
}

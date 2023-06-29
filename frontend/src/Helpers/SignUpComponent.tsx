import { Drawer } from "@mui/material";
import axios from "axios";
import {
  CloseButton,
  CreateAccText,
  DrawerBottom,
  DrawerBttn,
  DrawerInput,
  DrawerTandC,
  DrawerTop,
  Drawerdiv,
  HrDwawer,
  LoginDrawerImg,
  LoginLeft,
  LoginRight,
  LoginSpan,
  LoginText,
} from "../Styles/Home.style";
import { theme } from "../mui-theme";
import { useEffect, useState } from "react";
import SnackbarComponent from "../Helpers/Snackbar";

export default function SignUpComponent(props: any) {
  const [otpInput, setOtpInput] = useState(false);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [reload, setReload] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  useEffect(() => {}, [reload]);

  const handleLogin = async () => {
    try {
      const result = await axios.post("http://localhost:3002/api/signup", {
        username: name,
        email: email,
        phoneNo: phone,
      });
      setOtpInput(true);
      console.log(name, email, phone, result);
      setMessage("OTP send");
      setType("success");
      setOpen(true);
    } catch (e) {
      console.log("Error fetching image:", e);
      setMessage(`Error ${e}`);
      setType("error");
      setOpen(true);
    }
  };

  const handleOtpLogin = async () => {
    try {
      const result = await axios.post("http://localhost:3002/api/signupotp", {
        username: name,
        email: email,
        phoneNo: phone,
        otp: otp,
      });
      console.log(result);

      setMessage("Signup successfully");
      setType("success");
      setName("");
      setEmail("");
      setPhone("");
      setOpen(true);
      setOtpInput(false);
    } catch (e) {
      console.log("Error fetching image:", e);
      setMessage(`Error ${e}`);
      setType("error");
      setOpen(true);
    }
  };
  const handleCreateAccount = () => {
    props.setSignupToggle(false);
    props.setLoginToggle(true);
  };

  return (
    <>
      <Drawer
        anchor={"right"}
        open={props.signupToggle}
        onClose={() => props.setSignupToggle(false)}
      >
        <Drawerdiv>
          <CloseButton
            onClick={() => {
              props.setSignupToggle(false);
              setOtpInput(false);
            }}
          >
            x
          </CloseButton>
          <DrawerTop>
            <LoginLeft>
              <LoginText>Sign up</LoginText>
              <CreateAccText>
                or{" "}
                <LoginSpan onClick={handleCreateAccount}>
                  login to your account
                </LoginSpan>
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
              onChange={(e) => setPhone(() => e.target.value)}
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
              onChange={(e) => setName(() => e.target.value)}
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
              onChange={(e) => setEmail(() => e.target.value)}
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
            {otpInput == true ? (
              <DrawerInput
                label="OTP"
                onChange={(e) => setOtp(() => e.target.value)}
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
            ) : (
              <></>
            )}
            {otpInput == false ? (
              <DrawerBttn onClick={handleLogin}>Login</DrawerBttn>
            ) : (
              <DrawerBttn onClick={handleOtpLogin}>Send Otp</DrawerBttn>
            )}
            <DrawerTandC>
              By clicking on Login, I accept the
              <b>Terms & Conditions & Privacy Policy</b>
            </DrawerTandC>
          </DrawerBottom>
        </Drawerdiv>
      </Drawer>
      <SnackbarComponent
        open={open}
        duration={2000}
        setOpen={setOpen}
        message={message}
        type={type}
      />
    </>
  );
}

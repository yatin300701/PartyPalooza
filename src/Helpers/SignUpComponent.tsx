import { Drawer } from "@mui/material";
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

export default function SignUpComponent(props: any) {
  return (
    <Drawer
      anchor={"right"}
      open={props.signupToggle}
      onClose={() => props.setSignupToggle(false)}
    >
      <Drawerdiv>
        <CloseButton onClick={() => props.setSignupToggle(false)}>
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
  );
}

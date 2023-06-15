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

export default function LoginComponent(props: any) {
  return (
    <>
      <Drawer
        anchor={"right"}
        open={props.loginToggle}
        onClose={() => props.setLoginToggle(false)}
      >
        <Drawerdiv>
          <CloseButton onClick={() => props.setLoginToggle(false)}>
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
    </>
  );
}

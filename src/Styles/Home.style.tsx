import { Button, TextField, styled } from "@mui/material";

export const Topbody = styled("div")({});
export const Benefits = styled("div")((props) => ({
  backgroundColor: props.theme.customPalette.Brown,
  color: props.theme.customPalette.White,
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "350px",
}));
export const BenefitsCard = styled("div")(() => ({
  display: "flex",
  width: "270px",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
}));
export const BenefitsImg = styled("img")(() => ({
  width: "100px",
  margin: "10px",
}));
export const Display = styled("div")({
  display: "flex",
});
export const LeftDisplay = styled("div")({
  padding: "60px 60px 60px 240px",
  width: "100%",
});
export const RightDisplay = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  position: "relative",
  justifyContent: "center",
  // alignItems: "center",
});
export const Btn = styled("span")({});
export const Heading = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});
export const CompanyImg = styled("span")({
  width: "5px",
});
export const SignInBtn = styled(Button)((props) => ({
  width: "110px",
  height: "40px",
  fontSize: "15px",
  backgroundColor: "black",
  borderRadius: "0",
  fontWeight: "bold",
  textTransform: "initial",
  "&:hover": {
    color: props.theme.customPalette.White,
    backgroundColor: "black",
  },
}));
export const LoginBtn = styled(Button)((props) => ({
  color: "black",
  width: "130px",
  height: "40px",
  fontWeight: "bold",
  textTransform: "initial",
  "&:hover": {
    color: props.theme.customPalette.Orange,
    backgroundColor: "transparent",
  },
}));

export const Description = styled("div")(() => ({
  margin: "40px 0px",
}));

export const SearchBar = styled("div")(() => ({
  display: "flex",
  width: "100%",
}));
export const LocationInput = styled(TextField)(() => ({
  width: "100%",

  "& .MuiOutlinedInput-root": {
    borderRadius: 0, // Set the border radius to 0
    fontSize: "18px",
  },
  "& .MuiInputBase-input": {
    "&::placeholder": {
      color: "transparent",
    },
    "&:not(:placeholder-shown)": {
      "&::placeholder": {
        color: "initial",
      },
    },
  },
}));
export const FindLocationBtn = styled(Button)((props) => ({
  backgroundColor: props.theme.customPalette.Orange,
  borderRadius: "0px",
  width: "200px",
  fontWeight: "bold",

  "&:hover": {
    backgroundColor: props.theme.customPalette.Orange,
  },
}));
export const OptionsInput = styled(TextField)(() => ({
  width: "100%",
  position: "absolute",
  // `
  // &.Mui-disabled {
  //   background-color: ${red[500]}; // Set your desired background color for disabled state (red in this case)
  // }
  // `
  // " &:disabled": {
  //   backgroundColor:
  //     "#000" /* Set your desired background color for disabled state */,
  // },
  "&.Mui-disabled": {
    backgroundColor: "red", // Set your desired background color for disabled state
    // color: "red",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 0, // Set the border radius to 0
    backgroundColor: "red",
    fontSize: "18px",
  },
  "& .MuiInputBase-input": {
    "&::placeholder": {
      color: "transparent",
    },
    "&:not(:placeholder-shown)": {
      "&::placeholder": {
        color: "initial",
      },
    },
  },
}));
export const OurServicesCities = styled("div")((props) => ({
  fontSize: "15px",
  color: props.theme.customPalette.Grey,
}));
export const HDisplay = styled("h1")(() => ({
  fontSize: "40px",
  margin: "0px",
  padding: "0px",
}));

export const PDisplay = styled("p")((props) => ({
  paddingTop: "0px",
  marginTop: "0px",
  color: props.theme.customPalette.Grey,
}));

export const WhiteH3 = styled("h3")(() => ({
  fontSize: "18px",
  marginBottom: "10px",
  padding: "0px",
}));

export const PWhite = styled("p")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "15px",
  margin: "0px",
  padding: "0px",
}));

// mid body

export const Midbody = styled("body")(() => ({
  display: "flex",
  overflow: "clip",
  alignItems: "center",
  height: "500px",
}));
export const AppDonloadImg = styled("img")(() => ({
  width: "150px",
  marginRight: "13px",
}));

export const PhoneImg = styled("img")(() => ({
  width: "450px",
  position: "absolute",
  down: "-440px",
}));

// footer

export const FooterBody = styled("div")((props) => ({
  backgroundColor: "black",
  color: props.theme.customPalette.White,
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
}));

export const FooterBox = styled("div")(() => ({
  margin: "60px 60px 60px 60px",
}));

export const FooterBoxHeading = styled("div")((props) => ({
  color: props.theme.customPalette.Grey,
  fontSize: "18px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "14px 0px",
}));

export const DWhite = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  margin: "0px",
  padding: "0px 0px",
}));

// login Drawer

export const CloseButton = styled(Button)((props) => ({
  color: "gray",
  fontSize: "20px",
  padding: "0px",
  margin: "0px",
  justifyContent: "start",
  "&:hover": {
    color: props.theme.customPalette.Grey,
    backgroundColor: "transparent",
  },
}));
export const Drawerdiv = styled("div")(() => ({
  margin: "30px 230px 30px 60px",
  width: "400px",
}));

export const DrawerTop = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
}));

export const LoginLeft = styled("div")(() => ({}));
export const LoginText = styled("h3")(() => ({
  fontSize: "30px",
  marginBottom: "0px",
  paddingBottom: "0px ",
}));

export const CreateAccText = styled("p")(() => ({
  paddingTop: "0px",
  marginTop: "0px",
  fontSize: "15px",
}));
export const LoginSpan = styled(Button)((props) => ({
  color: props.theme.customPalette.Orange,
  fontWeight: "600",
  textTransform: "initial",
  fontSize: "15px",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));
export const LoginRight = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const LoginDrawerImg = styled("img")(() => ({
  width: "80px",
  height: "80px",
  borderRadius: "50%",
}));
export const HrDwawer = styled("div")((props) => ({
  width: "40px",
  height: "2px",
  color: props.theme.customPalette.Black,
  backgroundColor: props.theme.customPalette.Black,
  margin: "0px 0px 30px 0px",
}));
export const DrawerBottom = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));
export const DrawerInput = styled(TextField)(() => ({
  width: "100%",
  "-webkit-appearance": "none",
  margin: 0,
}));
export const DrawerBttn = styled(Button)((props) => ({
  width: "100%",
  margin: "25px 0px",
  color: props.theme.customPalette.White,
  backgroundColor: props.theme.customPalette.Orange,
  borderRadius: "0%",
  height: "45px",
  "&:hover": {
    backgroundColor: props.theme.customPalette.Orange,
  },
}));
export const DrawerTandC = styled("p")(() => ({
  fontSize: "15px",
  margin: "0px",
  padding: "0px",
}));

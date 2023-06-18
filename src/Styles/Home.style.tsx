import { Button, TextField, styled } from "@mui/material";

export const Topbody = styled("div")({});
export const Benefits = styled("div")((props) => ({
  backgroundColor: props.theme.customPalette.Brown,
  color: props.theme.customPalette.White,
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "350px",
  "@media(max-width:620px)": {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    height: "auto",
    padding: "100px 10px",
  },
  "@media(max-width:543px)": {
    display: "flex",
    // gridTemplateColumns: "repeat(2,1fr)",
    // height: "auto",
    flexDirection: "column",
    padding: "100px 10px",
  },
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
  "@media(max-width:1011px)": {
    width: "70px",
  },
}));
export const Display = styled("div")({
  display: "flex",
});
export const LeftDisplay = styled("div")({
  padding: "60px 60px 60px 240px",
  width: "100%",
  "@media (max-width:1540px)": {
    padding: "60px 60px 60px 140px",
  },
  "@media (max-width:1000px)": {
    padding: "100px 60px",
  },
  "@media (max-width:582px)": {
    margin: "auto",
  },
});
export const AppDonloadImgMid = styled("img")({
  width: "150px",
  marginRight: "13px",
  "@media(max-width:1208px)": {
    width: "100px",
  },
});
export const RightDisplay = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  position: "relative",
  justifyContent: "center",
  "@media (max-width:1400px)": {
    width: "80%",
  },
  "@media (max-width:1000px)": {
    display: "none",
  },
  // alignItems: "center",
});
export const Btn = styled("span")({
  "@media (max-width:1640px)": {
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export const Heading = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  "@media (max-width:523px)": {
    display: "flex",
    flexDirection: "column",
  },
});
export const CompanyImg = styled("span")({
  width: "5px",
  "@media (max-width:523px)": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
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
  "@media(max-width:1142px)": {
    fontSize: "0.6rem",
    width: "4rem",
    height: "1.5rem",
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
  "@media(max-width:1142px)": {
    fontSize: "0.8rem",
    width: "3rem",
  },
}));

export const Description = styled("div")(() => ({
  margin: "40px 0px",
}));

export const SearchBar = styled("div")(() => ({
  display: "flex",
  width: "100%",
  "@media (max-width:523px)": {
    display: "flex",
    flexDirection: "column",
  },
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
  "@media(max-width:1141px)": {
    "& .MuiInputBase-input": {
      height: "10px",
    },
  },
  "@media(max-width:1000px)": {
    "& .MuiInputBase-input": {
      height: "auto",
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
  "@media(max-width:1141px)": {
    fontSize: "14px",
    width: "150px",
  },
  "@media(max-width:1000px)": {
    fontSize: "15px",
    // width: "150px",
  },
  "@media(max-width:625px)": {
    fontSize: "13px",
    // width: "150px",
  },

  "@media (max-width:523px)": {
    width: "100%",
    height: "50px",
    margin: "10px 0px",
  },
  // "@media(max-width:)"
}));
export const PartyPImg = styled("img")(() => ({
  // width: "20rem",
  width: "350px",
  "@media(max-width:1280px)": {
    width: "250px",
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
  "@media(max-width:1141px)": {
    // height: "10px",
    fontSize: "14px",
  },
}));
export const HDisplay = styled("h1")(() => ({
  fontSize: "40px",
  margin: "0px",
  padding: "0px",
  "@media(max-width:1141px)": {
    fontSize: "30px",
  },
}));

export const PDisplay = styled("p")((props) => ({
  paddingTop: "0px",
  marginTop: "0px",
  color: props.theme.customPalette.Grey,
  "@media(max-width:1141px)": {
    fontSize: "15px",
  },
}));

export const WhiteH3 = styled("h3")(() => ({
  fontSize: "18px",
  marginBottom: "10px",
  padding: "0px",
  "@media(max-width:1011px)": {
    fontSize: "15px",
  },
  "@media(max-width:713px)": {
    fontSize: "12px",
  },
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
  "@media(max-width:1011px)": {
    fontSize: "12px",
  },
  "@media(max-width:713px)": {
    fontSize: "11px",
  },
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
  "@media(max-width:1208px)": {
    width: "100px",
  },
  "@media(max-width:1000px)": {
    display: "none",
  },
  "@media(max-width:449px)": {
    display: "block",
  },
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
  "@media(max-width:1000px)": {
    // width: "100px",
    gridTemplateColumns: "repeat(3,1fr)",
  },
  "@media(max-width:449px)": {
    gridTemplateColumns: "repeat(2,1fr)",
  },
}));

export const FooterBox = styled("div")(() => ({
  margin: "60px 60px 60px 60px",
  "@media(max-width:750px)": {
    // width: "100px",
    margin: "10px",
  },
}));

export const FooterBoxLast = styled("div")(() => ({
  margin: "60px 60px 60px 60px",
  "@media(max-width:1000px)": {
    display: "none",
  },
  "@media(max-width:449px)": {
    display: "block",
  },
}));

export const FooterBoxHeading = styled("div")((props) => ({
  color: props.theme.customPalette.Grey,
  fontSize: "18px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "14px 0px",
  "@media(max-width:1208px)": {
    fontSize: "15px",

    // color: "red",
    // width: "150px",
  },
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
  "@media(max-width:1208px)": {
    fontSize: "13px",
    // width: "150px",
  },
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
  "@media (max-width:900px)": {
    margin: "30px 60px 30px 30px",
  },
  "@media (max-width:700px)": {
    margin: "30px",
  },
  "@media (max-width:469px)": {
    margin: "20px",
    padding: "0px",
    width: "auto",
  },
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
  "@media (max-width:478px)": {
    fontSize: "20px",
  },
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
  "@media (max-width:478px)": {
    fontSize: "12px",
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
  "@media (max-width:700px)": {
    width: "50px",
    height: "50px",
  },
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

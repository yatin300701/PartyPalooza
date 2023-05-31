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
  margin: "60px 60px 60px 240px",
  width: "100%",
});
export const RightDisplay = styled("div")({
  width: "100%",
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
  alignItems: "center",
  justifyContent: "center",
  fontSize: "15px",
  margin: "0px",
  padding: "0px",
}));

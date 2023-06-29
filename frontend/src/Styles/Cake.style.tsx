import { styled } from "@mui/material";
import { theme } from "../mui-theme";

export const ChooseCakePageBody = styled("div")(() => ({}));
export const MainBody = styled("div")(() => ({
  margin: "30px",
}));
export const Cakes = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  margin: "100px",
  gap: "80px",
  "@media(max-width:1536px)": {
    gridTemplateColumns: "repeat(3,1fr)",
  },
  "@media(max-width:1282px)": {
    gap: "30px"
  },
  "@media(max-width:1175px)": {
    gridTemplateColumns: "repeat(2,1fr)",
    margin: "50px",
  },
  "@media(max-width:727px)": {
    gridTemplateColumns: "repeat(2,1fr)",
    margin: "10px",
    gap: "10px"
  },
  "@media(max-width:663px)": {
    gridTemplateColumns: "repeat(1,1fr)",
    margin: "10px",
    gap: "10px"
  },
}));
export const Heading = styled("div")(() => ({
  fontSize: "25px",
  fontWeight: "700",
  margin: "0px",
  padding: "0px",
  width: "100%",
  display: "flex",
  // justifyContent: "space-between",
}));
export const DivTopography = styled("div")(() => ({
  fontSize: "14px",
  color: "grey",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
export const RatingDiv = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyItems: "center",
}));

export const NextPageCake = styled("div")(() => ({
  ":hover": {
    color: theme.customPalette.Orange,
  },
  cursor: "pointer",
  display: "flex",
  justifyContent: "right",
  "@media(max-width:499px)": {
    fontSize: "16px",
    width: "34%"
  },
}));

export const ButtonTopography = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const CardOuter = styled("div")(() => ({
  padding: "20px 5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ":hover": {
    boxShadow: " 0 0 5px 2px #aaa",
  },
}));
export const HeadingDiv = styled("div")(() => ({
  "@media(max-width:499px)": {
    fontSize: "16px",
    width: "34%"
  },
}))

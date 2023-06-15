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
}));
export const Heading = styled("p")(() => ({
  fontSize: "25px",
  fontWeight: "700",
  margin: "0px",
  padding: "0px",
  display: "flex",
  justifyContent: "space-between",
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

export const NextPageCake = styled("span")(() => ({
  ":hover": {
    color: theme.customPalette.Orange,
  },
  cursor: "pointer",
}));

export const ButtonTopography = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
}));

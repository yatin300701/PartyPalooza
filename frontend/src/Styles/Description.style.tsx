import { styled } from "@mui/material";
import { theme } from "../mui-theme";

export const DescriptionBody = styled("div")({
  width: "900px",
  margin: "auto",
});
export const Heading = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: "50px 0px 0px 0px",
});
export const LeftHeading = styled("div")({});
export const Name = styled("h2")({
  fontSize: "20px",
  margin: "0px",
  padding: "10px 0px",
});
export const Tags = styled("p")(() => ({
  fontSize: "15px",
  margin: "0px",
  padding: "0px",
  color: theme.customPalette.Grey,
}));
export const Location = styled("p")({
  fontSize: "15px",
  margin: "0px",
  padding: "0px",
  color: theme.customPalette.Grey,
});
export const RightHeading = styled("div")({});
export const RatingBox = styled("div")({
  border: "1px dotted grey",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px",
  borderRadius: "3px",
  width: "100px",
});
export const RatingPara = styled("p")({
  margin: "0px",
  padding: "0px",
  fontSize: "18px",
  display: "flex",
  justifyContent: "center",
  fontWeight: "900",
});
export const RatingNumber = styled("p")({
  margin: "0px",
  padding: "0px",
  fontSize: "12px",
});
export const Notice = styled("p")({
  fontSize: "15px",
  //   margin: "0px",
  //   padding: "0px",
  display: "flex",
  alignItems: "center",
  color: theme.customPalette.Grey,
});
export const Extras = styled("div")({
  display: "flex",
});
export const Time = styled("p")({
  fontSize: "16px",
  fontWeight: "900",
  display: "flex",
  justifyContent: "center",
  marginRight: "100px  ",
});
export const Price = styled("p")({
  fontSize: "16px",
  fontWeight: "900",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const Coupons = styled("div")({});
export const Category = styled("div")({
  fontSize: "13px",
  fontWeight: "500",
  color: theme.customPalette.Grey,
  display: "flex",
  alignItems: "center",
  padding: "10px 0px",
});
export const ImgNotice = styled("img")({});

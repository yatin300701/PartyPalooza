import { Link, styled } from "@mui/material";

export const CakeNavBody = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  height: "90px",
  boxShadow: "0px -15px 25px",
  padding: "0px 30px",
}));
export const CakeNavLeft = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));
export const CompanyImg = styled("img")(() => ({
  width: "200px",
  cursor: "pointer",
}));
export const CakePlace = styled(Link)(() => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  color: "black",
  textDecoration: "none",
  margin: "0px 15px",
}));
export const CakeNavRight = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));

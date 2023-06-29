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
  "@media(max-width:658px)": {
    width: "150px"
  },
  // 512
  "@media(max-width:512px)": {
    width: "100px"
  }
}));
export const CakePlace = styled("div")(() => ({

  display: "flex",
  alignItems: "center",
  justifyItems: "center",
  margin: "10px",
  cursor: "pointer",
  "@media(max-width:658px)": {
    fontSize: "14px"
  },
  // fontSize: "12px"
  "@media(max-width:512px)": {
    fontSize: "12px",
    margin: "5px"
  },

}));
export const CakeNavRight = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));
export const Option = styled("option")(() => ({
  padding: "10px",
  borderRadius: "10px",
  margin: "10px"
}))

export const CakePlaceLocation = styled("select")(() => ({
  padding: "5px 5px",
  borderRadius: "5px",
  "@media(max-width:658px)": {
    fontSize: "12px"
  },
  "@media(max-width:512px)": {
    fontSize: "10px"
  }
}));
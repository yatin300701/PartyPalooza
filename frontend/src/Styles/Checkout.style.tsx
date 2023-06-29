import { styled } from "@mui/material";
import { theme } from "../mui-theme";

export const MainBody = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "60% 40%",
  backgroundColor: "#e9ecee",
  //   gap: "40px",
}));
export const RightDisplay = styled("div")(() => ({
  margin: "30px auto",
  padding: "30px 30px",
  width: "400px",
  backgroundColor: "white",
}));
export const LeftDisplay = styled("div")(() => ({
  backgroundColor: "white",
  width: "90%",
  margin: "20px auto",
  padding: "30px",
}));
export const CheckoutTitle = styled("div")(() => ({
  display: "flex",
  height: "50px",
}));
export const CheckoutImg = styled("img")(() => ({
  height: "40px",
}));
export const CheckoutHeading = styled("div")(() => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "end",
}));
export const CheckoutH = styled("h3")(() => ({
  fontSize: "20px",
  margin: "0px",
  padding: "0px ",
}));
export const CheckoutP = styled("p")(() => ({
  fontSize: "15px",
  margin: "0px",
  padding: "0px ",
}));
export const BillFullDetails = styled("div")(() => ({}));
export const Coupons = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
export const Suggestions = styled("p")(() => ({
  fontSize: "12px",
  backgroundColor: "#e9ecee",
  display: "flex",
  justifyContent: "center",
  padding: "10px",
}));
export const ApplyCoupon = styled("div")(() => ({
  height: "40px",
  fontSize: "18px",
  border: "1px dotted black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.customPalette.Grey,
}));
export const Bills = styled("div")(() => ({}));
export const BillH = styled("h3")(() => ({
  fontSize: "15px",
}));
export const BillP = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "10px 0px ",
}));
export const BillSpan = styled("div")(() => ({
  fontSize: "15px",
}));
export const BillBP = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
export const BillBSpan = styled("div")(() => ({
  fontSize: "18px",
  fontWeight: "600",
}));
export const Items = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  fontSize: "15px",
  justifyContent: "space-between",
}));
export const ItemName = styled("p")(() => ({}));
export const ItemInfo = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "0px",
  padding: "0px",
  // height: "30  px",
}));
export const ItemCount = styled("p")(() => ({}));
export const ItemPrice = styled("p")(() => ({}));
export const Account = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "60% 40%",
  padding: "30px 0px 50px 0px",
}));
export const AHeading = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));
export const Ah1 = styled("h3")(() => ({
  margin: "0px",
  padding: "0px 0px 10px 0px",
}));
export const Ap = styled("p")(() => ({
  margin: "0px",
  padding: "0px 0px 20px 0px",
  fontSize: "15px",
  color: theme.customPalette.Grey,
}));
export const Abody = styled("div")(() => ({
  display: "flex",
  padding: "20px 0px",
}));
export const HaveAccount = styled("div")(() => ({
  border: "1px solid green",
  color: "green",
  fontSize: "18px",
  cursor: "pointer",
  fontWeight: "600",
  padding: "10px 30px",
  margin: "0px 30px 0px 0px",
}));
export const SignUp = styled("div")(() => ({
  border: "1px solid green",
  color: "green",
  fontSize: "18px",
  fontWeight: "600",
  padding: "10px 30px",
  cursor: "pointer",
}));
export const Address = styled("div")(() => ({
  margin: "100px 0px 50px 0px",
}));
export const Payment = styled("div")(() => ({
  margin: "100px 0px 50px 0px",
}));
export const AImg = styled("img")(() => ({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
}));
export const AddressInput = styled("input")(() => ({
  height: "100px",
  width: "100%",
}));
export const AbodyC = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
}));

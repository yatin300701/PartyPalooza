import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Helpers/Navbar";
import { ChooseCakePageBody } from "../Styles/Cake.style";
import FooterBodyComponent from "../Helpers/FooterBodyComponent";
import cpyImg from "../assets/Logo.png";
import PercentIcon from "@mui/icons-material/Percent";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import {
  AHeading,
  AImg,
  Abody,
  AbodyC,
  Account,
  Address,
  AddressInput,
  Ah1,
  Ap,
  ApplyCoupon,
  BillBP,
  BillBSpan,
  BillFullDetails,
  BillH,
  BillP,
  BillSpan,
  Bills,
  CheckoutH,
  CheckoutHeading,
  CheckoutImg,
  CheckoutP,
  CheckoutTitle,
  Coupons,
  HaveAccount,
  ItemCount,
  ItemInfo,
  ItemName,
  ItemPrice,
  Items,
  LeftDisplay,
  MainBody,
  Payment,
  RightDisplay,
  SignUp,
  Suggestions,
} from "../Styles/Checkout.style";
import { Button } from "@mui/material";
import { theme } from "../mui-theme";
import LoginComponent from "../Helpers/LoginComponent";
import SignUpComponent from "../Helpers/SignUpComponent";

export default function CheckoutPage() {
  const [reload, setReload] = useState(false);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [loginToggle, setLoginToggle] = useState(false);
  const [signupToggle, setSignupToggle] = useState(false);

  useEffect(() => {
    let noOfItem = localStorage.getItem("cart");
    if (!noOfItem) noOfItem = "[]";
    let item = JSON.parse(noOfItem);
    setItems(item);

    let totalAmount = items.reduce(
      (pre, data: any) => pre + Number(data?.price) * Number(data?.quantity),
      0
    );
    console.log("total", totalAmount, item);
    setTotal(totalAmount);

    const pageNo = localStorage.getItem("pageNo");

    if (!pageNo || pageNo == null || pageNo == undefined) {
      localStorage.setItem("pageNo", "1");
      setReload((p) => !p);
    }

    // if (pageNo === "1") {
    //   navigate("/cake");
    // } else if (pageNo === "2") {
    //   navigate("/decoration");
    // } else if (pageNo === "4") {
    //   navigate("/checkout");
    // } else {
    //   navigate("#");
    // }
  }, [reload]);

  return (
    <>
      <ChooseCakePageBody>
        <Navbar />
        <MainBody>
          <LeftDisplay>
            <Account>
              <div>
                <AHeading>
                  <Ah1>Account</Ah1>
                  <Ap>
                    To place your order now, log in to your exiting account or
                    sign up.
                  </Ap>
                </AHeading>
                <Abody>
                  <HaveAccount onClick={() => setLoginToggle(true)}>
                    Log In
                  </HaveAccount>
                  <SignUp onClick={() => setSignupToggle(true)}>Sign Up</SignUp>
                </Abody>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AImg src="https://deowgxgt4vwfe.cloudfront.net/uploads/1664171278_small.jpg"></AImg>
              </div>
            </Account>
            <hr style={{ border: "1px dotted black" }} />
            <Address>
              <AHeading>
                <Ah1>Delivery Address</Ah1>
                <Ap>Please provide us your current address</Ap>
              </AHeading>
              <AbodyC>
                <AddressInput></AddressInput>
                <Button style={{ padding: "20px 0px" }}>Add</Button>
              </AbodyC>
            </Address>
            <hr style={{ border: "1px dotted black" }} />
            <Payment>
              <AHeading>
                <Ah1>Payment</Ah1>
                <Ap>Please provide us your card number for payments</Ap>
              </AHeading>
              <AbodyC
                style={{ fontSize: "20px", color: theme.customPalette.Grey }}
              >
                We are working on it please wait
              </AbodyC>
            </Payment>
          </LeftDisplay>
          <RightDisplay>
            <CheckoutTitle>
              <CheckoutImg src={cpyImg}></CheckoutImg>
              <CheckoutHeading>
                <CheckoutH>PartyPlazoo</CheckoutH>
                <CheckoutP>Bill</CheckoutP>
              </CheckoutHeading>
            </CheckoutTitle>
            <hr style={{ borderTop: "dotted 1px" }} />
            <BillFullDetails>
              <Items>
                <ItemInfo>
                  <ItemName>Name</ItemName>

                  <ItemCount>Quantity</ItemCount>
                  <ItemPrice>Price</ItemPrice>
                </ItemInfo>

                {items.map((data: any) => {
                  console.log("this", data);
                  return (
                    <>
                      <ItemInfo>
                        <ItemName>{data?.name}</ItemName>

                        <ItemCount>{data?.quantity}</ItemCount>
                        <ItemPrice>{data?.price * data?.quantity}</ItemPrice>
                      </ItemInfo>
                    </>
                  );
                })}
              </Items>
            </BillFullDetails>
            <Coupons>
              <Suggestions>
                Any Suggestions? We will pass it on...
                <FormatQuoteIcon style={{ fontSize: "15px" }} />
              </Suggestions>
              <ApplyCoupon>
                {" "}
                <PercentIcon
                  style={{
                    fontSize: "18px",
                  }}
                />{" "}
                &nbsp; Apply Coupon
              </ApplyCoupon>
            </Coupons>
            <Bills>
              <BillH>Bill Details</BillH>
              <BillP>
                <BillSpan>Items Total</BillSpan>
                <BillSpan>Rs {total}</BillSpan>
              </BillP>
              <BillP>
                <BillSpan>Delivery Fee</BillSpan>
                <BillSpan>Rs {total == 0 ? 0 : 30}</BillSpan>
              </BillP>

              <BillP>
                <BillSpan>GST</BillSpan>
                <BillSpan>Rs {0.1 * total}</BillSpan>
              </BillP>
              <hr />
              <BillBP>
                <BillBSpan>To Pay</BillBSpan>
                <BillBSpan>
                  Rs {total + total == 0 ? 0 : 30 + 0.1 * total}
                </BillBSpan>
              </BillBP>
              <hr />
            </Bills>
          </RightDisplay>
        </MainBody>
      </ChooseCakePageBody>
      <FooterBodyComponent />
      <LoginComponent
        loginToggle={loginToggle}
        setLoginToggle={setLoginToggle}
      />
      <SignUpComponent
        signupToggle={signupToggle}
        setSignupToggle={setSignupToggle}
      />
    </>
  );
}

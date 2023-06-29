import {
  AppDonloadImg,
  DWhite,
  FooterBody,
  FooterBox,
  FooterBoxHeading,
  FooterBoxLast,
} from "../Styles/Home.style";

export default function FooterBodyComponent() {
  return (
    <>
      <FooterBody>
        <FooterBox>
          <FooterBoxHeading>COMPANY</FooterBoxHeading>
          <DWhite>
            <span>About Us</span>
            <span>Team</span>
            <span>Careers</span>
          </DWhite>
        </FooterBox>
        <FooterBox>
          <FooterBoxHeading>CONTACT</FooterBoxHeading>
          <DWhite>
            <span>Help</span>
            <span>Parnter with us</span>
            <span>Ride with us </span>
          </DWhite>
        </FooterBox>
        <FooterBox>
          <FooterBoxHeading>LEGAL </FooterBoxHeading>
          <DWhite>
            <span>Terms and Conditions</span>
            <span>Refund Policy</span>
          </DWhite>
        </FooterBox>
        <FooterBoxLast>
          <AppDonloadImg src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"></AppDonloadImg>
          <AppDonloadImg src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"></AppDonloadImg>
        </FooterBoxLast>
      </FooterBody>
    </>
  );
}

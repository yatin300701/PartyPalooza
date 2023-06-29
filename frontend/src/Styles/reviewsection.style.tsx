import { styled } from "@mui/material";
import { theme } from "../mui-theme";

export const ReviewBody = styled("div")(() => ({}));
export const Heading = styled("h2")(() => ({
  fontSize: "20px",
}));
export const Body = styled("div")(() => ({}));
export const MyReview = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));
export const Review = styled("input")(() => ({
  height: "100px",
  margin: "0px 0px 30px 0px",
  borderRadius: "5px",
}));
export const SubmitReview = styled("button")(() => ({
  width: "180px",
  height: "40px",
  borderRadius: "5px",
  marginRight: "20px",
  backgroundColor: theme.customPalette.Primary,
  color: "black",
  fontWeight: "900",
  cursor: "pointer",
  ":hover": {
    backgroundColor: theme.customPalette.Orange,
    color: "white",
  },
}));
export const OtherReview = styled("div")(() => ({
  padding: "30px 0px",
}));
export const Others = styled("div")(() => ({
  display: "flex",
  padding: "20px 0px",
}));
export const Leftother = styled("div")(() => ({
  padding: "0px 20px 0px 0px",
}));
export const NameField = styled("div")(() => ({
  fontSize: "18px",
  fontWeight: "800",
  margin: "0px 0px 0px 0px ",
  display: "flex",
  flexDirection: "column"
}));
export const Rightother = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
export const CommentInput = styled("p")(() => ({
  fontSize: "16px",
  padding: "0px 0px 10px 0px",
  margin: "0px",
  width: "842px",
}));
export const CommentBottom = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  fontSize: "15px",
}));
export const ReplyTag = styled("span")(() => ({
  fontSize: "15px",
  margin: "10px 0px",
  marginRight: "10px",
  cursor: "pointer",
  color: "	deepskyblue",
  fontWeight: "900",
}));
export const ReplySection = styled("div")(() => ({
  margin: "20px 0px",
  marginLeft: "40px",
}));
export const ReplySectionReply = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  margin: "20px 0px",
}));
export const ButtonsReview = styled("div")(() => ({
  display: "flex",
}));
export const SkeletonBody = styled("div")(() => ({
  width: "800px",
  margin: "100px auto",
}));

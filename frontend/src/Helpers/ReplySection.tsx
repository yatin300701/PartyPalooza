import React, { useEffect, useState } from "react";
import {
  ButtonsReview,
  CommentBottom,
  CommentInput,
  NameField,
  ReplySection,
  ReplySectionReply,
  ReplyTag,
  Review,
  Rightother,
  SubmitReview,
} from "../Styles/reviewsection.style";
import axios from "axios";
import { theme } from "../mui-theme";

export default function ReplySectionBox(props: any) {

  const [replies, setReplies] = useState<any>([])
  // reply
  const [myreply, setMyreply] = useState("")
  const [to, setTo] = useState(props.to)
  const [reload, setReload] = useState(false)


  const onExitClick = async (index: any) => {
    const replyArry = { ...props.reply };
    replyArry[index] = false;
    props.setReply(replyArry);
  };


  useEffect(() => { getReplies() }, [reload])
  const getReplies = async () => {
    try {
      const result = await axios.get(`http://localhost:3002/api/comments/reply/${props.replyId}`)
      console.log(result.data.data)
      setReplies(result.data.data)
    } catch (e: any) {
      console.log(e.message)
    }
  }


  const onSubmitReply = async () => {
    try {
      const utemp = localStorage.getItem("user")
      if (!utemp) {
        throw Error("Login Please")
      }
      const user = JSON.parse(utemp);

      const result = await axios.post(`http://localhost:3002/api/comments/reply/${props.replyId}`, {
        to: to,
        comment: myreply,
        by: user.username
      })

      setMyreply("")

      setReload(true)


    } catch (e: any) {
      console.log(e.message)
    }
  }
  const toReply = (by: string) => {
    setTo(by)
  }
  return (

    <>
      <ReplySection>
        {
          replies?.map((reply: any) => {
            // console.log("reply is", reply)
            return <>

              <Rightother>
                <NameField>
                  {" "}
                  <span>{reply?.by}</span>{" "}
                  <span style={{ fontSize: "12px", color: theme.customPalette.Grey, padding: "0px 0px" }}> Replied To : {reply?.to}</span>
                </NameField>
                <CommentInput>
                  {reply?.comment}
                </CommentInput>
                <CommentBottom style={{
                  fontSize: "13px",
                  margin: "10px 0px",
                  marginRight: "10px",
                  cursor: "pointer",
                  color: "	deepskyblue",
                  fontWeight: "900"
                }} onClick={() => toReply(reply?.by)}>Reply</CommentBottom>
              </Rightother >


            </>
          })
        }
        <ReplySectionReply>
          <ReplyTag>Reply</ReplyTag>
          <span style={{ fontSize: "12px", color: theme.customPalette.Grey, padding: "0px 0px" }}> Replied To : {to}</span>
          <Review type="text" value={myreply} onChange={(e: any) => setMyreply(e.target.value)}></Review>
          <ButtonsReview>
            <SubmitReview onClick={onSubmitReply}>Submit</SubmitReview>
            <SubmitReview onClick={() => onExitClick(props.index)}>
              Exit
            </SubmitReview>
          </ButtonsReview>
        </ReplySectionReply>
      </ReplySection >

    </>
  );
}

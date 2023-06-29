import React, { useEffect, useState } from "react";
import Navbar from "../Helpers/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Category,
  Coupons,
  DescriptionBody,
  Extras,
  Heading,
  ImgNotice,
  LeftHeading,
  Location,
  Name,
  Notice,
  Price,
  RatingBox,
  RatingNumber,
  RatingPara,
  RightHeading,
  Tags,
  Time,
} from "../Styles/Description.style";
import StarIcon from "@mui/icons-material/Star";
import TimerIcon from "@mui/icons-material/Timer";
import DiscountIcon from "@mui/icons-material/Discount";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { ImLeaf } from "react-icons/im";
import { TbMeat } from "react-icons/tb";
import { theme } from "../mui-theme";
import ReviewSection from "../Helpers/ReviewSection";
import SnackbarComponent from "../Helpers/Snackbar";
import { Skeleton } from "@mui/material";
import { SkeletonBody } from "../Styles/reviewsection.style";

export default function Description() {
  const [item, setItem] = useState<{
    id: string;
    name: string;
    price: string;
    img: string;
    tags: string;
    location: string;
    veg: boolean;
    rating: string;
    bakingTime: string;
  }>();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [typei, setType] = useState("");
  const { type } = useParams();
  const navigate = useNavigate();
  const getData = async () => {
    const token = localStorage.getItem("token");
    try {
      let config = {
        headers: {
          Authorization: token,
        },
      };
      let result: any = await axios.get(
        `http://localhost:3002/api/products/details/${type}/${id}`,
        config
      );
      setItem(result.data.data.result[0]);
      // console.log("result", result);
    } catch (e) {
      console.log(e);
      setMessage("Please Login to view this page");
      setType("error");
      setOpen(true);
      const delayInMilliseconds = 2000; // 3 seconds

      const timeoutId = setTimeout(() => {
        navigate("/cake"); // navigate to the other page
      }, delayInMilliseconds);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar />
      {item ? (
        <DescriptionBody>
          <Heading>
            <LeftHeading>
              <Name>{item?.name}</Name>
              <Tags>{item?.tags}</Tags>
              <Location>{item?.location}</Location>
            </LeftHeading>
            <RightHeading>
              <RatingBox>
                {item ? (
                  <>
                    {item?.rating >= "4" ? (
                      <RatingPara style={{ color: theme.customPalette.Green }}>
                        <StarIcon style={{ height: "22px" }} />
                        {item?.rating}
                      </RatingPara>
                    ) : (
                      <RatingPara style={{ color: theme.customPalette.Orange }}>
                        <StarIcon style={{ height: "22px" }} />
                        {item?.rating}
                      </RatingPara>
                    )}
                  </>
                ) : (
                  <></>
                )}
                <hr
                  style={{
                    backgroundColor: "grey",
                    width: "70px",
                  }}
                />
                <RatingNumber># ratings</RatingNumber>
              </RatingBox>
            </RightHeading>
          </Heading>

          <Notice>
            <ImgNotice src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/SurgeAssets/distSurge"></ImgNotice>{" "}
            &nbsp; Based on distance, an additional delivery fee will apply
          </Notice>
          <hr style={{ border: "1px dotted grey" }} />
          <Extras>
            <Time>
              <TimerIcon style={{ fontSize: "20px" }} />
              &nbsp;
              {item?.bakingTime} MINS
            </Time>
            <Price>
              <DiscountIcon style={{ fontSize: "20px" }} />
              <CurrencyRupeeIcon style={{ fontSize: "15px" }} />
              {2 * Number(item?.price) - 20} for two
            </Price>
          </Extras>
          <Coupons>{/* <CouponComponent/> */}</Coupons>
          <Category>
            {item?.veg ? (
              <>
                {" "}
                <ImLeaf style={{ color: "green", fontSize: "15px" }} />{" "}
                &nbsp;&nbsp;PURE VEG
              </>
            ) : (
              <>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlya_D4tMO9KiFjqyfa4rN1GkVrH6sG8gGJerV0Jevp3bypaz04dbPAIPcBl7EUewWVAg&usqp=CAU"
                  style={{ color: "red", fontSize: "15px", width: "18px" }}
                />{" "}
                &nbsp;&nbsp; NON VEG
              </>
            )}
          </Category>
          <hr style={{ border: "1px dotted grey" }} />
          <ReviewSection />
        </DescriptionBody>
      ) : (
        <SkeletonBody>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

          {/* For other variants, adjust the size with `width` and `height` */}
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            style={{ margin: "10px 0px" }}
          />
          <Skeleton
            variant="rectangular"
            style={{ margin: "10px 0px" }}
            width={"auto"}
            height={60}
          />
          <Skeleton
            variant="rectangular"
            style={{ margin: "10px 0px" }}
            width={"auto"}
            height={60}
          />
          <Skeleton
            variant="rectangular"
            style={{ margin: "10px 0px" }}
            width={"auto"}
            height={60}
          />
          <Skeleton
            variant="rectangular"
            style={{ margin: "10px 0px" }}
            width={"auto"}
            height={60}
          />
        </SkeletonBody>
      )}
      <SnackbarComponent
        open={open}
        vertical={"top"}
        setOpen={setOpen}
        message={message}
        duration={2000}
        type={typei}
      />
    </>
  );
}

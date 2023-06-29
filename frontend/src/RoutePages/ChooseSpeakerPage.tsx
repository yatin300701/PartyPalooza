import Navbar from "../Helpers/Navbar";
import StepperComponent from "../Helpers/StepperComponent";
import {
  Cakes,
  CardOuter,
  ChooseCakePageBody,
  Heading,
  HeadingDiv,
  MainBody,
  NextPageCake
} from "../Styles/Cake.style";
import { theme } from "../mui-theme";
import { Box, Card, CardContent, CardMedia, Skeleton, Typography, styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FooterBodyComponent from "../Helpers/FooterBodyComponent";
import CakeCard from "../Helpers/CakeCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Advertisements from "../Helpers/Advertisements";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import axios from "axios";


export default function ChooseSpeakerPage() {
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState<any>([]);

  const count = useSelector((state: RootState) => state.cart.count);

  const CardStyled = styled(Card)(() => ({}));


  useEffect(() => {
    getData();

  }, [reload]);

  const getData = async () => {
    let result = await axios.get("http://localhost:3002/api/products/others");
    setData(result?.data?.data);
  };

  const handleNext = () => {
    navigate("/checkout");
    setReload((p) => !p);
  };
  const handlePre = () => {
    navigate("/decoration");
  };


  return (
    <>
      <ChooseCakePageBody>
        <Navbar />
        <Advertisements type="speakers" />
        <MainBody>
          <StepperComponent active={2} />
          <Heading>
            <HeadingDiv style={{ width: "33%" }} > Cakes </HeadingDiv>
            <HeadingDiv style={{ width: "33%" }}>
              {count == 0 ? (
                <></>
              ) : (
                <div
                  style={{
                    color: theme.customPalette.Orange,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Total &nbsp; {count} &nbsp;
                  <ShoppingBagIcon />
                </div>
              )}
            </HeadingDiv>
            <span style={{ "width": "33%", "display": "flex", justifyContent: "end" }}>
              <NextPageCake onClick={() => handlePre()}>
                Previous Page
              </NextPageCake>
              &nbsp; &nbsp;&nbsp;&nbsp;
              <NextPageCake onClick={() => handleNext()}>
                Next Page
              </NextPageCake>
            </span>

          </Heading>

          <hr style={{ color: theme.customPalette.Grey }} />
          <Cakes>
            {data.length != 0 ? data?.map((props: any, index: any) => (
              <Box
                key={index}
                style={{ textDecoration: "none" }}
                sx={{ maxWidth: 500 }}
              >
                <CardOuter>
                  <CardStyled variant="outlined" sx={{ width: 275 }}>
                    <CakeCard
                      type="others"
                      id={props._id}
                      topReload={setReload}
                      name={props.name}
                      tags={props.tags}
                      img={props.img}
                      price={props.price}
                      rating={props.rating}
                    />
                  </CardStyled>
                </CardOuter>
              </Box>
            )) : <>

              <Card>
                <CardMedia>
                  <Skeleton variant="rectangular" width={300} height={200} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    <Skeleton />
                  </Typography>
                  <Typography variant="body2">
                    <Skeleton />
                    <Skeleton width="80%" />
                    <Skeleton width="60%" />
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardMedia>
                  <Skeleton variant="rectangular" width={300} height={200} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    <Skeleton />
                  </Typography>
                  <Typography variant="body2">
                    <Skeleton />
                    <Skeleton width="80%" />
                    <Skeleton width="60%" />
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardMedia>
                  <Skeleton variant="rectangular" width={300} height={200} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    <Skeleton />
                  </Typography>
                  <Typography variant="body2">
                    <Skeleton />
                    <Skeleton width="80%" />
                    <Skeleton width="60%" />
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardMedia>
                  <Skeleton variant="rectangular" width={300} height={200} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    <Skeleton />
                  </Typography>
                  <Typography variant="body2">
                    <Skeleton />
                    <Skeleton width="80%" />
                    <Skeleton width="60%" />
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardMedia>
                  <Skeleton variant="rectangular" width={300} height={200} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    <Skeleton />
                  </Typography>
                  <Typography variant="body2">
                    <Skeleton />
                    <Skeleton width="80%" />
                    <Skeleton width="60%" />
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardMedia>
                  <Skeleton variant="rectangular" width={300} height={200} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    <Skeleton />
                  </Typography>
                  <Typography variant="body2">
                    <Skeleton />
                    <Skeleton width="80%" />
                    <Skeleton width="60%" />
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardMedia>
                  <Skeleton variant="rectangular" width={300} height={200} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    <Skeleton />
                  </Typography>
                  <Typography variant="body2">
                    <Skeleton />
                    <Skeleton width="80%" />
                    <Skeleton width="60%" />
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardMedia>
                  <Skeleton variant="rectangular" width={300} height={200} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    <Skeleton />
                  </Typography>
                  <Typography variant="body2">
                    <Skeleton />
                    <Skeleton width="80%" />
                    <Skeleton width="60%" />
                  </Typography>
                </CardContent>
              </Card>


            </>}

          </Cakes>
        </MainBody>
      </ChooseCakePageBody>
      <FooterBodyComponent />
    </>
  );
}

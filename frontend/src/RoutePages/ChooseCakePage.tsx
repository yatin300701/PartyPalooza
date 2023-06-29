import Navbar from "../Helpers/Navbar";
import StepperComponent from "../Helpers/StepperComponent";
import {
  Cakes,
  CardOuter,
  ChooseCakePageBody,
  Heading,
  HeadingDiv,
  MainBody,
  NextPageCake,
} from "../Styles/Cake.style";
import { theme } from "../mui-theme";
import { Box, Card, CardContent, CardMedia, Skeleton, Typography, styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FooterBodyComponent from "../Helpers/FooterBodyComponent";
import CakeCard from "../Helpers/CakeCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import axios from "axios";
import Advertisements from "../Helpers/Advertisements";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function ChooseCakePage() {
  const [reload, setReload] = useState(false);
  const [data, setData] = useState<any>([]);

  const navigate = useNavigate();
  const count = useSelector((state: RootState) => state.cart.count);
  useEffect(() => {
    // get data
    getData();
  }, [reload]);

  const CardStyled = styled(Card)(() => ({}));

  const getData = async () => {
    let result = await axios.get("http://localhost:3002/api/products/cake");
    setData(result?.data?.data);
  };
  const handleNext = () => {
    navigate("/decoration");
  };
  const handleClick = async () => {
    navigate("/");
  };

  return (
    <>
      <ChooseCakePageBody>
        <Navbar />
        <Advertisements type="cake" />
        <MainBody>
          <StepperComponent active={0} />
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
            <NextPageCake style={{ "width": "33%" }}
              onClick={() => handleNext()}>
              Next Page
            </NextPageCake>
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
                      type="cake"
                      id={props._id}
                      topReload={setReload}
                      name={props.name}
                      bakingTime={props.bakingTime}
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

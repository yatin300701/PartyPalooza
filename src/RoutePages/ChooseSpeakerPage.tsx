import Navbar from "../Helpers/Navbar";
import StepperComponent from "../Helpers/StepperComponent";
import {
  Cakes,
  ChooseCakePageBody,
  Heading,
  MainBody,
  NextPageCake,
} from "../Styles/Cake.style";
import { theme } from "../mui-theme";
import { Box, Card } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FooterBodyComponent from "../Helpers/FooterBodyComponent";
import CakeCard from "../Helpers/CakeCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Speakers_data } from "../data/Speakers_data";

export default function ChooseSpeakerPage() {
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  const [items, setItems] = useState("0");

  useEffect(() => {
    let noOfItem = localStorage.getItem("cartCount");
    if (!noOfItem) noOfItem = "0";
    setItems(noOfItem);

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

  const handleNext = () => {
    navigate("/checkout");
  };
  const handlePre = () => {
    navigate("/decoration");
  };

  return (
    <>
      <ChooseCakePageBody>
        <Navbar />
        <MainBody>
          <StepperComponent active={2} />
          <Heading>
            <span> Speakers </span>
            <span>
              {items == "0" ? (
                <></>
              ) : (
                <div
                  style={{
                    color: theme.customPalette.Orange,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Total &nbsp; {items} &nbsp;
                  <ShoppingBagIcon />
                </div>
              )}
            </span>
            <span>
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
            {Speakers_data.map((props, index) => (
              <Box
                key={index}
                component={Link}
                style={{ textDecoration: "none" }}
                sx={{ maxWidth: 275 }}
              >
                <Card variant="outlined" sx={{ width: 275 }}>
                  <CakeCard
                    topReload={setReload}
                    name={props.name}
                    // bakingTime={props?.bakingTime ?? "0"}
                    tags={props.tags}
                    img={props.img}
                    price={props.price}
                    rating={props.rating}
                    update={[{ index: index }, { name: "speakers" }]}
                  />
                </Card>
              </Box>
            ))}
          </Cakes>
        </MainBody>
      </ChooseCakePageBody>
      <FooterBodyComponent />
    </>
  );
}

import { Button, CardContent, CardMedia, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  ButtonTopography,
  DivTopography,
  RatingDiv,
} from "../Styles/Cake.style";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";

export default function CakeCard(props: any) {
  const [count, setCount] = useState("0");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    let items = localStorage.getItem(
      `${props.update[1]?.name}-${props.update[0]?.index}`
    );
    if (!items) items = "0";
    setCount(items);
  }, [reload]);

  const addToCart = () => {
    const index = props.update[0].index;
    const item = props.update[1].name;
    let count = localStorage.getItem(`${item}-${index}`);
    if (!count || count == undefined) count = `0`;
    localStorage.setItem(`${item}-${index}`, `${Number(count) + 1}`);

    // array of objects{item, count}
    let cartItemsJson = localStorage.getItem("cart");
    if (!cartItemsJson) cartItemsJson = "[]";
    let cartItems = JSON.parse(cartItemsJson);

    const itemExits = cartItems.find((item: any) => item.name == props.name);

    if (itemExits) {
      itemExits.quantity++;
    } else {
      const newItem = {
        name: props.name,
        price: props.price,
        quantity: 1,
        img: props.img,
      };
      cartItems.push(newItem);
    }

    // update cart
    let cartCount = localStorage.getItem("cartCount");
    if (!cartCount) cartCount = "0";
    let cartItemsCount = parseInt(cartCount);
    cartItemsCount++;

    // store
    localStorage.setItem("cartCount", cartItemsCount.toString());
    localStorage.setItem("cart", JSON.stringify(cartItems));

    setReload((p) => !p);
    props.topReload((p: any) => !p);
  };
  const removeFromCart = () => {
    const index = props.update[0].index;
    const item = props.update[1].name;
    let count = localStorage.getItem(`${item}-${index}`);
    if (!count || count == undefined) count = "1";
    localStorage.setItem(`${item}-${index}`, `${Number(count) - 1}`);

    let cartItemsJson = localStorage.getItem("cart");
    if (!cartItemsJson) cartItemsJson = "[]";
    let cartItems = JSON.parse(cartItemsJson);

    const itemIndex = cartItems.findIndex(
      (item: any) => item.name == props.name
    );

    if (itemIndex != -1) {
      cartItems[itemIndex].quantity--;
      if (cartItems[itemIndex].quantity <= 0) {
        cartItems.splice(itemIndex, 1);
      }
    }

    // update cart
    let cartCount = localStorage.getItem("cartCount");
    if (!cartCount) cartCount = "0";
    let cartItemsCount = parseInt(cartCount);
    cartItemsCount = Math.max(0, cartItemsCount - 1);

    // store
    localStorage.setItem("cartCount", cartItemsCount.toString());
    localStorage.setItem("cart", JSON.stringify(cartItems));

    setReload((p) => !p);
    props.topReload((p: any) => !p);
  };
  return (
    <>
      <CardMedia
        component="img"
        height="194"
        image={props.img}
        alt={props.name}
      />
      <CardContent>
        <Typography>{props.name}</Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.tags}
        </Typography>
        <DivTopography>
          <RatingDiv
            style={{
              backgroundColor: props.rating >= 4 ? "green" : "orange",
              color: "white",
              padding: "0px 5px",
            }}
          >
            <StarIcon style={{ fontSize: "15px" }} />
            <span>{props.rating}</span>
          </RatingDiv>
          .<span>{props.bakingTime ?? 0} MINS</span>.
          <span>Rs {props.price}</span>
        </DivTopography>
        <ButtonTopography>
          {count == "0" ? (
            <Button
              style={{
                fontSize: "17px",
                margin: "10px 0px 0px 0px ",
                padding: "0px",
                backgroundColor: "#1976d2",
                color: "white",
              }}
              onClick={addToCart}
            >
              Add{" "}
            </Button>
          ) : (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#1976d2",
                fontWeight: "700",
              }}
            >
              <RemoveIcon
                onClick={removeFromCart}
                style={{
                  fontSize: "17px",
                  margin: "0px 10px",
                  color: "#1976d2",
                }}
              />{" "}
              {count}{" "}
              <AddIcon
                onClick={addToCart}
                style={{
                  fontSize: "17px",
                  margin: "0px 10px",
                  color: "#1976d2",
                }}
              />
            </span>
          )}
        </ButtonTopography>
      </CardContent>
    </>
  );
}

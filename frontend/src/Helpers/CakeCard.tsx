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
import SnackbarComponent from "./Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { addToCart, removeFromCart } from "../slices/cart";
import { useNavigate } from "react-router-dom";

export default function CakeCard(props: any) {
  const [reload, setReload] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [isCart, setIsCart] = useState(false);

  const count = useSelector((state: RootState) => state.cart.count);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const itemNum = cart.filter((obj) => obj.id === props.id);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();


  useEffect(() => {
    const data = cart.filter((e) => e.id == props.id);
    if (data.length != 0) setIsCart(true);
  }, [reload]);

  const addToCarti = async () => {
    await dispatch(
      addToCart({
        cart: {
          id: props.id,
          name: props.name,
          price: props.price,
          quantity: props.quantity,
          img: props.img,
        },
      })
    );
    setMessage("Added to Cart");
    setType("success");
    console.log("working");
    setOpen(true);
  };
  const removeFromCarti = async () => {
    await dispatch(removeFromCart({ id: props.id }));
    setMessage("Removed from Cart");
    console.log(cart, "with id ", props.id);
    setType("warning");
    setOpen(true);
  };
  const viewIt = async () => {
    navigate(`/details/${props.type}/${props.id}`);
  };
  return (
    <div>
      <CardMedia
        component="img"
        height="180"
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
              width: "50px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "3px",
            }}
          >
            <StarIcon style={{ fontSize: "15px" }} />
            <span>{props.rating}</span>
          </RatingDiv>
          {
            props.bakingTime ? <>.<span>{props.bakingTime ?? 0} MINS</span>.</> : <></>
          }

          <span>Rs {props.price}</span>
        </DivTopography>

        <ButtonTopography>
          <Button
            style={{
              fontSize: "15px",
              fontWeight: "700",
              margin: "10px 0px 0px 0px ",
              padding: "0px",
            }}
            variant="text"
            onClick={viewIt}
          >
            View{" "}
          </Button>
          {isCart == false ? (
            <>
              <Button
                style={{
                  fontSize: "17px",
                  margin: "10px 0px 0px 0px ",
                  padding: "0px",
                  backgroundColor: "#1976d2",
                  color: "white",
                }}
                onClick={addToCarti}
              >
                Add
              </Button>
            </>
          ) : (
            <>
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
                  onClick={removeFromCarti}
                  style={{
                    fontSize: "17px",
                    margin: "0px 10px",
                    color: "#1976d2",
                    cursor: "pointer",
                  }}
                />{" "}
                {itemNum.length}{" "}
                <AddIcon
                  onClick={addToCarti}
                  style={{
                    fontSize: "17px",
                    margin: "0px 10px",
                    color: "#1976d2",
                    cursor: "pointer",
                  }}
                />
              </span>
            </>
          )}
        </ButtonTopography>
      </CardContent>
      <SnackbarComponent
        open={open}
        setOpen={setOpen}
        message={message}
        type={type}
      />
    </div>
  );
}

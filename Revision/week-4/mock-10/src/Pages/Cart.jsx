import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsPlusCircleFill } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  let sum = 0;

  for (let i of cart) {
    sum += i.price;
  }
  const handleOrder = () => {
    alert("Order placed Successfully");
    navigate("/orders");
  };

  const handleAdd = (p) => {
    console.log(p)
    cart?.map((i) => {
      if (i.id == p) sum += i.price;
    });
  };
  const handleMinus = () => {};

  return (
    <>
      <div className="info">
        <h3>Price: ₹{sum} + 50(Deliver Charges)</h3>
        <h3>Total: ₹{sum + 50}</h3>
        <Button
          onClick={handleOrder}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Place Order
        </Button>
      </div>
      <div className="productsList">
        {cart?.map((items) => {
          return (
            <Card
              sx={{ maxWidth: 300, maxHeight: 500 }}
              style={{ borderRadius: "8px", padding: "8px" }}
            >

              <CardActionArea>
                <Typography gutterBottom variant="h6" component="div">
                  {items.brand}
                </Typography>
                <p>{items.title}</p>

                <CardMedia
                  component="img"
                  height="300"
                  image={items.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {items.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₹{items.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className="add">
                <button onClick={() => handleAdd(items.id)}>
                  <BsPlusCircleFill />
                </button>
                <button onClick={() => handleMinus(items.id)}>
                  <BiMinusCircle />
                </button>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Cart;

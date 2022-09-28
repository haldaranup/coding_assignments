import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Orders = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <div className="orderList">
        {cart?.map((items) => {
          return (
            <Card
              sx={{ maxWidth: 200, maxHeight: 260 }}
              style={{ borderRadius: "8px", padding: "8px" }}
            >
              <CardActionArea>
                <h6>{items.brand}</h6>

                <p>{items.title}</p>

                <CardMedia
                  component="img"
                  height="120"
                  image={items.image}
                  alt="green iguana"
                />
                <CardContent>
                  <p>{items.category}</p>
                  <p>₹{items.price}</p>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../State/action";

const SingleProduct = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  console.log('cart:', cart)
  const [addCart, setAddCart] = React.useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleCart = () => {
    setAddCart(true);
    dispatch(
      addToCart(
        products?.filter((i) => {
          return i.id == id;
        })
      )
    );
  };

  return (
    <div>
      {products
        ?.filter((i) => {
          return i.id == id;
        })
        .map((items) => {
          return (
            <div className="items singleItem" key={items.id}>
              <Card
                sx={{ maxWidth: 400, maxHeight: 540 }}
                style={{ borderRadius: "8px", padding: "8px" }}
              >
                <CardActionArea>
                  <Typography gutterBottom variant="h6" component="div">
                    {items.brand}
                  </Typography>
                  <p>{items.title}</p>

                  <CardMedia
                    component="img"
                    height="360"
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
                <CardActions>
                  <Button onClick={handleCart}>
                    {addCart ? "Added" : "Add to Cart"}
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProduct;

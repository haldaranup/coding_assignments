import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const ProductsList = ({ items }) => {
  return (
    <div className="items">
        
      <Card sx={{ maxWidth: 300, maxHeight: 500 }} style={{ borderRadius: "8px", padding: "8px" }}>
        <Link to={`/product/${items.id}`} style={{ textDecoration: "none" }}>
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
          <CardActions></CardActions>
        </Link>
      </Card>
    </div>
  );
};

export default ProductsList;

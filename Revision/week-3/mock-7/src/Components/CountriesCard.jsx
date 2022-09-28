import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  Button,
  CardActionArea,
  CardActions,
  ListItemSecondaryAction,
} from "@mui/material";

import "../Styles/CountriesCard.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

export default function CountriesCard({ items }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card sx={{ maxWidth: 340, minWidth: 220, borderRadius: "12px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={items.flag}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h4>{items.name}</h4>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Population: {items.population}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Region: {items.region}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Capital: {items.capital}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div>
          <Button onClick={handleOpen}>More Details</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Native Name: {items.nativeName}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Subregion : {items.subregion}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Currency Name :{" "}
                {items.currencies?.map((i) => {
                  return <>{i.name}</>;
                })}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Languages :{" "}
                {items.languages?.map((i) => {
                  return <>{i.name} </>;
                })}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="borderCountries">
                  Border Countries :
                  {items.borders?.map((i) => {
                    return <p>{i} </p>;
                  })}
                </div>
              </Typography>
            </Box>
          </Modal>
        </div>
      </CardActions>
    </Card>
  );
}

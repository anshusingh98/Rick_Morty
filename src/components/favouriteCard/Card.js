import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CardDetail from "./CardDetail";
import { addToFavourite } from "../../actions/actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  margin: "auto",
  transform: "translate(-50%, -50%)",
  // width: 400,
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid transparent",
  borderRadius: "25px",
  boxShadow: 24,
  p: 4,
};

const Card = ({ character }) => {
  const [open, setOpen] = useState(false);
  const openDilog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.FavReducer);
  const { id, name, image, status, species, gender, type } = character;
  const [isFavourite, setIsFavourite] = useState(
    favourite.favouriteCharacters.some((f) => f.id === id) || false
  );

  const handleDeselect = () => {
    openDilog();
  };

  const handleSelect = () => {
    setIsFavourite(true);
    dispatch(addToFavourite(character));
  };

  return (
    <div>
      <div className="card">
        {status === "Alive" ? (
          <span className="status-green">{status}</span>
        ) : status === "Dead" ? (
          <span className="status-red">{status}</span>
        ) : (
          <span className="status-grey">{status}</span>
        )}
        <img
          src={image}
          alt="Rick and Morty Character"
          className="img-image"
        ></img>
        <div className="card-info">
          <p className="text-title">
            {name}
            {isFavourite ? (
              <IconButton style={{ float: "right" }} onClick={handleDeselect}>
                <FavoriteIcon color="error" />
              </IconButton>
            ) : (
              <IconButton style={{ float: "right" }} onClick={handleSelect}>
                <FavoriteBorderIcon />
              </IconButton>
            )}
          </p>
          <p className="text-body">
            {species}
            <br />
            {gender}
            <br />
            {type}
          </p>
        </div>
        {/* <div className="card-footer"></div> */}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <CardDetail
              handleClose={handleClose}
              setOpen={setOpen}
              open={open}
              id={id}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Card;

import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Button, CardMedia, IconButton} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector, useDispatch } from "react-redux";
import FavReducer from "../../reducers/favourite.reducer";
import { addToFavourite, removeFromFavourite } from "../../actions/actions";



//#f73a8c
//#9358AC
//#7682c6

export default function CharactersCard({data}) {
  const dispatch = useDispatch();
  // const favourite = useSelector((state) => state.favourite);

  const favourite = useSelector(state=>state.FavReducer)
 
  const { id, name, image, status, species, gender, type } = data;
  //favourite.favouriteCharacters.some((f) => f.id === id)

  const [isFavourite, setIsFavourite] = React.useState(
    false
  );
 

 
  const handleDeselect = () => {
    setIsFavourite(false);
    dispatch(removeFromFavourite(id));
  };

  const handleSelect = () => {
    setIsFavourite(true);
      dispatch(addToFavourite(data));
  };



  return (
    <div>

      <Card sx={{m: 1.5, width: 300 , borderRadius:4 }}>
        <CardContent>
          
          <CardMedia
              component="img"
              height="194"
              image={data.image}
              alt={data.name + ' image'}
          />
          <Typography component="div" sx={{display: 'flex' ,justifyContent: 'space-between', paddingTop:"2px"}} >
          <Typography variant="h6" component="div" >
            {data.name}
            </Typography>
            {/*  */}
            {isFavourite ? (
              // onClick={handleDeselect}
              <IconButton style={{ float: "right" }} onClick={handleDeselect}>
                <FavoriteIcon color="error" />
              </IconButton>
            ) : (
              <IconButton style={{ float: "right" }} onClick={handleSelect}>
                <FavoriteBorderIcon />
              </IconButton>
            )}

          {/*  */}
            <Typography component="div" >
            {(() => {
          if (data.status === "Dead") {
            return  <Button size="small" variant="contained"  color="error">  {data.status}
            </Button>;
          
          } else if (data.status === "Alive") {
            return <Button size="small" variant="contained" color="success"> {data.status}
            </Button>;
          } else {
            return <Button size="small" variant="outlined" disabled> {data.status}
            </Button>;
          }
        })()}
          </Typography>
          </Typography>
          <Typography sx={{mb: 1.5}} color="text.secondary">
            Gender: {data.gender}
             <br />
            Species: {data.species}
            <br />
            Location: {data.location.name}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small" onClick={handleOpen}>Details</Button> */}
        </CardActions>
     </Card>  
      
    </div>
  )

}

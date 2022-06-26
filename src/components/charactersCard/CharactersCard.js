import React,{useState,useEffect} from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Button, CardMedia, IconButton} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector, useDispatch } from "react-redux";
import { addToFav, addToFavourite, removeFromFav, removeFromFavourite } from "../../actions/actions";
import "./charactersCard.css"



//#f73a8c
//#9358AC
//#7682c6

export default function CharactersCard({data}) {
  const dispatch = useDispatch();
  // // const favourite = useSelector((state) => state.favourite);

   const Like = useSelector(state=>state.favChar.favouriteChars)

 
   const { id, name, image, status, species, gender, type } = data;
  // //favourite.favouriteCharacters.some((f) => f.id === id)

  // const [isFavourite, setIsFavourite] = React.useState(
  //   false
  // );
  // const [fav,setFav]=useState({})
  


  // useEffect(() => {
  //   localStorage.setItem('fav', JSON.stringify(fav));
  
  // }, [fav]); 

  // const handleDeselect = () => {
  //    setIsFavourite(false);
     
  //  dispatch(removeFromFavourite(id))
   
  // };
  
  // const handleSelect = () => {
  //   setIsFavourite(true);
  //   dispatch(addToFavourite(data))
  //   setFav(data)
  
  // };
  const [like, setLike] = React.useState(Like.some((f) => f.id === id) || false);

  

  const add_to_Fav = () => {
    dispatch(addToFav(data))
    setLike(true);
  };

  const remove_fromFav = () => {
    dispatch(removeFromFav(id));
     setLike(false);
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
            {/* {false ? (
              // 
              <IconButton style={{ float: "right" }} onClick={add_to_Fav}>
                <FavoriteIcon color="error" />
              </IconButton>
            ) : (
            <IconButton style={{ float: "right" }} onClick={remove_fromFav}>
                <FavoriteBorderIcon />
              </IconButton>
            )} */}
          <div className="fav">
            <i
              className={like ? "fa fa-heart like" : "fa fa-heart"}
              onClick={() => {
                like ? remove_fromFav() : add_to_Fav();
              }}
            ></i>
          </div>
        

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

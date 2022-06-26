import React,{useState,useEffect} from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Button, CardMedia, IconButton} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {  removeFromFav, removeFromFavourite } from "../../actions/actions";
import "./favcard.css"

export default function FavCard() {
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.favChar.favouriteChars);
console.log(favourite)



return ( <div>
{ favourite.map((ele)=>{
   return(
<div className="card">
    <Card sx={{m: 1.5, width: 300 , borderRadius:4 }} key={ele.id}>
      <CardContent>
        
        <CardMedia
            component="img"
            height="194"
            image={ele.image}
            alt={ele.name + ' image'}
        />
        <Typography component="div" sx={{display: 'flex' ,justifyContent: 'space-between', paddingTop:"2px"}} >
        <Typography variant="h6" component="div" >
          {ele.name}
          </Typography>
          
        <div className="fav">
          <i
            className={ "fa fa-heart like" }
            onClick={() => {
              dispatch(removeFromFav(ele.id));
            }}
          ></i>
        </div>
      

        {/*  */}
          <Typography component="div" >
          {(() => {
        if (ele.status === "Dead") {
          return  <Button size="small" variant="contained"  color="error">  {ele.status}
          </Button>;
        
        } else if (ele.status === "Alive") {
          return <Button size="small" variant="contained" color="success"> {ele.status}
          </Button>;
        } else {
          return <Button size="small" variant="outlined" disabled> {ele.status}
          </Button>;
        }
      })()}
        </Typography>
        </Typography>
        <Typography sx={{mb: 1.5}} color="text.secondary">
          Gender: {ele.gender}
           <br />
          Species: {ele.species}
          <br />
          Location: {ele.location.name}
        </Typography>
      </CardContent>
   </Card>  </div>
    
 
)}
 )}
 </div>
  );

}

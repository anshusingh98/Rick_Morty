// import { Title } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react"

import BasicTabs from "./tabs/BasicTabs"


function App() {
  
  return (
    <div className="App" style={{display:"flex",flexDirection:"column"}}>
      <Typography variant="h4" component="h4" style={{backgroundColor:"#e8eaf7",paddingLeft:"40%",color:"black"}}>Rick And Morty</Typography>
      <BasicTabs className="tabs"/>
    </div>
  );
}

export default App;

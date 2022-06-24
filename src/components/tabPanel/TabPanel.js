import React, {useEffect} from "react";
import fetchAPI from "../../requests/fetcher";
import Pagination from '@mui/material/Pagination';
import Box from "@mui/material/Box";
import {Filter} from "../filter/Filter";
import CharactersCard from "../charactersCard/CharactersCard";
 import { useDispatch, useSelector } from "react-redux";
 import { charactersAPI } from "../../requests/requests";
import Container from "../favouriteCard/Container";
//{value, index, dispatch, content, info, error, contentType, filters, API}
function TabPanel({value, index, contentType}) {

  const content = useSelector(state=>state.charactersReducer)
  const  info = useSelector(state=>state.charactersInfoReducer)
  const  error = useSelector(state=>state.charactersErrorReducer)
  const API =  charactersAPI;
  const dispatch = useDispatch();
  const filters ={
    name: '',
    status: ['Alive', 'Dead', 'Unknown',''],
    species: '',
    type: '',
    gender: ['female', 'male', 'unknown','']
  }

  useEffect(() => {
    fetchAPI(contentType, dispatch, API)
  }, [contentType, dispatch, API])

  const [page, setPage] = React.useState(1);
  const [filterString, setFilterString] = React.useState(``);




  const handleChangePage = (event, newPage = 1, filter = filterString) => {
    fetchAPI(
        contentType,
        dispatch,
        API + `?page=${newPage}` + filter
    )
    setPage(newPage);
  };

  if (!Object.keys(content).length || !Object.keys(info).length)
    return null;

  return (
      <div hidden={value !== index} style={{backgroundColor:"#e8eaf7"}}>
        <Box style={{}}>
          <Filter filters={filters} setFilterString={setFilterString} handleChangePage={handleChangePage}/>
        </Box>
        <Box sx={{p: 1, pr: 5, display: 'flex', flexFlow: 'wrap', justifyContent: 'end'}}>
          {
            (info)?
                <Box sx={{ ml: 3, mr: 3, display: 'flex',  alignItems: 'center' }}>
                    {info.count +' '+contentType}
                </Box>:
                null
          }
          <Pagination page={(!error)? page : 1}
                      count={(!error)? info.pages : 1}
                      onChange={handleChangePage}
                      showFirstButton
                      color="secondary"
                      showLastButton/>
        </Box>
        <Box  sx={{p: 3, display: "flex", flexFlow: 'wrap', justifyContent: 'space-around'}}>
          {
            (!error) ?
                content.map(res =>
                  (contentType === 'characters')?
                        <CharactersCard key={res.id} data={res} />:
                        <Container />
                        
                      
                ) :
                <Box>There is nothing here</Box>
          }
        </Box>

        <Box className="box" sx={{p: 5, pb: 10, display: 'flex', justifyContent: 'end'}}>
          <Pagination page={(!error)? page : 1}
                      count={(!error)? info.pages : 1}
                      onChange={handleChangePage}
                      color="secondary"
                      showFirstButton
                      showLastButton/>
        </Box>
      </div>
  );
}
export default TabPanel

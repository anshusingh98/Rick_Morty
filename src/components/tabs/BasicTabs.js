import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '../tabPanel/TabPanel';


export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Box sx={{ width: '100%', backgroundColor: '#e8eaf7'  }}>
        <Box sx={{ borderBottom: 1, borderColor: '#9358AC'}}>
          <Tabs sx={{ pt: 3, pl: 3, pr: 3 }} value={value} onChange={handleChange} centered textColor='secondary' indicatorColor='secondary'>
            <Tab label="Characters" className='tab' />
            <Tab label="favourite" className='tab'  />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} contentType={'characters'}/>
        <TabPanel value={value} index={1} contentType={'fav'}/>
      
      </Box>
  );
}

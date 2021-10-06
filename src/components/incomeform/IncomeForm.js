import React, {useState} from 'react'
import './IncomeForm.css'
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {  InputAdornment } from '@mui/material';



function IncomeForm() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (
    <Card className="incomeform_body" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
      <div className="incomform_input">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
        <div className="incomeform_inputlabel">
        <TextField
          label="Total Income"
          id="filled-start-adornment"
          sx={{ m: 1, width: '20ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="standard"
        />    
        <TextField
          label="Total Bills"
          id="filled-start-adornment"
          sx={{ m: 1, width: '20ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="standard"
        />
        <TextField
          label="Total Saved"
          id="filled-start-adornment"
          sx={{ m: 1, width: '20ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="standard"
        />
        <TextField
          label="Total Invested"
          id="filled-start-adornment"
          sx={{ m: 1, width: '20ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="standard"
        />
        <div>
    
        </div>


        <h1 className="total_remaining"> Total Remaining: <div>$ 12000</div> </h1>
        </div>

      </div>

    </Card>
  )
}

export default IncomeForm

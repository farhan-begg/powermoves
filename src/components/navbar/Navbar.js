import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import {PushToTalkButton, PushToTalkButtonContainer, ErrorPanel} from '@speechly/react-ui'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "rgba(0,0,0,0.4)", marginBottom: 10 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
       
            aria-label="menu"
            sx={{ mr: 2 }}
          >
               
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HOME
          </Typography>
          <Button color="inherit">Farhan Begg</Button>
                <PushToTalkButton 
                  size="25px" 
                />
                <ErrorPanel />
 
 
        </Toolbar>
      </AppBar>
    </Box>
  );
}
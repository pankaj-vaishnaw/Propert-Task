import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Stack from '@mui/material/Stack';

const Nav = _ => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor:'white',color :'black'}} width="100%">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <DraftsIcon sx={{color:'#7065F2'}}/>
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{mr: 3, fontFamily:'cursive', display: { xs: 'none', sm: 'block' } ,color:'#7065F2'}}
            >
              Estatery
            </Typography>
            <Typography
              component="div"
              sx={{color:'#7065F2',mr: 3,padding:'0.5rem',borderRadius:'10px', backgroundColor:'#F1EFF9',display: { xs: 'none', sm: 'block' } }}
            >
              Rent
            </Typography>
            <Typography
              component="div"
              sx={{mr: 3, display: { xs: 'none', sm: 'block' } }}
            >
              Buy
            </Typography>
            <Typography
              component="div"
              sx={{ mr: 3, display: { xs: 'none', sm: 'block' } }}
            >
              Sell
            </Typography>

            <Button
              id="demo-customized-button"
              aria-haspopup="true"
              disableElevation
              sx={{color:'black',textTransform: 'capitalize'}}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Manage Property
            </Button>&emsp;
            <Button
              id="demo-customized-button"
              aria-haspopup="true"
              disableElevation
              sx={{color:'black',textTransform: 'capitalize'}}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Resources
            </Button>

            <Stack spacing={3} ml={56} direction="row">
              <Button variant="outlined"
              id='login-btn' 
              sx={{color: '#7065F2' }}
              
              
              >Login</Button>
              <Button variant="contained" id='sign-up-btn' sx={{backgroundColor:'#7065F2'}}>Sign Up</Button>

            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Nav;
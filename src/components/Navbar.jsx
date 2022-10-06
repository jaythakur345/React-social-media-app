import { Interests, Mail, Notifications } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});
const Searchbar = styled("div")(({ theme }) => ({
  background: "white",
  padding: "0 10px",
  width: "40%",
  borderRadius: theme.shape.borderRadius
}));
const Iconsbox = styled(Box)({
  display: "flex",
  gap: "20px",
  alignItems: "center"
});

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          Social Media
        </Typography>
        < Interests sx={{ display: { xs: "block", sm: "none" } }} />
        <Searchbar><InputBase placeholder="Search..." /></Searchbar>
        <Iconsbox>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' onClick={e=>setOpen(true)} sx={{cursor:"pointer"}} />
        </Iconsbox>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={e=>setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
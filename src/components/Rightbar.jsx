import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/4.jpg" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Letest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap="10px">
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format' alt='pic' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format' alt='pic' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format' alt='pic' />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Letest Conversation</Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/4.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>

    </Box>
  )
}

export default Rightbar
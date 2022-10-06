import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import { Add as AddIcon, AddPhotoAlternate, DateRange, EmojiEmotions, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

const StyledUser = styled(Box)({
    display: "flex",
    gap: "10px",
    margin: "10px 0"

})
const Add = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip title="Add" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", sm: 30 } }}>
                <IconButton onClick={e => setOpen(true)}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </IconButton>
            </Tooltip>

            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={260} bgcolor={"background.default"} color={"text.primary"} borderRadius={5} p={3}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <Typography variant='h6' color='gray' textAlign='center'>Create Post</Typography>
                    </Typography>
                    <StyledUser>
                        <Avatar src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                        <Typography variant='h6'>John Joe</Typography>
                    </StyledUser>
                    <TextField sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's in your mind..."
                        variant="standard"
                    />
                    <Stack gap={1} direction="row" mt={2} mb={3} >
                        <EmojiEmotions color='primary' />
                        <AddPhotoAlternate color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>

                    <ButtonGroup
                        fullWidth
                        variant="contained"
                        aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}>< DateRange /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add
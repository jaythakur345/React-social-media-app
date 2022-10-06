import { Box } from '@mui/material'
import React from 'react'
import Posts from './Posts'

const Feed = () => {
  const posts =[
    {
      id:"1",
      img:"https://mui.com/static/images/cards/paella.jpg"
    },
    {
      id:"2",
      img:"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?cs=srgb&dl=pexels-stein-egil-liland-3408744.jpg&fm=jpg"
    },
    {
      id:"3",
      img:"https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-572897.jpg&fm=jpg"
    },
    {
      id:"4",
      img:"https://images.pexels.com/photos/7925859/pexels-photo-7925859.jpeg?cs=srgb&dl=pexels-kammeran-gonzalezkeola-7925859.jpg&fm=jpg"
    },
    {
      id:"5",
      img:"https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?cs=srgb&dl=pexels-roberto-nickson-2559941.jpg&fm=jpg"
    },
    {
      id:"6",
      img:"https://images.pexels.com/photos/572688/pexels-photo-572688.jpeg?cs=srgb&dl=pexels-tyler-lastovich-572688.jpg&fm=jpg"
    },
  ];

  return (
    <Box flex={4} p={2}>
      {
        posts.map(post=>{
          return <Posts key={post.id} image={post.img} />
        })
        
      }
    </Box>
  )
}

export default Feed
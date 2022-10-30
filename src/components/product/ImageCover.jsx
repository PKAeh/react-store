import React from 'react'
import Box from '@mui/material/Box'

const ImageCover = ({ width, height, image }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        width: width,
        height: height,
        backgroundSize: 'cover',
      }}
    />
  )
}

export default ImageCover

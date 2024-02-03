import { Box } from '@mui/material'
import React from 'react'

function FlexBoxBetween({children,...props}) {
  return (
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} {...props}>
          {children}
    </Box>
  )
}

export default FlexBoxBetween
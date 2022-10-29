import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'

import PaperChip from './PaperChip'

const ChipList = () => {
  return (
    <Grid container spacing={10} sx={{ p: 0 }}>
      <Grid xs={3}>
        <PaperChip image={'logo192.png'} title={'คูปองส่วนลด'} />
      </Grid>
      <Grid xs={3}>
        <PaperChip image={'logo192.png'} title={'คูปองส่วนลด'} />
      </Grid>
      <Grid xs={3}>
        <PaperChip image={'logo192.png'} title={'คูปองส่วนลด'} />
      </Grid>
      <Grid xs={3}>
        <PaperChip image={'logo192.png'} title={'คูปองส่วนลด'} />
      </Grid>
    </Grid>
  )
}

export default ChipList
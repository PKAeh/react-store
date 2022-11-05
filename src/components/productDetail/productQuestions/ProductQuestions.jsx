import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined'
import Link from '@mui/material/Link'

const ProductQuestions = () => {
  return (
    <Paper sx={{ py: 4 }}>
      <Grid container columns={1}>
        <Grid xs={1}>
          <Typography variant="h6" sx={{ pl: 6 }}>
            คำถามเกี่ยวกับสินค้านี้
          </Typography>
        </Grid>
      </Grid>
      <Grid container xs={1} columns={1}>
        <Grid xs={1} sx={{ textAlign: 'center', pt: 10 }}>
          <LiveHelpOutlinedIcon color="disabled" sx={{ fontSize: 80 }} />
        </Grid>
        <Grid xs={1} sx={{ textAlign: 'center', mt: 1.5 }}>
          <Typography sx={{ color: 'rgba(0,0,0,0.6)' }}>
            ยังไม่มีคำถาม
          </Typography>
        </Grid>
        <Grid xs={1} sx={{ textAlign: 'center' }}>
          <Typography sx={{ color: 'rgba(0,0,0,0.6)' }}>
            <Link
              sx={{
                textDecoration: 'none',
                ':hover': { textDecoration: 'underline', color: '#16849b' },
              }}
              href="/react-store/"
            >
              เข้าสู่ระบบ
            </Link>{' '}
            หรือ{' '}
            <Link
              sx={{
                textDecoration: 'none',
                ':hover': { textDecoration: 'underline', color: '#16849b' },
              }}
              href="/react-store/"
            >
              สมัครสมาชิก
            </Link>{' '}
            เพื่อสอบถามร้านค้าและคำตอบจะแสดงที่นี่
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ProductQuestions

import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined'
import LocalShippingOutlined from '@mui/icons-material/LocalShippingOutlined'
import LocalAtmOutlined from '@mui/icons-material/LocalAtmOutlined'
import DepartureBoardOutlinedIcon from '@mui/icons-material/DepartureBoardOutlined'
import RemoveModeratorOutlinedIcon from '@mui/icons-material/RemoveModeratorOutlined'

const ProductDetailShipping = () => {
  return (
    <Grid container columns={1} sx={{ pl: 2, backgroundColor: '#fafafa' }}>
      <Grid xs={1} sx={{ pt: 1.2, pb: 0.8 }}>
        <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.5)' }}>
          ตัวเลือกการจัดส่ง
        </Typography>
      </Grid>

      <Grid
        container
        xs={12}
        sx={{ borderBottom: '1px solid rgba(0,0,0,0.1)', pb: 1.5 }}
      >
        <Grid sx={{ pr: 2 }}>
          <LocationOnOutlined />
        </Grid>
        <Grid xs={8}>
          <Typography sx={{ fontSize: '15px' }}>
            ปทุมวัน/ Pathum Wan in กรุงเทพมหานคร/ Bangkok, 10110
          </Typography>
        </Grid>
        <Grid xs container sx={{ alignItems: 'center' }}>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: '15px',
              color: 'rgb(51, 163, 191)',
              cursor: 'pointer',
            }}
          >
            เปลี่ยน
          </Typography>
        </Grid>
      </Grid>

      <Grid container xs={12} sx={{ pt: 1.5 }}>
        <Grid sx={{ pr: 2 }}>
          <LocalShippingOutlined />
        </Grid>
        <Grid xs={8} columns={1}>
          <Grid xs>
            <Typography sx={{ fontSize: '15px' }}>แบบธรรมดา</Typography>
          </Grid>
          <Grid xs>
            <Typography sx={{ color: 'rgba(0,0,0,0.5)', fontSize: '11px' }}>
              รับภายใน 6-8 พ.ย
            </Typography>
          </Grid>
        </Grid>
        <Grid xs container sx={{ alignItems: 'center' }}>
          <Typography sx={{ textAlign: 'center', fontSize: '15px' }}>
            ฿25.00
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        xs={12}
        sx={{ borderBottom: '1px solid rgba(0,0,0,0.1)', pt: 2, pb: 1.5 }}
      >
        <Grid sx={{ pr: 2 }}>
          <LocalAtmOutlined />
        </Grid>
        <Grid xs={10}>
          <Typography sx={{ fontSize: '15px', pt: 0.2 }}>
            สามารถเก็บเงินปลายทางได้
          </Typography>
        </Grid>
      </Grid>

      <Grid xs={1} sx={{ pt: 1.2, pb: 0.8 }}>
        <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.5)' }}>
          การคืนสินค้า และ การรับประกัน
        </Typography>
      </Grid>

      <Grid container xs={12}>
        <Grid sx={{ pr: 2 }}>
          <DepartureBoardOutlinedIcon />
        </Grid>
        <Grid xs={10} columns={1}>
          <Grid xs>
            <Typography sx={{ fontSize: '15px' }}>
              ส่งสินค้าคืนร้านค้าได้โดยตรงภายใน 7 วัน
            </Typography>
          </Grid>
          <Grid xs>
            <Typography sx={{ color: 'rgba(0,0,0,0.5)', fontSize: '11px' }}>
              เหตุผลเปลี่ยนใจสามารถใช้ได้
              เฉพาะสินค้าที่ยังไม่ถูกเปิดและอยู่ในสภาพสมบูรณ์
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        xs={12}
        sx={{ borderBottom: '1px solid rgba(0,0,0,0.1)', pt: 2 }}
      >
        <Grid sx={{ pr: 2, pb: 1.5 }}>
          <RemoveModeratorOutlinedIcon />
        </Grid>
        <Grid xs={10}>
          <Typography sx={{ fontSize: '15px', pt: 0.2 }}>
            ไม่มีการรับประกันสินค้า
          </Typography>
        </Grid>
      </Grid>
      <Grid xs={1} sx={{ pt: 2 }}>
        <Typography
          sx={{
            textAlign: 'center',
            color: 'rgb(51, 163, 191)',
            cursor: 'pointer',
          }}
        >
          ไปที่ร้านค้า
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ProductDetailShipping

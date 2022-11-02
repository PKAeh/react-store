import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import ProductRating from './ProductRating'
import ProductDetailBrand from './ProductDetailBrand'
import ProductPrice from './ProductPrice'
import ProductTotalSell from './ProductTotalSell'

const ProductDetailName = ({
  product: { title, rating, brand, price, discountPercentage, stock },
}) => {
  return (
    <Grid container columns={1}>
      <Grid xs={1} sx={{ pb: 5 }}>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      <Grid xs={1} sx={{ pb: 2 }}>
        <ProductRating rating={rating} />
      </Grid>
      <Grid xs={1} sx={{ pb: 5 }}>
        <ProductDetailBrand brand={brand} title={title} />
      </Grid>
      <Grid
        xs={1}
        sx={{
          borderTop: '1px solid rgba(0,0,0,0.1)',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          py: 3,
        }}
      >
        <ProductPrice
          price={price}
          discountPercentage={discountPercentage}
          fontSize={'15px'}
          variant={'h3'}
        />
      </Grid>
      <Grid xs={1} sx={{ mt: 2 }}>
        <ProductTotalSell stock={stock} />
      </Grid>

      <Grid
        container
        sx={{ height: '50px', color: 'white', cursor: 'pointer' }}
      >
        <Grid
          container
          sx={{
            width: '232px',
            bgcolor: '#feb916',
            alignItems: 'center',
            mr: 2,
          }}
        >
          <Typography sx={{ width: '100%', textAlign: 'center' }}>
            ซื้อเลย
          </Typography>
        </Grid>
        <Grid
          container
          sx={{
            width: '232px',
            bgcolor: '#f57224',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ width: '100%', textAlign: 'center' }}>
            เพิ่มลงรถเข็น
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProductDetailName

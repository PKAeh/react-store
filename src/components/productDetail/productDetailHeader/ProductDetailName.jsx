import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import ProductRating from './ProductRating'
import ProductDetailBrand from './ProductDetailBrand'
import ProductPrice from './ProductPrice'
import ProductTotalSell from './ProductTotalSell'
import ProductActionButton from './ProductActionButton'

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
        columns={1}
        xs={12}
        sx={{
          color: 'white',
          cursor: 'pointer',
          mt: 2.5,
        }}
      >
        <Grid xs>
          <ProductActionButton
            bgColor={'#ffb916'}
            text={'ซื้อเลย'}
            hoverBgColor={'#e59b11'}
          />
        </Grid>
        <Grid xs sx={{ ml: 1.5 }}>
          <ProductActionButton
            bgColor={'#f57224'}
            text={'เพิ่มลงรถเข็น'}
            hoverBgColor={'#d0611e'}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProductDetailName

import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

const ProductDetailDescription = ({ product: { title, description } }) => {
  return (
    <Paper sx={{ py: 4, px: 6 }}>
      <Grid container columns={1}>
        <Grid xs={1}>
          <Typography variant="h6"> รายละเอียดสินค้า {title} </Typography>
        </Grid>
        <Grid
          xs={1}
          columns={1}
          container
          sx={{ py: 3, borderBottom: '1px solid rgba(0,0,0,0.1)' }}
        >
          <Typography xs={1}>
            {description}
            atque culpa voluptatem odit ex voluptas quas consectetur officiis!
            Laborum, architecto. Corrupti fugiat labore sit quibusdam. Velit
            quae natus iste nesciunt ratione, enim similique totam inventore
            ipsa voluptates atque tempore facere quisquam, voluptate neque
            numquam omnis veritatis praesentium adipisci blanditiis nihil sequi.
            Dolorem voluptates impedit nesciunt voluptatibus perferendis
            voluptatum vero quia officia ad odio accusantium laborum laboriosam
            ipsum delectus, voluptatem unde, possimus iusto amet vel accusamus
            praesentium quisquam corporis atque! Dolorem iste a commodi porro
            optio explicabo nihil, iusto ex, autem repudiandae, at consequuntur
            dolore alias molestiae voluptatem dolorum dolores blanditiis et
            corporis. Aut doloremque vel est quaerat ab excepturi voluptate
            ipsam, praesentium perspiciatis sunt quas deleniti? Fuga mollitia
            aliquid possimus et nobis consectetur, repellendus quidem distinctio
            id aspernatur, molestias molestiae quas autem nulla sed illum beatae
            tempora magni iure enim doloribus quod ducimus. Enim at pariatur ad
            laborum expedita in, tempore placeat praesentium dolore ipsa
            ratione, dolor ipsam saepe, quibusdam nihil neque ea qui officiis.
            Iure nulla est ea minima non porro quia?
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ProductDetailDescription

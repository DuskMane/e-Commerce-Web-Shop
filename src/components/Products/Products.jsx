import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'

const products = [
    {
        id:1,
        name: 'Shoes',
        description: 'Running shoes',
        price: '$75',
        image: 'https://www.rei.com/dam/content_team_010818_52427_htc_running_shoes_hero2_lg.jpg'
    },
    {
        id:2,
        name: 'Macbook',
        description: 'Apple macbook',
        price: '$450',
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661'
    },
]

const Products = () => {
  return (
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
  )
}

export default Products
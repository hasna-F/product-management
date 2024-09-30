import axios from 'axios'
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Home = () => {
    var[pra,newpr]=useState([])
    axios.get("https://fakestoreapi.com/products")
    .then((pro)=>{
        console.log(pro.data)
        newpr(pro.data)
    })
  return (
    <div>
        <h1>Products</h1>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm:2,md:3}}>
        {pra.map((val)=>{
            return(
                <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345}}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title="Product"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {val.description}
        </Typography><br/>
        <Typography variant="body2" sx={{ color: 'text.primary' }}>
         Category:{val.category}
        </Typography><br/>
        <Typography variant="body2" sx={{ color: 'text.primary' }}>
        Rating: {val.rating.rate}  / Count:{val.rating.count}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
            )
            
        })}
        </Grid>
    </div>
  )
}

export default Home
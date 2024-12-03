// import React from 'react';
import { useTheme } from "@emotion/react";
import { Container, Grid, Rating } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from "react";
import { useState } from "react";
import ShoppingCartSharp from "@mui/icons-material/ShoppingCartSharp";
import { useDispatch } from "react-redux";
import { addToCart } from "../feature/cart-slice";


export default function Home() {
  const theme = useTheme();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  async function fetchAllProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const result = await response.json();
    setProducts(result);
  }

  useEffect(() => {
    fetchAllProducts()
  }, []);

  function addPrductToCart(product) {
    //dispatch an action 
    dispatch(addToCart({ product, quantity: 1 }));
  }

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4} >
        {products.map(({ title, id, price, description, rating, image }) => (
          <Grid item key={id} xs={12} sm={6} md={3}>
            <Card xs={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia component="img" sx={{ alignSelf: 'center', width: theme.spacing(30), height: theme.spacing(30), objectFit: 'contain', pt: theme.spacing() }} image={image} alt={title} />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  "-webkit-line-clamp": "1",
                  "-webkit-box-orient": "vertical",
                }}>
                  {title}
                </Typography>
                <Typography color="text.secondary" paragraph sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  "-webkit-line-clamp": "2",
                  "-webkit-box-orient": "vertical",
                }}>
                  {description}
                </Typography>
                <Typography fontSize="large" paragraph>{price}</Typography>
                <Rating readOnly precision={0.5} value={rating.rate} />
              </CardContent>
              <CardActions sx={{ alignSelf: "center" }}>
                <Button variant="contained" onClick={() => addPrductToCart({ title, id, price, description, rating, image })}>
                  <ShoppingCartSharp />
                  Add to cart
                </Button>
                {/* <Button variant="contained">Buy</Button> */}
              </CardActions>
            </Card>
          </Grid>
        ))}

      </Grid>
    </Container>
  );
}

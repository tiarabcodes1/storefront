import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';
import ComingSoon from '../../assets/logo/ComingSoon.png'

import productsSlice, { getProducts } from "../../store/products.slice";
import cartSlice from '../../store/cart.slice';

let { addToCart } = productsSlice.actions;

let { pushInCart } = cartSlice.actions

const ProductDetails = () => {
    let activeProduct = useSelector((state) => state.products.activeProduct);

    let dispatch = useDispatch();

    const handleBuy = (product) => {
        let action = addToCart(product);
        let cartAction = pushInCart(product);

        dispatch(cartAction);
        dispatch(action);
    }

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return(
        <div id='p-content'>
            <ImageList sx={{ width: 1000, height: 600,} }>
            {activeProduct ?
                <>
                <ImageListItem key={activeProduct.id} cols={1}> 
                    <ListSubheader component="div">{activeProduct.name} </ListSubheader>
                    <img
                    src={`${ComingSoon}`}
                    alt='Coming Soon logo'
                    loading="lazy"
                    />
                    <ListSubheader> ${activeProduct.price} In Stock: {activeProduct.inStock}</ListSubheader>
                    <Button variant="contained" onClick={() => handleBuy(activeProduct)} >Add to Cart</Button>
                </ImageListItem>
</>
 :null}
</ImageList>
    
        </div>
    )
}

export default ProductDetails;
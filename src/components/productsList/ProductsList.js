import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';
// import ImageListItemBar from '@mui/material/ImageListItemBar';

// import { incrementInventory, decrementInventory } from '../../store/products';
// import { addProduct } from "../../store/cart";
import {  deactivateProduct, getProducts, addToCart } from "../../store/products";

import ComingSoon from '../../assets/logo/ComingSoon.png'

function ProductsList() {

    let products = useSelector((state) => state.products);
    

    console.log("Filtered Products:", products.filteredProducts);
    let dispatch = useDispatch();


    const handleBuy = (product) => {
        let action = addToCart(product);
        dispatch(action);
    }

    const handleHide = () => {
        let action = deactivateProduct();
        dispatch(action);
    }
    
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
    
    return (
        <div id="product-list">
        <ImageList sx={{ width: 1000, height: 450,}}>

            {products.filteredProducts.length ?
            products.filteredProducts.map((product) => (
                <>
        <ImageListItem key={product.id} cols={1}> 
            <ListSubheader component="div">{product.name} <p>Description:{product.description}</p></ListSubheader>
            {/* <ListSubheader variant="body2"> </ListSubheader> */}
            <img
            src={`${ComingSoon}??w=161&fit=crop&auto=format`}
            srcSet={`${ComingSoon}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt='Coming Soon logo'
            loading="lazy"
          />
            <Button onClick={() => handleBuy(product)}>Add to Cart</Button>
            {/* <Button onClick={() => handleIncrement(product)}>Increment</Button>
            <Button onClick={() => handleDecrement(product)}>Decrement</Button> */}
          </ImageListItem>
          </>
            )) :null}
        </ImageList>

        {products.filteredProducts.length ?
            <Button onClick={() => handleHide()}> Deactivate Products </Button>
            : null }

        </div>
    )
}

// Higher order component.
export default ProductsList;
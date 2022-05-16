import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';
import ComingSoon from '../../assets/logo/ComingSoon.png'

import productsSlice, { getProducts } from "../../store/products.slice";
import cartSlice from '../../store/cart.slice';

let { addToCart, deactivate } = productsSlice.actions;

let { pushInCart } = cartSlice.actions


function ProductsList() {

    let products = useSelector((state) => state.products);

    let dispatch = useDispatch();
   

    const handleBuy = (product) => {
        let action = addToCart(product);
        let cartAction = pushInCart(product);

        dispatch(cartAction);
        dispatch(action);
        console.log("product added:", product.name)
       
    }

    const handleHide = () => {
        let action = deactivate();
        dispatch(action);
    }
    
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
    
    return (
        <div id="product-list">
        <ImageList sx={{ width: 1000, height: 600,} }>

            {products.filteredProducts.length ?
            products.filteredProducts.map((product) => (
                <>
        <ImageListItem key={product.id} cols={1}> 
            <ListSubheader component="div">{product.name} </ListSubheader>
            <img
            src={`${ComingSoon}`}
            alt='Coming Soon logo'
            loading="lazy"
          />
          {/* <ListSubheader component="div"><p>Available:{product.inStock}</p></ListSubheader> */}
            <Button variant="contained" onClick={() => handleBuy(product)} >Add to Cart</Button>
            <Button variant="contained">View Details</Button>
 
          </ImageListItem>
          </>
            )) :null}
        </ImageList>

        {products.filteredProducts.length ?
            <Button variant="contained" onClick={() => handleHide()}> Deactivate Products </Button>
            : null }

        </div>
    )
}

// Higher order component.
export default ProductsList;
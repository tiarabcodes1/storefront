import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';

import ComingSoon from '../../assets/logo/ComingSoon.png'
import productsSlice, { getProducts } from "../../store/products.slice";
import cartSlice from '../../store/cart.slice';

let { addToCart, deactivate, setActiveProduct } = productsSlice.actions;

let { pushInCart } = cartSlice.actions

function ProductsList() {

    let products = useSelector((state) => state.products);

    let dispatch = useDispatch();

    const handleBuy = (product) => {
        let action = addToCart(product);
        let cartAction = pushInCart(product);

        dispatch(cartAction);
        dispatch(action);
      
    }

    const handleHide = () => {
        let action = deactivate();

        dispatch(action);
    }

    const handleDetails = (product) => {
        let action = setActiveProduct(product);

        dispatch(action);
    }
    
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
    
    return (
        <div id="product-list">
            <ImageList sx={{ width: 1000, height: 400,} }>

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
                    <ListSubheader>
                        <p>  ${product.price} In Stock: {product.inStock}</p>
                    </ListSubheader>
                    <Button variant="contained" onClick={() => handleBuy(product)} >Add to Cart</Button>
                    <Link to={`/product/${product._id}`}>
                        <Button variant="contained" onClick={() => handleDetails(product)}>View Details</Button>
                    </Link>

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

export default ProductsList;
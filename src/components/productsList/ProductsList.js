import { useSelector, useDispatch } from "react-redux";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';
// import ImageListItemBar from '@mui/material/ImageListItemBar';

import { incrementInventory, decrementInventory } from '../../store/products';
import { addProduct } from "../../store/cart";

import ComingSoon from '../../assets/logo/ComingSoon.png'

function ProductsList() {

    let products = useSelector((state) => state.products);
    
    // let inventoryCount = useSelector((state) => state.products.inventoryCount);
    let dispatch = useDispatch();

    const handleIncrement = (inventoryCount) => {
        let action = incrementInventory(inventoryCount);
        dispatch(action)
    }
    
    const handleDecrement = (inventoryCount) => {
        let action = decrementInventory(inventoryCount);
        dispatch(action)
    }

    const handleBuy = (product) => {
        let action = addProduct(product);
        dispatch(action);
    }
    console.log("ACTIVE-Products:", products.activeProducts);

    return (
        <div id="product-list">
        <ImageList sx={{ width: 1000, height: 450,}}>

            {products.activeProducts.length ?
            products.activeProducts.map((product) => (
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
            <Button onClick={() => handleIncrement(product)}>Increment</Button>
            <Button onClick={() => handleDecrement(product)}>Decrement</Button>
          </ImageListItem>
          </>

            )) :null}
        </ImageList>
        </div>
    )
}

// Higher order component.
export default ProductsList;
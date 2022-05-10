import { connect } from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';
// import ImageListItemBar from '@mui/material/ImageListItemBar';

import { deactivateProduct, activateProduct, incrementInventory, decrementInventory } from '../../store/products';

import ComingSoon from '../../assets/logo/ComingSoon.png'

function ProductsList({  deactivateProduct, activeProducts }) {

    console.log("ACTIVE", activeProducts);

    return (
        <div id="product-list">
        <ImageList sx={{ width: 1000, height: 450,}}>

            {activeProducts.length ?
            activeProducts.map((product) => (
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
            <Button onClick={() => deactivateProduct()}>Deactivate Product {product.name}</Button>
            <Button onClick={() => incrementInventory(product)}>Increment {product.name}</Button>
            <Button onClick={() => decrementInventory(product)}>Decrement {product.name}</Button>
          </ImageListItem>
          </>

            )) :null}
        </ImageList>
        </div>
    )
}

const mapStateToProps = ({ products }) => {
    console.log('AP', products)
    return {
        activeProducts: products.activeProducts,
        products: products.products
    }
}

const mapDispatchToProps = {
    activateProduct,
    deactivateProduct,
}

// Higher order component.
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
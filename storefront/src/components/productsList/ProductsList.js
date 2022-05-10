import { connect } from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { deactivateProduct, activateProduct, incrementInventory, decrementInventory } from '../../store/products';

import ComingSoon from '../../assets/logo/ComingSoon.png'

function ProductsList({ activateProduct, products, deactivateProduct, activeCategory }) {

    console.log("ACTIVE", activeCategory);
    console.log("FULL PRODUCTS", products);

    return (
        <>
        <ImageList sx={{ width: 1000, height: 450}}>
            {products.map(product => (
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
            <Button onClick={() => activateProduct(product)}>Activate {product.name}</Button>
            <Button onClick={() => deactivateProduct()}>Deactivate Product {product.name}</Button>
            <Button onClick={() => incrementInventory(product)}>Increment {product.name}</Button>
            <Button onClick={() => decrementInventory(product)}>Decrement {product.name}</Button>
          </ImageListItem>
          </>
            ))}
            <IconButton onClick={() => deactivateProduct()}>
                <DeleteIcon />
            </IconButton>
        </ImageList>
        </>
    )
}

const mapStateToProps = ({ products }) => {
    console.log('AP', products)
    return {
        activeProduct: products.activeProduct,
        products: products.products
    }
}

const mapDispatchToProps = {
    activateProduct,
    deactivateProduct,
}

// Higher order component.
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
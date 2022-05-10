import { connect } from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { deactivateProduct, activateProduct, incrementInventory, decrementInventory } from '../../store/products';

function ProductsList({ activateProduct, products, deactivateProduct, activeCategory }) {

    console.log("ACTIVE", activeCategory);
    console.log("FULL PRODUCTS", products);

    return (
        <>
        <ImageList sx={{ width: 1000, height: 450}}>
            {products.map(product => (
                <>
        <ImageListItem key={product.id} cols={2}> 
            <ListSubheader component="div">{product.name} <p>Description:{product.description}</p></ListSubheader>
            {/* <ListSubheader variant="body2"> </ListSubheader> */}
          </ImageListItem>
          <ImageListItem>
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
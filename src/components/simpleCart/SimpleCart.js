import { useSelector, useDispatch } from "react-redux";
import React from 'react'
import Card from '@mui/material/Card';
//Displays a short list (title only) of products in the cart
import { deleteProduct } from '../../store/cart';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'

function SimpleCart() {

  //state for added and removed total items in cart

  let cartList = useSelector((state) => state.cart.addedProducts)
  let itemCount = useSelector((state) => state.cart.productAmount)
  console.log('CARTLIST',cartList)
  let dispatch = useDispatch();

  const handleDelete = (product) => {
    let action = deleteProduct(product);
    // if(product.inventoryCount !== action.payload.inventoryCount  ){
    dispatch(action);
  // }
}

  return (
    <div>
      <h1>You have {itemCount} Selected Products</h1>

      {/* TODO: MAP THROUGH SHORT LIST */}
    {cartList.length ? 
    cartList.map((product) =>(
      <>
      <Card>{product.name}</Card>

          <IconButton onClick={() => handleDelete(product)}>
    <DeleteIcon/>
    </IconButton>
    </>
    )): null}
    

    </div>
  )
}

export default SimpleCart;
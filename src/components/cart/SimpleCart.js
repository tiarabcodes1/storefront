import { useSelector, useDispatch } from "react-redux";
import React from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete'

import cartSlice from '../../store/cart.slice';
let { removeFromCart } = cartSlice.actions;

function SimpleCart() {


  let cartList = useSelector((state) => state.cart.addedProducts)
  console.log("CART",cartList)
  let itemCount = useSelector((state) => state.cart.productAmount)

  let dispatch = useDispatch();

  const handleDelete = (product) => {
    let action = removeFromCart(product);

    if(product){dispatch(action);  
  }

  }

  return (
    <div>

      {cartList.length === 0 ?
      <h1>You have {itemCount} Selected Products</h1>
      : null}
      
    {cartList.length ? 
    cartList.map((product) =>(
      <>
      <Card>{product.name}</Card>
      <Button variant="outlined" onClick={() => handleDelete(product)} startIcon={<DeleteIcon />}>
          Delete
        </Button>
      
          
    </>
    )): null}

{/* {cartList.length  ? */}

         
      {/* // : null} */}


    </div>
  )
}

export default SimpleCart;
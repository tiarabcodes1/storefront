import { useSelector, useDispatch } from "react-redux";
import React from 'react'

import cartSlice from '../../store/cart.slice';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete'

let { removeFromCart } = cartSlice.actions;

function SimpleCart() {

  let cartList = useSelector((state) => state.cart.addedProducts)

  let dispatch = useDispatch();

  const handleDelete = (product) => {
    let action = removeFromCart(product);
    if (product) {
      dispatch(action);
    }
  }

  return (
    <div>
      {cartList.length ?
        cartList.map((product) => (
          <>
            <Card>{product.name}
              <Button variant="outlined" onClick={() => handleDelete(product)} startIcon={<DeleteIcon />}></Button>
            </Card>
          </>
        )) : null}
    </div>
  )
}

export default SimpleCart;
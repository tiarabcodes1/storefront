import { useSelector, useDispatch } from "react-redux";

import cartSlice from '../../store/cart.slice';

let { removeFromCart } = cartSlice.actions;

function ShoppingCart() {
    let cartList = useSelector((state) => state.cart.addedProducts)

    let dispatch = useDispatch();

    const handleDelete = (product) => {
        let action = removeFromCart(product);
        dispatch(action);
    }

    const handleTotal = () => {
        let total = cartList.reduce( (acc, currentItem) =>  acc + currentItem.price, 0);
        return total
    }

    return (
        <div>
            <h2>Order Summary</h2>
            {cartList.length &&
                <>
                    {cartList.map((product) => (
                        <>
                            <p>{product.name} ${product.price}</p>
                            <button variant="outlined" onClick={() => handleDelete(product)} > delete </button>
                        </>
                    ))}
                    <p>Total {handleTotal()}</p> </>}
            <div id='customer-info'>
                <div id='billing'>
                    <form>
                        <label>
                            Billing Address
                            <input placeholder="Full Name" />
                            <input placeholder="Address" />
                            <input placeholder="City" />
                            <input placeholder="State" />
                            <input placeholder="Zip" />
                        </label>
                    </form>
                </div >
                <div id='payment'>
                    <form>
                        <label>
                            Payment details
                            <input placeholder="Credit Card #" />
                            <input placeholder="mm/dd/yyyy" />
                            <input placeholder="CVV" />
                        </label>
                    </form>
                </div>
            </div>
            <button>PLACE YOUR ORDER</button>
        </div>
    )
}
export default ShoppingCart;

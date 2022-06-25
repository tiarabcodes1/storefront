import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SimpleCart from './components/cart/SimpleCart';
import ShoppingCart from './components/cart/ShoppingCart';
import ProductDetails from "./components/products/ProductDetails";
import CategoryList from './components/categoryList/CategoryList';
import ProductsList from './components/products/ProductsList';


import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});

function App() {

  let itemCount = useSelector((state) => state.cart.productAmount)
  let activeProduct = useSelector((state) => state.products.activeProduct)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Link to='/storefront'>
            Home
          </Link>
          <Link to='/cart'>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
            {itemCount}
          </Link>
          <Routes>
            <Route path='/storefront' element={[<CategoryList />, <ProductsList />, <SimpleCart />]} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path={`/product/${activeProduct._id}`} element={[<ProductDetails />, <SimpleCart />]} />
          </Routes>
        </BrowserRouter>
          <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;

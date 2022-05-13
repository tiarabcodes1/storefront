import './App.css';
import CategoryList from './components/categoryList/CategoryList';
import ProductsList from './components/productsList/ProductsList';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import SimpleCart from './components/simpleCart/SimpleCart';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Link to='/storefront'>Home </Link>
      <Link to='/cart'>Cart 
      <IconButton >
      <ShoppingCartIcon/>
      </IconButton></Link>
      <Routes>
      <Route path="/cart" element={<SimpleCart/>} />
      <Route path="/storefront" element={<CategoryList/>} />
      <Route path="/storefront" element={<ProductsList/>} />
      </Routes>
      </BrowserRouter>
      <ProductsList/>

      
      <ThemeProvider theme={theme}>
      <Footer /></ThemeProvider>
    </div>
  );
}

export default App;

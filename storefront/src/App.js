import './App.css';
import CategoryList from './components/categoryList/CategoryList';
import ProductsList from './components/productsList/ProductsList';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';


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
      <ThemeProvider theme={theme}>
      <Header />
      <CategoryList/>
      <ProductsList />
      <Footer /></ThemeProvider>
    </div>
  );
}

export default App;

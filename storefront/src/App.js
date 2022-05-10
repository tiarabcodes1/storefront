import './App.css';
import CategoryList from './components/categoryList/CategoryList';
import ProductsList from './components/productsList/ProductsList';
function App() {
  return (
    <div className="App">
      <CategoryList/>
      <ProductsList />
    </div>
  );
}

export default App;

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import categoriesSlice, { getCategories } from '../../store/categories.slice';
import productsSlice from "../../store/products.slice";
let { filterProducts } = productsSlice.actions;
let { activate } = categoriesSlice.actions;

function CategoryList() {
  let categories = useSelector((state) => state.categories.categories);

  let dispatch = useDispatch();

  const renderCategory = (category) => {
   
    let action = activate(category);
    let productAction = filterProducts(category)
  
    dispatch(action)
    dispatch(productAction)
  }

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch])

  return (
    <div>
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}} id="list">
      {categories.length ?
        categories[0].results.map(category => (
        <Card sx={{ margin: "10px" }} raised key={category.id}>
          <CardContent>
            <Typography gutterBottom variant="h3">{category.name}</Typography>
            <Typography variant="body2" color="text.secondary">Descriptions: {category.description}</Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => renderCategory(category)}>Show Products </Button>
            {/* <Button onClick={() => hideProducts()}> Deactivate Categories </Button> */}
          </CardActions>
        </Card>
      )) : null}
    </Box>
    </div>
  )
}



export default CategoryList;
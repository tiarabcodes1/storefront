import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { activateCategory, getCategory} from '../../store/categories'

function CategoryList() {
  let categories = useSelector((state) => state.categories.categories);
  let cart = useSelector((state) => state.cart.addedProducts);
  let dispatch = useDispatch();

  console.log("FULL CATEGORY",categories);

  const renderCategory = (category) => {
    console.log(category)
    let action = activateCategory(category);
    dispatch(action)
  }

  let itemCount = useSelector((state) => state.cart.productAmount)

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch])

  return (
    <div>
    {cart.length ? 
      <h1>You have {itemCount} Selected Products</h1>
      : null}

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
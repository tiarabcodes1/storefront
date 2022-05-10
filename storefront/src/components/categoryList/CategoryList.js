import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { deactivateCategory, activateCategory } from '../../store/categories';

function CategoryList({ activateCategory, categories, deactivateCategory, activeCategory}) {

  console.log("ACTIVE",activeCategory);
  console.log("FULL CATEGORY",categories);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}} id="list">
      {categories.map(category => (
        <Card sx={{ margin: "10px" }} raised key={category.id}>
          <CardContent>
            <Typography gutterBottom variant="h3">{category.normName}</Typography>
            <Typography variant="body2" color="text.secondary">Descriptions: {category.description}</Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => activateCategory(category)}>Activate {category.normName}</Button>
            <Button onClick={() => deactivateCategory()}>deactivateCategory {category.normName}</Button>
          </CardActions>
        </Card>
      ))}
      <IconButton onClick={() => deactivateCategory()}>
        <DeleteIcon />
      </IconButton>
    </Box>
  )
}

const mapStateToProps = ({ categories }) => {
    console.log('CATEGORY PROPS:',categories)
  return {
    activeCategory: categories.activeCategory,
    categories: categories.categories
  }
}

const mapDispatchToProps = {
  activateCategory,
  deactivateCategory,
}

// Higher order component.
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
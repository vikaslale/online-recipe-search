import React,{useState,useEffect} from 'react';
 import axios from 'axios';
 import Recipe from './recipe';
import "./food.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';



 
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    margin: '50px auto',
    alignItems: 'center',
    width: 300,
     marginTop:'8%',
    border_radius: '100px',
    border: '5px solid black',

  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  
}));


function Food() {
    const classes = useStyles();
     const APP_ID ="3e303dd7";
     const APP_KEY ="314ab15d10da8bbb11c59d143351f815";
     const [recipes,setRecipes] = useState([]);
     const [search,setSearch]= useState("");
     const [query, setQuery] = useState('chicken');
     useEffect(() =>{
          getRecipe();
       },[query]);
    const getRecipe = async () => {
        const response = await axios.get(
     `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
     );
    
    setRecipes(response.data.hits);
    console.log(response.data.hits);
    };
    const updateSearch= (e)=>{
        setSearch(e.target.value);
       
    };
    const updateQuery =(e)=>{
        e.preventDefault();
        setQuery(search);
        setSearch('')
    };
     return (
         <div >
         <Paper  onSubmit={updateQuery} component="form" className={classes.root}>

      <InputBase
      type='text'
      value={search}
      onChange={updateSearch}
        className={classes.input}
        placeholder="Search for recipe..........."
        inputProps={{ 'aria-label': 'search  for recipe..........' }}
      />
      <IconButton type="submit" 
      className={classes.iconButton}
       aria-label="search"
       >
        <SearchIcon />
      </IconButton>
      
     
    </Paper>
         {/*   <form onSubmit={updateQuery}>
         <input type="text" value={search} onChange={updateSearch}/>
                <button type='submt'>Search</button>
     </form> */}
      <div>
     <Grid container  spacing={4}>
                {recipes.map((recipe)=>(
                <Grid item xs={4} sm={3} >
                <Recipe 
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                 action={<IconButton>
                        <AspectRatioIcon/>
                 </IconButton>}
                 calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
                  />   
                  </Grid> 
                ))}


             </Grid>
             </div>
               </div>
         );
     }
export default Food;
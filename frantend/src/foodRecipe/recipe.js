import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {Card,CardHeader,CardActions,CardMedia,CardContent,IconButton,Typography,
   FormControlLabel, Checkbox,FormControl, Dialog, Box,DialogTitle,DialogActions, 
   DialogContent, DialogContentText, Paper,} from '@material-ui/core';
   import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsOverscanIcon from '@material-ui/icons/SettingsOverscan';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { orange } from '@material-ui/core/colors';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 325,
    margin: '10px 0',
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',

 },
     Dialog:{
      

          height: '99%',
         width: 'auto',
    
            },
  rootvikas: {
     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 200px'

  },
  
 Ing:{
      marginLeft: '50%',
      marginTop: '-65%',
 },
}));

const Recipe = ({title, calories,image,ingredients}) => {
     const classes = useStyles();
  const [expanded, setExpanded] =useState(false);
   const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [remember, setRemember] = useState(false);
  const handleChnage = (e)=>{
    setRemember(e.target.checked)
  };

  const [showDialog, setShowDialog] =useState(false);

  const openDialog =()=> setShowDialog(true);
  const closeDialog =()=> setShowDialog(false);
  return(
         <div>  
             <Card className={classes.root}>
      <CardHeader
      title={title}
    
        action={
          <IconButton>
        
            <SettingsOverscanIcon onClick={openDialog} />

                 </IconButton>}
        />
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
      <FormControl>
     
      <CardActions disableSpacing>
      

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>

  <FormControlLabel 
      control={<Checkbox
      
       icon={<FavoriteBorderIcon/>}
       checkedIcon={<FavoriteIcon/>}
      onChange={handleChnage} checked={remember}/>}/> 
      </CardActions>

        </FormControl>
      .
    </Card>

      <Dialog open={showDialog} onClose={closeDialog} disableBackdropClick  className={classes.Dialog}>
        <Paper >
           <DialogActions>
         <HighlightOffIcon onClick={closeDialog} />
           
      </DialogActions >
      
     
         
      <DialogTitle className={classes.rootvikas}>{title}</DialogTitle>
      <DialogContent className={classes.container} >
      <Box >
        <img src={image} alt="image" style={{width:'50%',height:'50%',borderRadius:'5%',marginRight:'30%'}}/>

     <h3>Calories</h3>
             {calories}

     
      
                  <ol className={classes.Ing}>
                 <h2>Ingredients</h2>
               {ingredients.map((ingredient)=> (
                 <li>{ingredient.text}</li>
               
               ))}
          
               </ol>
  
 
  
      
        </Box>
      </DialogContent>

      </Paper>
     
    </Dialog>
     {/*<p>{title}</p>
     <p>{calories}</p>
     <img src={image} alt=""/>
     <ol>
         {ingredients.map((ingredient) => (
      <li>{ingredient.text}</li>
     ))}
         </ol> */}
    </div>
    );
          
  };

export default Recipe;

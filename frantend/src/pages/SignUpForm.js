import React,{useState} from 'react';
import {Dialog, Typography, TextField,Box,Paper, DialogActions, DialogContent,Button} from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

   rootvikas: {
     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 100px'

  }
})
)
const SignUpForm =()=>{
       const classes = useStyles();
  const [showDialog,setShowDialog] = useState(false);
  
  const openDialog =()=> setShowDialog(true);
  const closeDialog =()=>setShowDialog(false);
return(
    <>
    <Dialog open={true} onClose={closeDialog} disableBackdropClick>
  

       <DialogActions>
         <HighlightOffIcon onClick={closeDialog}/>
         </DialogActions>
         
            <DialogContent dividers>
            <Paper component={Box}width="70%" mx="auto" p ={1}>
              
                <Typography variant="h4" className={classes.rootvikas}>Login</Typography>
                  <Box component="form" mt={2}>
                

                 <TextField
                 fullWidth
                 placeholder="Enter Your E-mail"
                 margin="normal"
                 variant="outlined"
                  color="secondary"
                  label="Entar Email"
               />

                 <TextField
                 fullWidth
                 placeholder="Enter Your password "
                 inputType="password"
                 margin="normal"
                 variant="outlined"
                color="secondary"
                label="Password"
               />

              

                
                <Button variant="contained" color="Secondary">Login</Button>

                </Box>
            </Paper>
            </DialogContent>
     
         
     </Dialog>
    
     </>
     
    );

}
export default SignUpForm;
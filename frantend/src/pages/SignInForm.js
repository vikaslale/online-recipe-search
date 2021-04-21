import React,{useState} from 'react';
import {Dialog, Typography, TextField,Box,Paper, DialogActions, DialogContent,Button} from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SignUpForm from '../pages/SignUpForm';
import{BrowserRouter as Router,Route} from 'react-router-dom';

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

const  SignInForm = ()=>{
   const classes = useStyles();
  const [showDialog,setShowDialog] = useState(false);
  
  const openDialog =()=> setShowDialog(true);
  const closeDialog =()=>setShowDialog(false);
return(
    <>
    <Router>
    <Dialog open={true} onClose={closeDialog} >

       <DialogActions>
         <HighlightOffIcon onClick={closeDialog}/>
         </DialogActions>
         
            <DialogContent dividers>
            <Paper component={Box}width="70%" mx="auto" p ={1}>
              
                <Typography variant="h4" className={classes.rootvikas}>Register</Typography>
                  <Box component="form" mt={1}>
                <TextField
                 fullWidth
                 placeholder="Enter Your  name"
                 variant="outlined"
                color="secondary"
                label="Enter_Name"
                name="name"
              
               />

                 <TextField
                 fullWidth
                 placeholder="Enter Your Email "
                 margin="normal"
                 variant="outlined"
                  color="secondary"
                  label="Email_Name"
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

                 <TextField
                 fullWidth
                 placeholder="Enter Your confirm password"
                 margin="normal"
                 variant="outlined"
                 color="secondary"
                 label="Confirm_Password"
               />

                 <Typography >Have an Account?<a href="/sign-up">Login</a></Typography>
                <Button variant="contained" color="Secondary">Register</Button>

                </Box>
            </Paper>
        
  </DialogContent>
     </Dialog>

      <Route path="/sign-i" component={SignUpForm}>
         
          </Route>   
        </Router>
    
     </>
     
    );

}


export default SignInForm;
import React,{useState} from 'react';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle ,Dialog} from
 '@material-ui/core';

 function Userv(){
      const[showDialog, setShowDialog] =useState(false);
  const openDialog =()=> setShowDialog(true);
  const closeDialog=()=> setShowDialog(false);
     
     return(
         <>
          <Dialog open={showDialog} onClose={closeDialog}>
                <DialogTitle>Shivaji maharaj</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                      hivaji Bhonsale I was an Indian ruler and a member of the Bhonsle 
                      Maratha clan. Shivaji carved out an enclave from the declining Adilshahi
                       sultanate of Bijapur that formed the genesis of the Maratha Empire. In 
                       1674, he was formally crowned as the Chhatrapati of his realm at Raigad  
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}> Cancel</Button>
                    </DialogActions>
                </Dialog>
         </>
     )
 }
export default Userv;
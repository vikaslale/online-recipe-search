const { Router } = require('express');
const  express = require('express');


const app = express();

require('./db/conn');

// Login Page
app.use('/', require('./frantend/src/pages/SignInForm'));
app.use('/server',require('./frantend/src/pages/SignUpForm'));



 const port = 7000;
 app.listen(port,()=>console.log(`Server started on port ${port}`));
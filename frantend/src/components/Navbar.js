import React,{useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import { Link } from 'react-router-dom';
import {sidebarData} from './SidebarData';
import './Navbar.css';
import SignInForm from '../pages/SignInForm';
import SignUpForm from '../pages/SignUpForm';
import {IconContext} from 'react-icons'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import{BrowserRouter as Router,Route} from 'react-router-dom';



function Navbar(){
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = ()=>setSidebar(!sidebar)
     
     const [showDialog, setShowDialog]= useState(false);

  const openDialog =()=> setShowDialog(true);
  const closeDialog =()=>setShowDialog(false);
    return (
      <Router>
        <>
        <IconContext.Provider value={{color:'#fff'}}>
      <div className='navbar'>
          
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar}/>
          </Link>
           
           <div className="navbar_logo">
        <div className="logo"><img src='./image/logo.png' alt="logo"/>
        </div>
            </div>
 <ul class ="navbar-right">
      <li><Link to="/sign-in"><i class="fa fa-user-circle-o"></i></Link></li>
      <li><Link  to="/sign-up"><i class="fa fa-sign-in"></i></Link></li>
  </ul>
           </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
            <Link to="#" className='menu-bars'>
                <AiIcons.AiOutlineClose />
                </Link>
                </li>
        {sidebarData.map((item,index)=>{
            return (
             <li key={index} className={item.cName}>
                <Link to={item.path}>
                    {item.icon}
                <span>{item.title}</span>
                 </Link>
                 </li>   
            )
        })}
         </ul>
      
        
         </nav>
       
         </IconContext.Provider>
         <Route path="/">
           </Route>
  
        <Route path="/sign-up" component={SignUpForm}>

        </Route>
        <Route path="/sign-in" component={SignInForm}>
         
          </Route>   
        </>
       </Router>
    );
}

export default Navbar;
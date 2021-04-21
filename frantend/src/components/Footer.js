import React from 'react';
import './Footer.css'

const Footer = ()=> {
    return(
          <div className="main-footer">
        <hr/>
              <div className="container">
             
                       <div className="icon">
                        <ul>
                            <li><i class="fa fa-whatsapp"></i></li>
                            <li><i class="fa fa-instagram"></i></li>
                            <li><i class="fa fa-twitter"></i></li>
                            <li><i class="fa fa-facebook"></i></li>
                            </ul>

                       </div>
                    <div className="row">
                      {/* Column1 */}  
                      <div className="col">
                          <h3> General</h3>
                        
                          <ul className="list-unstyled">
                              <li>Home</li>
                              <li>Sign up</li>
                              <li>Businesses/Restaurateurs</li>
                               <li>Advertising</li>
                              <li>About KindMeal.my</li>
                              <li>Help & FAQ</li>
                               <li>Team & Condition</li>
        
                              </ul>
                          </div> 
                      {/* Column3 */} 
                      <div className="col">
                          <h3> Features</h3>
                          <ul className="list-unstyled">
                             <li>Meat-Free Deals</li>
                             <li>Tasty Menus</li>
                             <li>kind Moments</li>
                             <li>Meat-Free Recipes</li>
                             <li>Food Map</li>
                             <li>Latest Comment</li>
                              </ul>
                          </div>
                           {/* Column3 */} 
                      <div className="col">
                          <h3> Social MEdia</h3>
                          <ul className="list-unstyled">
                              <li>KindMeal widget</li>
                              <li>Facebook</li>
                              <li>Twitter</li>
                              <li>Instagram</li>
                              </ul>
                          </div>
                           <div className="col">
                          <h4> Mobile</h4>
                          <ul className="list-unstyled">
                              <li>iPhone & iPad App</li>
                              <li>Android App</li>
                           
                              </ul>
                          </div>
                          <div className="col">
                          <h3> PetFinder.my</h3>
                          <ul className="list-unstyled">
                              <li>Adopt A Pet</li>
                              <li>Smartphone Apps</li>
                              <li>WAGazine</li>
                              <li>Discussion Forum</li>
                              <li>Medical Fund</li>
                            </ul>
                          </div>
                         </div>
                        
        <div className="row">
             <p className="link">
                
       

           <p> created By- Vik@sl@le</p>
       </p>
       </div>
        </div>
       </div>
        
    )

}
export default Footer;
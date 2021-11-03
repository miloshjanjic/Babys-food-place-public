import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/index.css'

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Breakfast } from './components/Breakfast';
import { Brunch } from './components/Brunch';
import { Lunch } from './components/Lunch';
import { Dinner } from './components/Dinner';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { MyProfile } from './components/MyProfile';
import { MyRecipes } from './components/MyRecipes';
import { RecipeCreateEdit } from "./components/RecipeCreateEdit";
import { RecipeView } from './components/RecipeView';
import { AuthProvider } from './context/AuthContext';

// private route = da baram komponenta vo podloga da ja ima rutata dokolku postoi token
// da prodolzi vo myprofile a dokolku ne da me vrati na login

const App = () => {

  return (
    <div className='app'>

      <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/breakfast' component={Breakfast} />
          <Route path='/brunch' component={Brunch} />
          <Route path='/lunch' component={Lunch} />
          <Route path='/dinner' component={Dinner} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route exact path='/view' component={RecipeView} />
          <Route exact path='/recipes' component={MyRecipes} />
          <Route exact path='/recipes/new' component={RecipeCreateEdit} />
          <Route exact path='/recipes/:id' component={RecipeCreateEdit} />
          <Route exact path='/:userId/myProfile' component={MyProfile} />
        </Switch>
      <Footer />

    </div>
  )
};

export default App;


////////////////////////////// DimeApp.js 


// import {  Route, Switch } from "react-router-dom";
// import { Container } from "semantic-ui-react";
// import HomePage from "../../features/home/HomePage";
// import NewPassword from "../../features/authentication/NewPassword";
// import UserDetails from "../../features/users/UserDetails";
// import FarmDetails from "../../features/farms/FarmDetails";
// import { ToastContainer } from "react-toastify";
// import PrivateRoute from "./PrivateRoute";
// import Chat from "../../features/conversation/Chat";
// import RegistrationPage from "../../features/authentication/registration/RegistrationPage";
// import LoginPage from "../../features/authentication/LoginPage";
// import EditFarmDetails from "../../features/farms/EditFarmDetails";
// import ProducerProductList from "../../features/products/ProducerProductList";
// import LandingPage from "../../features/home/LandingPage";
// import AboutUsPage from "../../features/home/AboutUsPage";
// import SupportPage from "../../features/home/SupportPage";

// function App() {
//   return (
//     <>
//       <ToastContainer position="bottom-right" hideProgressBar />

//       <Container className='container-main'>

//         <Switch>
//           <Route exact path="/" component={LandingPage} />
//           <Route exact path="/AboutUs" component={AboutUsPage} />
//           <Route exact path="/Support" component={SupportPage} />
//           <Route exact path="/map_widget" component={HomePage} />
//           <Route path="/Login" component={LoginPage} />
//           <Route path="/Register" component={RegistrationPage} />
//           <Route path="/newPassword/:email/:token" component={NewPassword} />
//           <PrivateRoute exact path="/profiles/:userId" component={UserDetails} />
//           <PrivateRoute path="/profiles/:userId/:farmId/products" component={ProducerProductList} />
//           <PrivateRoute path="/profiles/:farmId/edit" component={EditFarmDetails} />
//           <PrivateRoute  path="/farms/:farmId" component={FarmDetails} />
//           <PrivateRoute path="/conversation/:receiverId?/:firebaseId?" component={Chat} />
//         </Switch>

//       </Container>
//     </>
//   );
// }

// export default App;

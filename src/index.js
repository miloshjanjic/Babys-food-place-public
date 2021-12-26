import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux'; //to acces useState from anywhere
import Store from './Store'; //keeps the States

export const history = createBrowserHistory();

ReactDOM.render(

  <React.Fragment>
    {/* <Router> */}

      <Provider store={Store}>
        <Router history={history}>

            <App />

        </Router>
      </Provider>

    {/* </Router> */}
  </React.Fragment>,
  document.getElementById('root')
);


/////////////////////// index

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App/layout/App";
// import reportWebVitals from "./App/layout/reportWebVitals";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "semantic-ui-css/semantic.min.css";
// import "react-notifications/lib/notifications.css";
// import "react-toastify/dist/ReactToastify.min.css";
// import "./assets/sass/app.scss";
// import {createBrowserHistory} from 'history';
// import { BrowserRouter, Router } from "react-router-dom";
// import { FarmarketAuthProvider } from "./App/contexts/FarmarketAuthContext";
// import { UsersProvider } from "./App/contexts/UsersContext";
// import { FarmsProvider } from "./App/contexts/FarmsContext";
// import { ProductsProvider } from "./App/contexts/ProductsContext";
// import { FirebaseAuthProvider } from "./App/contexts/FirebaseAuthContext";
// import { ConversationProvider } from "./App/contexts/ConversationContext";
// import ScrollToTop from "./App/layout/ScrollToTop";

// export const history = createBrowserHistory();

// ReactDOM.render(
//   <React.Fragment>
//     <BrowserRouter>
//     <Router history={history}>
//     <ScrollToTop />

//       <FirebaseAuthProvider>
//         <FarmarketAuthProvider>
//           <UsersProvider>
//             <FarmsProvider>
//               <ProductsProvider>
//                 <ConversationProvider>

//                 <App />

//                 </ConversationProvider>
//               </ProductsProvider>
//             </FarmsProvider>
//           </UsersProvider>
//         </FarmarketAuthProvider>
//       </FirebaseAuthProvider>
//       </Router>

//     </BrowserRouter>
//   </React.Fragment>,
//   document.getElementById("root")
// );

// reportWebVitals();
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
   <>
   <BrowserRouter>
   <div>
   <Route exact path= "/" component={ SignIn }></Route>
   <Route exact path= "/SignUp" component={ SignUp }></Route>
   </div> 
   </BrowserRouter>
   </>
  );
}

export default App;

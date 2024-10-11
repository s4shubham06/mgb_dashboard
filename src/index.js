import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./pages/style.css";
import Mainpage from './dashboard/Mainpage';
import Mynavigationbar from './dashboard/Mynavigationbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
  <Routes>
    <Route path='' element={<Mainpage/>}>
    <Route path='' element={<Mynavigationbar/>}/>

    
    </Route>
  </Routes>
</BrowserRouter>
  </React.StrictMode>
);



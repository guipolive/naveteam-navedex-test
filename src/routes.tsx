import React from 'react';

// Depois de instalarmos isso, temos que instalar o @types
import {BrowserRouter, Route} from 'react-router-dom';

import AddNaver from './pages/AddNaver';
import Home from './pages/Home';
import Login from './pages/Login';

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/add-naver" component={AddNaver} />
        </BrowserRouter>
    )
}

export default Routes;
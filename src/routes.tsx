import React from 'react';

// Depois de instalarmos isso, temos que instalar o @types
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
        </BrowserRouter>
    )
}

export default Routes;
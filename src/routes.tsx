import React from 'react';

// Depois de instalarmos isso, temos que instalar o @types
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/Login';

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" component={Login} />
        </BrowserRouter>
    )
}

export default Routes;
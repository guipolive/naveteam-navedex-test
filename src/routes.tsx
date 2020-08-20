import React from 'react';

// Depois de instalarmos isso, temos que instalar o @types
import {BrowserRouter, Route} from 'react-router-dom';

// Importando as páginas
import AddNaver from './pages/AddNaver';
import AttNaver from './pages/AttNaver';
import Home from './pages/Home';
import Login from './pages/Login';

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/add-naver" component={AddNaver} />
            <Route path="/att-naver/:id" component={AttNaver} />
        </BrowserRouter>
    )
}

export default Routes;
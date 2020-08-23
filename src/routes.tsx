import React, { useEffect, useState } from 'react';

// Depois de instalarmos isso, temos que instalar o @types
import {BrowserRouter, Redirect, Route} from 'react-router-dom';

import { CookiesProvider } from 'react-cookie';

// Importando as páginas
import AddNaver from './pages/AddNaver';
import AttNaver from './pages/AttNaver';
import Home from './pages/Home';
import Login from './pages/Login';

// function Routes() {
const Routes = () => {

    return(
        <CookiesProvider>
            <BrowserRouter>
                <Route 
                        path="/"
                        exact
                        component={Login}
                />

                <Route
                    path="/home"
                    component={Home}
                />

                <Route
                    path="/add-naver" 
                    component={AddNaver} 
                />

                <Route
                    path="/att-naver/:id"
                    component={AttNaver}
                />
            </BrowserRouter>
        </CookiesProvider>
        
    )
}

export default Routes;
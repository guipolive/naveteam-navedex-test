import React, { useEffect, useState } from 'react';

// Depois de instalarmos isso, temos que instalar o @types
import {BrowserRouter, Redirect, Route} from 'react-router-dom';

import { CookiesProvider } from 'react-cookie';

// Importando as páginas
import AddNaver from './pages/AddNaver';
import AttNaver from './pages/AttNaver';
import Home from './pages/Home';
import Login from './pages/Login';
import {isUserAuthorized} from './services/api';

// function Routes() {
const Routes = () => {

    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        setIsAuthorized(isUserAuthorized());
    }, [isAuthorized])

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
                >
                    {/* {isUserAuthorized() ? 
                        null
                    : <Redirect to="/" />} */}
                </Route>

                <Route
                    path="/add-naver" 
                    component={AddNaver} 
                >
                    {isAuthorized ? 
                        null
                    : <Redirect to="/" />}
                </Route>

                <Route
                    path="/att-naver/:id"
                    component={AttNaver}
                >
                    {isAuthorized ? 
                        null
                    : <Redirect to="/" />}
                </Route>

                {/* <Route 
                    path='*' 
                    render={() => 
                        (<Redirect to="/"/>)
                    }
                /> */}

                {/* <Redirect to="/" /> */}
            </BrowserRouter>
        </CookiesProvider>
        
    )
}

export default Routes;
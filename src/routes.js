import React from 'react'
import { Route } from 'react-router'

import App from './components/App'
import LoginPage from './components/LoginPage'
import Brands from './components/Brands/BrandsPage'
import Phones from './components/Phones'
import Templates from './components/Templates'
import NotFound from './components/NotFound'

export const routes = (
    <div>
        <Route path='/' component={App} onEnter={requireAuth}>
            <Route path='/brands' component={Brands} />
            <Route path='/phones' component={Phones} />
            <Route path='/templates' component={Templates} />
        </Route>
        <Route path='/login' component={LoginPage} />
        <Route path='*' component={NotFound}/>
    </div>
);

function requireAuth(nextState, replace) {
    if (!sessionStorage.access_token) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}
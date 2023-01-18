import React from "react";
import {BrowserRouter, Route, Switch , Redirect } from 'react-router-dom';
import Login from "../componentes/login/Login";
import Painel from '../componentes/painel/Painel';

const Routes = () => {
    return (
        <BrowserRouter>
          <Switch>

            <Route exact path="/" component={Login} />
            <Route path="/painel" component={Painel} />

            <Redirect from="*" to="/" />
            
         </Switch>
      </BrowserRouter>
    );
}
export default Routes;

import React from "react";
import {BrowserRouter, Route, Switch , Redirect } from 'react-router-dom';
import Login from "../componentes/login/Login";
import Painel from '../componentes/painel/Painel';
import Agenda from '../componentes/agenda/Agenda';
import Servicos from '../componentes/servicos/Servicos';

const Routes = () => {
    return (
        <BrowserRouter>
          <Switch>

            <Route exact path="/" component={Login} />
            <Route path="/painel" component={Painel} />
            <Route path="/agenda" component={Agenda}/>
            <Route path="/servicos" component={Servicos}/>
            <Redirect from="*" to="/" />
            
         </Switch>
      </BrowserRouter>
    );
}
export default Routes;

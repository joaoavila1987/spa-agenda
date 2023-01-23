import React from "react";
import {BrowserRouter, Route, Switch , Redirect } from 'react-router-dom';
import Login from "../componentes/login/Login";
import Painel from '../componentes/painel/Painel';
import Agenda from '../componentes/agenda/Agenda';
import Servicos from '../componentes/servicos/Servicos';
import MinhaSemana from "../componentes/minhaSemana/MinhaSemana";
import Dia from "../componentes/dia/Dia";
import Configuracoes from "../componentes/configuracoes/Configuracoes";
import MinhaConta from "../componentes/minhaConta/MinhaConta";

const Routes = () => {
    return (
        <BrowserRouter>
          <Switch>

            <Route exact path="/" component={Login} />
            <Route path="/painel" component={Painel} />
            <Route path="/dia" component={Dia} />
            <Route path="/semana" component={MinhaSemana} />
            <Route path="/agenda" component={Agenda}/>
            <Route path="/servicos" component={Servicos}/>
            <Route path="/configuracoes" component={Configuracoes}/>
            <Route path="/minha-conta" component={MinhaConta}/>
            <Redirect from="*" to="/" />
            
         </Switch>
      </BrowserRouter>
    );
}
export default Routes;

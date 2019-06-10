import React from 'react'
import {Route, Switch} from 'react-router-dom'

//componentes que se cargan 
import App from './components/App'
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Page404 from "./components/Page404";

//configurando las rutas


const AppRouter = () => (
  <App>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/" component={Home} />
      <Route component={Page404} /> 
    </Switch>
  </App>
);

export default AppRouter
//exact para que realize un match exacto
//si no hace match en ninguna URL va a ejecutar Page404
//Switch: las rutas para que funciones como una especie switch


import {  Route, Switch  } from "react-router-dom";
import App from "./App.js"
import ListPokemon from "./views/ListPokemon.js"
import DetailPokemon from "./views/DetailPokemon.js"

const configRouter = () => (
    <App>
      <Switch>
          <Route exact path="/" component={ListPokemon}/>
          <Route  path="/:name" component={DetailPokemon}/>
      </Switch>
    </App>
  );
  
  export default configRouter;
  
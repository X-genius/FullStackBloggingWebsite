import {BrowserRouter as Router , Route ,  Switch} from "react-router-dom";
import {Provider} from "react-redux";
import Home from "./components/Home";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import './main.scss';
import Navbar from "./components/Navbar";
import Store from "./store";
import Dashboard from "./components/dashboard";
import PrivateRoute from './private/PrivateRoute';
import RouteLinks from './private/RouteLink';
import NotFound from './components/NotFound';
import Create from './components/create';
function App() {
  return (
    <Provider store = {Store}>
    <Router>
      <Navbar/>
        <Switch>
           <Route path ="/" exact component={Home} />
           <RouteLinks path = "/register" exact component={Register} />
           <RouteLinks path = "/login" exact component={Login} />
           <PrivateRoute path = "/dashboard" exact component={Dashboard} />
           <PrivateRoute path = "/create" exact component={Create} />
           <Route component = {NotFound}/>
        </Switch>
    </Router>
    </Provider>
  );
}

export default App;

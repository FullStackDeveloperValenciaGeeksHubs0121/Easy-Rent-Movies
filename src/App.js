
import './App.css';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import Peliculas from './containers/Directorio-peliculas/Peliculas';
import MProfile from './containers/Movie-profile/Movie-profile';

function App() {
  return (

    <div className="App">

      <BrowserRouter>
      
       <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/login' exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/peliculas" exact component={Peliculas}/>
          <Route path='/movieProfile' exact component={MProfile}/>


       </Switch>

      </BrowserRouter>
      
    </div>
  );
}

export default App;

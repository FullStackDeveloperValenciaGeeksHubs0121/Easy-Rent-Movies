
import './App.css';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';

function App() {
  return (

    <div className="App">

      <BrowserRouter>
      
       <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/Login' exact component={Login}/>
          <Route path="/Register" exact component={Register}/>
         {/* <Route path="/Profile" exact component={Profile}/>*/}

       </Switch>

      </BrowserRouter>
      
    </div>
  );
}

export default App;

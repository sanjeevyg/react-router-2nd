import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';

function App() {

  return (
    <Switch>
      <Route exact path='/' render={(routerProps) => <Home {...routerProps}/>} />
      <Route exact path='/contact'component={Contact} />
      <Route exact path='/about' render={(routerProps) => <About {...routerProps} name='Yogi' />} />
      <PrivateRoute path='/profile' component={About} />
    </Switch>
  );
}  

function PrivateRoute({component:Component, ...props}) {
  return localStorage.token ?
  <Route {...props} render={(routerProps) => <Component {...routerProps} {...props} />} />
  :
  <Redirect to='/login'/>

}

export default App;

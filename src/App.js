//import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import { Component } from 'react';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';
import MainComponent from './components/MainComponent'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/ConfigureStore';

const store = ConfigureStore();

class App extends Component{
 
  render(){
    
    return (
      <Provider store = {store}>
      <BrowserRouter>
      <div className="App">
       <MainComponent/>
      </div>
      </BrowserRouter>
      </Provider>
    );

  }
  
}

export default App;

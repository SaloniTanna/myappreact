import React from 'react';
import { BrowserRouter as Router ,Route,Link,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

/*
import logo from './logo.svg';
import { ReactDOM } from 'react-dom';

import './App.css';

function App() {
  return (
        <div>
        <h1>Welcome to React</h1>
        <Header/>
        <Footer/>
        </div>
  );
}

  function Header() {
    return (
          <h1>Welcome to Header</h1>
    );
    }

    function Footer() {
      return (
            <h1>Welcome to Footer</h1>
      );
      }


class App extends React.Component
{
  render(){
    return(
      <div>
        <h1>H1</h1>
        <h2>H2</h2>
        {this.props.firstname}
        {this.props.secondname}
      </div>
    )
*/
class App extends React.Component
{
  constructor(){
    super();
    this.state ={
      demo1 : "One",
      demo2 : "Two",
      count : 0
    }
  }

  btnclick()
  {
    this.setState({
      count:this.state.count + 1
    })
  }
  render(){
    return(
    <div>
      <Router>
      <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
          </ul>
          <Routes>
            <Route  path='/' element={<Home />} />
            <Route  path='/about' element={<About />} />
          </Routes>
      </Router>
        <h2>{this.state.demo1}</h2>
        <h2>{this.state.demo2}</h2>
        <h3>Value is :{this.state.count}</h3>
        <button onClick={this.btnclick.bind(this)}>Click Me</button>

        </div>
    )
  }
}


export default App;

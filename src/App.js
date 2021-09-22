import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Card from './Components/Card/Card';

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false
    }
  }


   onRouteChange = (route) => {
     if (route ==='signout') {
       this.setState({isSignedIn : false})
     }else if (route === 'home') {
       this.setState({isSignedIn:true})
     }
    this.setState({route: route});
   }
   
  render() {
    return (
      <div className="App">
              <Particles className='particles'
                params={{
                  particles: {
                    line_linked: {
                      shadow: {
                        enable: true,
                        color: "#3CA9D1",
                        blur: 5
                      }
                    }
                  }
                }}
              />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        {this.state.route === 'home' ?
          <div>
            <Logo/>
            <Card/>
          </div> : 
          (
            this.state.route ==='signin' ?
             <Signin onRouteChange={this.onRouteChange}/>
            :<Register onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;

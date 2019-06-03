import React, {Component} from 'react'
import logo from './img/logo.svg'
import './style/App.css'

class Header extends Component{
    constructor() {
        super()
    
        this.state = {
             
        }
    }
    
    render(){
        return (
          <div className="Header">
            <div className="logo">
              <img src={logo}  alt="logo" />
              <h2>Hello world React {this.props.name}</h2>
            </div>
          </div>
        );
    }
}

export default Header
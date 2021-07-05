import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom' //para crear enlaces como a como router-link en vue.js 

//assest
import logo from './img/logo.svg'
import './style/App.css'

class Header extends Component{
    constructor() {
        super()
    
        this.state = {
             
        }
    }
    //validando las propiedades 
    static propTypes = {
      items : PropTypes.array.isRequired,
      name :  PropTypes.string
    }
    
    render(){
      const {name, items} = this.props
        return (
          <div className="Header">
            <div className="logo">
              <img src={logo} className="App-logo " alt="logo" />
              <h2>Hello world React {name}</h2>
              <ul className="Menu">
                {items && items.map((item, key) => {
                    return <li key={key}><Link to={item.url}>{item.title}</Link></li>
                })}
              </ul>
            </div>
          </div>
        );
    }
}

export default Header
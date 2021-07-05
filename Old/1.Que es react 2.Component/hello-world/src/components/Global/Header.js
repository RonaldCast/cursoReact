import React, {Component} from 'react'
import PropTypes from 'prop-types'

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
                    return <li key={key}>{item.title}</li>
                })}
              </ul>
            </div>
          </div>
        );
    }
}

export default Header
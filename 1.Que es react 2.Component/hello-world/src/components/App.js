import React, {Component} from 'react';
import '../components/Global/style/App.css' 

//components
import Header from './Global/Header'
import Content from './Global/Content'
import Footer from './Global/Footer' 

//Data 
import items from '../data/menu'

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       name : ''
    }
    this.handleName = this.handleName.bind(this)
  }
  handleName(e){

    this.setState({
     name : e.target.value
    })
  }
  render(){
    return (
      <div className="App">
        <Header name={this.state.name} items={items} />
        <input type="text" onChange={this.handleName} />
        <Content />
        <Footer copyright="&copy; Codeods 2019"/>
      </div>
    );
  }
  
}
export default App;

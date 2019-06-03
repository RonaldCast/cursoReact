import React, {Component} from 'react';
import '../components/Global/style/App.css' 

//components
import Header from './Global/Header'
import Content from './Global/Content'
import Footer from './Global/Footer' 

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       name : ''
    }
    this.handleName = this.handleName.bind(this)
  }
  handleName(e){
    console.log(e.target.value)
    this.setState({
     name : e.target.value
    })
  }
  render(){
    return (
      <div className="App">
        <Header name={this.state.name} />
        <input type="text" onChange={this.handleName} />
        <Content />
        <Footer/>
      </div>
    );
  }
  
}
export default App;

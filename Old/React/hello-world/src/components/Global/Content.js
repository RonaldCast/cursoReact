import React, { Component } from "react";
import PropTypes from 'prop-types'

import "./style/content.css";

export default class Content extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  }

  render() {
    const {body} = this.props
    return (
      <div className="Content">
       {body}
      </div>
    );
  }
}


// import React, { Component } from 'react'
// import './style/content.css'

// export default class Content extends Component {
//     constructor(){
//         super()

//         this.state = {
//             counter : 0,
//             number1 : 0,
//             number2 : 0,
//             result : 0
//         }

//         this.handleCountClick = this.handleCountClick.bind(this)
//         this.handleResultClick = this.handleResultClick.bind(this)
//         this.handleInputChanged = this.handleInputChanged.bind(this)
//     }
//     handleResultClick(){
//         this.setState({
//             result : this.state.number1 + this.state.number2
//         })
//     }
//     handleInputChanged(e){
//         if(e.target.id === 'number1'){
//             this.setState({
//                 number1 : Number(e.target.value)
//             })
//         }
//          if (e.target.id === "number2") {
//            this.setState({
//              number2 : Number(e.target.value)
//            });
//          }

//     }

//     handleCountClick(e){
//         if(e.target.id === 'add'){
//             this.setState({
//                 counter : this.state.counter + 1
//             })
//         }

//         if(e.target.id === 'subtract' && this.state.counter > 0){
//                this.setState({
//                  counter: this.state.counter - 1
//                });
//         }

//         if(e.target.id === 'reset'){
//             this.setState({
//                 counter : 0
//             })
//         }
//     }

//     componentDidMount(){
//         this.setState({
//             counter : 1
//         })
//     }

//     render() {
//         return (
//           <div className="Content">
//             <h1>{this.state.counter}</h1>
//             <button id="add" onClick={this.handleCountClick}>
//               +
//             </button>
//             <button id="subtract" onClick={this.handleCountClick}>
//               -
//             </button>
//             <button id="reset" onClick={this.handleCountClick}>
//               Reset
//             </button>

//             <h2> Calculator </h2>

//             <input
//               type="number"
//               id="number1"
//               value={this.state.number1}
//               onChange={this.handleInputChanged}
//             />
//             <input
//               type="number"
//               id="number2"
//               value={this.state.number2}
//               onChange={this.handleInputChanged}
//             />

//             <button id="result" onClick={this.handleResultClick}>
//               =
//             </button>
//             {this.state.result}
//           </div>
//         );
//     }
// }

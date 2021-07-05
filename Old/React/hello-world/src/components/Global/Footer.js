import React, { Component } from 'react'
import PropType from 'prop-types'
//assest
import './style/footer.css'
class Footer extends Component {


    render() {
      const {copyright = "&copy; React.js"} = this.props
        return (
          <div className="footer">
            <p dangerouslySetInnerHTML={{__html: copyright}}/>
          </div>
        );
    }
}

Footer.protoType = {
  copyright : PropType.string.isRequired 
}

export default Footer

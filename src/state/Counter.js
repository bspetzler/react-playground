import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = { count: 0 }
      }
    
    static defaultProps = {
        count: 5
    }

    /*state = { // initializes state without needing to write a constructor
      count: 0
    };*/
    // Example 1 to fix TypeError: Cannot read property 'state' of undefined: constructor bind, 'a bit verbose'
    /*constructor(props) {
        super(props)
        this.state = {
          count: 0
        }
        this.handleButtonClick = this.handleButtonClick.bind(this)
      }*/
    
    /*handleButtonClick() {
        console.log('clicked!');
        console.log(this.state.count) // TypeError: Cannot read property 'state' of undefined
      }*/

      handleButtonClick = () => {
        console.log(this.state.count)
        console.log('props in handleButtonClick', this.props)
        console.log('state in handleButtonClick', this.state)
        const newCount = this.state.count + this.props.count
        this.setState({
            count: newCount
          })
      }
      
    render() {
      return (
        <div>
          <p>The current count: {this.state.count}</p>
          {/* </div><button onClick={function() { console.log('clicked!') }}>*/}
          <button onClick={this.handleButtonClick}>
            Add 1
          </button>
        </div>
      )
    }
}

  export default Counter
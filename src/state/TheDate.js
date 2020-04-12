import React from 'react';

class TheDate extends React.Component {
    constructor(props) { // the constructor is used by React internals when components are created, life-cycle method
        super(props) // used super here to repeat the functionality that was defined in the constructor inside the React.Component class.
        /*this.state = {
            foo: 'foo',
            hello: 'Hello, world!',
            list: [1, 2, 3],
            obj: { nested: 'object', yes: true },
        }*/
        this.state = { datetime: new Date() }; // With the working constructor in place, we can add state to this component, State is often set as an object
        console.log(this);
      } 
      componentDidMount() { 
        setInterval(() => {
          //console.log('tick') //Open the Chrome DevTools console tab and see the 'tick' being logged every second.
          // this.state.datetime = new Date() // can't update the state this weay, React needs to be notified, this directly mutates the component state without telling React
          this.setState({ // this is the right way to update the state
            datetime: new Date()
          })
        }, 1000)
      }

      componentWillUnmount() { // 
        clearInterval(this.interval) // clean up if a component gets unmounted
      }
    
      render() {
        //console.log(this.state)
        return (
          // <div>{this.state.hello}</div> // access this.state
          <div>{this.state.datetime.toLocaleString()}</div>
        )
      }
}
/*we've set an initial state in the constructor method and then 
read that state within the render. We accessed the datetime property 
on the state object and used the date method toLocaleString() to display the date in a human-readable format.*/
export default TheDate
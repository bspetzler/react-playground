import React, {Component} from 'react';

class RouletteGun extends Component{
    static defaultProps = {
        bulletInChamber: 8
    }

    state = {
        chamber: null, 
        spinningTheChamber: false
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    /*handleTimeout = () =>{
        console.log('handleTimeout ran')
        this.setState({
            spinningTheChamber: false
        })
        console.log('spinningTheChamber: ' + this.state.spinningTheChamber)
        return Math.ceil(Math.random() * 8)
    }*/

    handleClick = () =>{
        console.log('handleClick ran')
        this.setState({ // ****every time the state is changed, render runs****
            spinningTheChamber: true,
        })
        console.log('spinningTheChamber: ' + this.state.spinningTheChamber)
        this.timeout = setTimeout(() => {
            const random = Math.ceil(Math.random() * 8)

        this.setState({
            chamber: random, 
            spinningTheChamber: false
        })

        }, 2000)
        /*
        let timeout = setTimeout(this.handleTimeout, 2000)
        //timeout = 2s => random # generated
        // new value for chamber and spinningTheChamber: false
        this.handleOutput(timeout)*/
    }

    renderDisplay(){
        console.log('Output ran')
        const { chamber, spinningTheChamber} = this.state
        const {bulletInChamber} = this.props
        if(spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber){
            return 'BANG!'
        } else {
            return 'you safe boii'
        }
    }

    render(){
        console.log('render ran')
        console.log('prop: ' + this.props.bulletInChamber)
        console.log('chamber state: ' + this.state.chamber)
        console.log('spinningTheChamber: ' + this.state.spinningTheChamber)
        return (
        <div>
            <button onClick={this.handleClick}>Pull the Trigger</button>
            <p>{this.renderDisplay()}</p>
        </div>
        )
    }
}

export default RouletteGun
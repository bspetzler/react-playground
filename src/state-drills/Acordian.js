import React, {Component} from 'react';

export default class Acordian extends Component {
    state ={
        currentIndex: null
    }

    static defaultProps = {
        sections: []
    }

    handelButtonClick = (index) =>{
        this.setState({ currentIndex: index });
        //console.log(this.state.currentIndex)
    }

    renderContent(sec, index, showing){
        //console.log(showing)
        return (
                <li key={index}>
                    <button onClick ={() => this.handelButtonClick(index)}> {sec.title} </button>
                    {(showing === index) && <p>{sec.content}</p>} {/*Conditional rendering */}
                </li>
          )
    }

    render(){
        const showing = this.state.currentIndex
        return (
            <ul className='content'>
                {this.props.sections.map((sec, index) => 
                    this.renderContent(sec, index, showing)
                )}
            </ul>
        )
    }
}
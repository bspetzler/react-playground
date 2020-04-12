import React from "react";

class Tabs extends React.Component {
    static defaultProps = { tabs: [] };
    state = {
        currentTabIndex: 0
    };

    handleButtonClick = (index) => {
        this.setState({ currentTabIndex: index }); // sets state of currentTabIndex to index passed in by the event handler after the button is pushed
        console.log('button clicked!')
      }

    renderButtons() {
        return this.props.tabs.map((tab, index) => (
          <button key={index} onClick={() => this.handleButtonClick(index)}> {/*adding a new prop to each button breaks the snapshot, type 'u' in teh test interface in the console to reset*/}
          {/*() => this.handleButtonClick(index) vs. just this.handleButtonClick let's us know what button is pushed using the index*/}
            {tab.name}
          </button>
        ))
      }

      renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
          <div className='content'>
            {currentTab.content}
          </div>
        )
      }

      render() {
        return (
          <div>
            {this.renderButtons()}
            {/* only show content when the tabs array has length */}
            {!!this.props.tabs.length && this.renderContent()} {/*coerce the .length call inside render into a boolean using not-not, !! */}
          </div>
        )
      }
}

export default Tabs;
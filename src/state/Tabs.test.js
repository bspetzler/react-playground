import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Tabs from './Tabs';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`Tabs Component`, () => {
    const tabsProp = [
        { name: 'First tab',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
        { name: 'Second tab',
          content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { name: 'Third tab',
          content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
      ];
    /* react-test-renderer tests
    it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the first tab by default', () => {
        const tree = renderer.create(<Tabs tabs={tabsProp} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    */

    // run test using enzyme

    it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Tabs />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the first tab by default', () => {
    const wrapper = shallow(<Tabs tabs={tabsProp} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('closes the first tab and opens any clicked tab', () => { //test a button being pressed
    const wrapper = shallow(<Tabs tabs={tabsProp} />)
    wrapper.find('button') // traverse to button
    console.log('>>> WRAPPER <<<')
    console.log(wrapper.debug())
    console.log('>>> FIND(BUTTON) <<<')
    console.log(wrapper.find('button').debug()) // css selector for buttons
    console.log(wrapper.find('button').at(1).debug()) // selects the second button, debug method shows the html of the selection
    wrapper.find('button').at(1).simulate('click') //simulates a click at the selection
    expect(toJson(wrapper)).toMatchSnapshot() // compares Json of wrapper to snapshot
    /*To test that this test works, temporarily comment out the setState call inside the Tab component 
    to see Jest point out it isn't working. Then uncomment the call to restore the functionality.*/
  })

  //There's a quirk with the key prop being shown in snapshots from Jest, so just press u again to update the snapshots.
})
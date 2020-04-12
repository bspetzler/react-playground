import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import TheDate from './TheDate'

describe(`TheDate Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TheDate />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it.skip('renders the UI as expected', () => { // won't work becasue the date is rendered new every time and the last snapshot will never match
    /*allows us to keep "work in progress" test code
     and Jest will remind us (by saying we have skipped tests) that we have incomplete tests we can fix later.*/
    expect(
      renderer.create(<TheDate />).toJSON()
    ).toMatchSnapshot()
  })
})


import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer'; // for snapshot tests

describe('Messages component', () => {
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Messages />, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer //Render the component and create a human-readable JSON file
        .create(<Messages name="Messages" unread={4}/>) //create() method takes the component to be rendered and performs a render on it
        .toJSON(); // toJSON() method creates the JSON file
        expect(tree).toMatchSnapshot();  // Compare the rendered component to a saved version of the component
        });

    it('renders the UI as expected with no unreads', () => {
        const tree = renderer
            .create(<Messages name="Messages" unread={0}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();  
        });
});
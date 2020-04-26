import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Acordian from './Acordian';

const sect = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]

  describe (`Acordian Component`, () => {
      it('renders when the page loads', () => {
          const wrapper = shallow(<Acordian />)
          expect(toJson(wrapper)).toMatchSnapshot()
      })

      it('renders no content to start', () => {
          const wrapper = shallow(<Acordian sections={sect} />)
          expect(toJson(wrapper)).toMatchSnapshot()
      })
      
      it('opens sections correctly', () => {
          const wrapper = shallow(<Acordian sections={sect} />)
          wrapper.find('button').at(0).simulate('click')
          wrapper.find('button').at(1).simulate('click')
          wrapper.find('button').at(2).simulate('click')
          expect(toJson(wrapper)).toMatchSnapshot()
      })

  })
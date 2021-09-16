import React from 'react';
import { shallow } from 'enzyme/build';
import App from './App';
import ChartLineSimple from './views/charts/ChartLineSimple';
import Home from './views/home/Home.js';

it('mounts App without crashing', () => {
  const wrapper = shallow(<App />);
  wrapper.unmount();
});

it('mounts Home without crashing', () => {
  const wrapper = shallow(<Home />);
  wrapper.unmount();
});

it('mounts Charts without crashing', () => {
  const wrapper = shallow(<ChartLineSimple />);
  wrapper.unmount();
});

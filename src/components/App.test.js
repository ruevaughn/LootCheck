import React from 'react';
import { configure, shallow } from 'enzyme';
import App from './App';

describe('App', () =>{
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a connected Wallet component', () => {
    // Good usage for when you need to debug output of your tests
    //  console.log(app.debug());
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  });

  it('contains a connected Loot component', () => {
    expect(app.find('Connect(Loot)').exists()).toBe(true);
  });
});

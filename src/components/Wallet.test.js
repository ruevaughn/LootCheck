import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const props = { balance: 20 };
  const wallet = shallow(<Wallet {...props} />);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('displays the blance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
  });

  it('creates an input to deposit into or withdraw from the balance', () =>{
    expect(wallet.find('.input-wallet').exists()).toBe(true);
  });
});

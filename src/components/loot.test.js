import React from 'react';
import { mount, shallow } from 'enzyme';
import { Loot } from './Loot';

describe('Loot', () => {
  const mockFetchbitcoin = jest.fn();
  const props = { balance: 10, bitcoin: {} };
  let loot = shallow(<Loot {...props} />);

  it('renders properly', () => {
    expect(loot).toMatchSnapshot();
  });

  describe('when mounted', () => {
    beforeEach(() => {
      props.fetchBitcoin = mockFetchbitcoin;
      loot = mount(<Loot {...props} />);
    });

    it('dispatches the `fetchBitcoing()` method it receives from props', () => {
      expect(mockFetchbitcoin).toHaveBeenCalled();
    });
  });
});


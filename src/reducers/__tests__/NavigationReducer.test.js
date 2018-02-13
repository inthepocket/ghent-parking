import navigationReducer from '../NavigationReducer';

describe('NavigationReducer tests', () => {
  it('Verify initial state.', () => {
    const state = navigationReducer(undefined, {});
    expect(state).toBeDefined();
  });
});

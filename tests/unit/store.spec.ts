import { shallowMount } from '@vue/test-utils';
import store from '@/store';

describe('Store', () => {
  it('starts empty', () => {
    expect(store.state.primaryNumbers.length).toBe(0);
    expect(store.state.secondaryNumbers.length).toBe(0);
  });

  it('allows selectPrimary', () => {
    store.dispatch('selectPrimary', 17);

    expect(store.state.primaryNumbers[0]).toBe(17);
  });

  it('allows selectSecondary', () => {
    store.dispatch('selectSecondary', 17);

    expect(store.state.secondaryNumbers[0]).toBe(17);
  });
});

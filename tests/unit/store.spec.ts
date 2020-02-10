import { shallowMount } from '@vue/test-utils';
import store from '@/store';

describe('Store', () => {
  beforeEach(() => {
    store.dispatch('clearSelection');
  });

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

  it('ignores second selectSecondary', () => {
    store.dispatch('selectSecondary', 17);
    store.dispatch('selectSecondary', 8);

    expect(store.state.secondaryNumbers.length).toBe(1);
    expect(store.state.secondaryNumbers[0]).toBe(17);
  });

  it('ignores eighth selectPrimary', () => {
    store.dispatch('selectPrimary', 1);
    store.dispatch('selectPrimary', 2);
    store.dispatch('selectPrimary', 3);
    store.dispatch('selectPrimary', 4);
    store.dispatch('selectPrimary', 5);
    store.dispatch('selectPrimary', 6);
    store.dispatch('selectPrimary', 7);
    store.dispatch('selectPrimary', 8);

    expect(store.state.primaryNumbers.length).toBe(7);
  });

  it('ignores duplicate secondary', () => {
    store.dispatch('selectPrimary', 10);
    store.dispatch('selectSecondary', 10);

    expect(store.state.primaryNumbers.length).toBe(1);
    expect(store.state.secondaryNumbers.length).toBe(0);
  });

  it('ignores duplicate primary', () => {
    store.dispatch('selectSecondary', 10);
    store.dispatch('selectPrimary', 10);

    expect(store.state.primaryNumbers.length).toBe(0);
    expect(store.state.secondaryNumbers.length).toBe(1);
  });
});

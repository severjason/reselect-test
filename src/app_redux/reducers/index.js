// @flow
import type { ListItem, Action } from 'flow/types';

type State = {
  selectedList: Array<ListItem>,
  totalSelectedPrice: number,
  list: Array<ListItem>,
}

const INITIAL_STATE: State = {
  selectedList: [],
  totalSelectedPrice: 0,
  list: [{
    id: '1',
    title: 'item1',
    price: 3.45,
    rating: 5,
  },
    {
      id: '2',
      title: 'item2',
      price: 5.43,
      rating: 7,
    },
    {
      id: '3',
      title: 'item3',
      price: 0.5,
      rating: 3,
    }]
};

function rootReducer(state: State = INITIAL_STATE, action: Action): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export default rootReducer;
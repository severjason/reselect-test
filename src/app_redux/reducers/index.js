// @flow
import type { ListItem, Action } from 'flow/types';
import { TOGGLE_LIST_ITEM, SORT_ROW } from "app_redux/types";
import * as helpers from 'helpers';

type State = {
  selectedList: Array<ListItem>,
  list: Array<ListItem>,
}


const INITIAL_STATE: State = {
  selectedList: [],
  list: helpers.generateList(20),
};

function rootReducer(state: State = INITIAL_STATE, action: Action): State {
  switch (action.type) {
    case TOGGLE_LIST_ITEM: {
      const listToFilter = action.payload.mainList ? state.list : state.selectedList;
      const filteredList: any = listToFilter.filter((list: ListItem) => list.id !== action.payload.id);
      const selectedItem: any = listToFilter.find((list: ListItem) => list.id === action.payload.id);
      return action.payload.mainList ? {
        selectedList: [
          ...state.selectedList,
          selectedItem,
        ],

        list: [
          ...filteredList,
        ]
      } : {
        selectedList: [
          ...filteredList,
        ],
        list: [
          ...state.list,
          selectedItem,
        ]
      }
    }
    case SORT_ROW: {
      const listToSort = action.payload.mainList ? state.list : state.selectedList;
      const listCopy = [...listToSort];
      const cellName = action.payload.cellName;
      const sortedList = listCopy.sort((a, b) => {
        return typeof a[cellName] === 'string'
          ? action.payload.order * a[cellName].localeCompare(b[cellName])
          : action.payload.order * (a[cellName] - b[cellName]);
      });
      return action.payload.mainList ? {
        ...state,
        list: [
          ...sortedList,
        ]
      } : {
        ...state,
        selectedList: [
          ...sortedList,
        ]
      }
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;

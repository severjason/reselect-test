import { createSelector } from 'reselect';
import type { ListItem } from "flow/types";

const getSelectedList = state => state.selectedList;

// const getTotalPrice = (list: Array<ListItem>):number => list.reduce((accumulator, item) => accumulator + item.price, 0);

// const getTotalItems = (list: Array<ListItem>): number => list.reduce((accumulator) => accumulator + 1, 0);

const getTotal = (list: Array<ListItem>) => ({
  price: list.reduce((accumulator, item) => accumulator + item.price, 0),
  quantity: list.reduce((accumulator) => accumulator + 1, 0),
});

export default createSelector(
  getSelectedList,
  getTotal,
)
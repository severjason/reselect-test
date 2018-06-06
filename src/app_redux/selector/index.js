import { createSelector } from 'reselect';
import type { ListItem } from "flow/types";

const getSelectedList = state => state.selectedList;

const getTotalPrice = (list: Array<ListItem>):number => {
  let sum = 0;
  for (let item of list) {
    sum += item.price;
  }
  return sum;
};

export default createSelector(
  getSelectedList,
  getTotalPrice,
)
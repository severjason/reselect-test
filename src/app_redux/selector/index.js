// @flow
import { createSelector } from 'reselect';
import type { ListItem } from "flow/types";

const getSelectedList = state => state.selectedList;

const getTotalPrice = createSelector(
  getSelectedList,
  (list: Array<ListItem>):number => list.reduce((accumulator, item) => accumulator + item.price, 0)
);

const getTotalItems = createSelector(
  getSelectedList,
  (list: Array<ListItem>): number => list.reduce((accumulator) => accumulator + 1, 0),
);

export default createSelector(
  [getTotalPrice, getTotalItems],
  (price: number, quantity: number) => ({
    price,
    quantity,
    average: Math.round(price / quantity),
  })
)

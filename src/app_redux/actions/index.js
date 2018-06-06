// @flow
import {
  TOGGLE_LIST_ITEM,
  SORT_ROW,
} from 'app_redux/types';
import type { Action } from 'flow/types';

export const toggleListItem = (id: string, mainList: boolean): Action => ({
  type: TOGGLE_LIST_ITEM,
  payload: {
    id,
    mainList,
  }
});

export const sortRow = (cellName: string, mainList: boolean, order: number): Action => ({
  type: SORT_ROW,
  payload: {
    cellName,
    mainList,
    order,
  }
});
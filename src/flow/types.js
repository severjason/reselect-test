// @flow

export type ListItem = {
  id: string,
  index: number,
  title: string,
  price: number,
  rating: number,
}

export type ListProps = {
  list: Array<ListItem>,
  totalSelectedPrice: number,
  color: string,
  title: string,
  mainList: boolean,
  actions: Actions,
}

export type Action = {
  type: string,
  payload: any,
}

export type Actions = {
  toggleListItem: (id: string, mainList: boolean) => Action;
  sortRow: (cellName: string, mainList: boolean, order: number) => Action;
}
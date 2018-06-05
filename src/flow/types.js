// @flow

export type ListItem = {
  id: string,
  title: string,
  price: number,
  rating: number,
}

export type Action = {
  type: string,
  payload: any,
}

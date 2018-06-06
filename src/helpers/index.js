import type { ListItem } from "../flow/types";
import * as uuid from "uuid";

export function generateList(length: number): Array<ListItem> {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min) + min);
  }
  let list: Array<ListItem> =[];
  for (let i = 0; i < length; i++) {
    list.push({
      id: uuid.v4(),
      index: i,
      title: 'item' + i + 1,
      price: getRandomInt(1, 100),
      rating: getRandomInt(1, 10),
    })
  }
  return list;
}

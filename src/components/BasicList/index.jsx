// @flow
import * as React from 'react';
import type { ListItem } from "flow/types";
import { Table } from 'semantic-ui-react';

type Props = {
  list: Array<ListItem>,
  color: string,
}

const BasicList = (props: Props) => {

  const items = (props.list.length) ? props.list.map((item: ListItem, index: number) => (
    <Table.Row key={item.id}>
      <Table.Cell>{index + 1}</Table.Cell>
      <Table.Cell>{item.title}</Table.Cell>
      <Table.Cell>{item.price} USD</Table.Cell>
      <Table.Cell>{item.rating}</Table.Cell>
    </Table.Row>
  )): null;

  /*const Total = () => (
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='2'>Total</Table.HeaderCell>
        <Table.HeaderCell  colSpan='2'>0</Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  );*/

  return (
    <Table
      selectable
      sortable
      color={props.color}
      textAlign='center'
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>No.</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Rating</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items}
      </Table.Body>
    </Table>
  )
};

export default BasicList;


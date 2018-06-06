// @flow
import * as React from 'react';
import { Table, Header } from 'semantic-ui-react';
import BasicListStyle from './styles';
import type { ListProps, ListItem } from "flow/types";
import { compose, withState, withHandlers } from 'recompose';

type BasicListProps = {
  handleOrder: (orderName: string) => void;
  order: {
    index: number,
    title: number,
    price: number,
    rating: number,
  }
}

const BasicList = (props: ListProps & BasicListProps) => {

  const items = (props.list.length) ? props.list.map((item: ListItem) => (
    <Table.Row
      key={item.id}
      className='selectable-row'
      onClick={() => props.actions.toggleListItem(item.id, props.mainList)}
    >
      <Table.Cell>{item.index + 1}</Table.Cell>
      <Table.Cell>{item.title}</Table.Cell>
      <Table.Cell>{item.price} USD</Table.Cell>
      <Table.Cell>{item.rating}</Table.Cell>
    </Table.Row>
  )) : null;

  const Total = () => !props.mainList ? (
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='2'><strong>Total</strong></Table.HeaderCell>
        <Table.HeaderCell  colSpan='2'><strong>{props.total.price} USD</strong></Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  ) : null;

  return (
    <BasicListStyle>
      <Header as='h4' textAlign='center' className='list-title'>
        {props.title ? props.title : ''}
      </Header>
      <Table
        selectable
        sortable
        color={props.color ? props.color : 'black'}
        textAlign='center'
        unstackable
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              onClick={() => {
                props.handleOrder('index');
                props.actions.sortRow('index', props.mainList, props.order.index);
              }}
            >No.</Table.HeaderCell>
            <Table.HeaderCell
              onClick={() => {
                props.handleOrder('title');
                props.actions.sortRow('title', props.mainList, props.order.title);
              }}
            >Title</Table.HeaderCell>
            <Table.HeaderCell
              onClick={() => {
                props.handleOrder('price');
                props.actions.sortRow('price', props.mainList, props.order.price);
              }}
            >Price</Table.HeaderCell>
            <Table.HeaderCell
              onClick={() => {
                props.handleOrder('rating');
                props.actions.sortRow('rating', props.mainList, props.order.rating);
              }}
            >Rating</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items}
        </Table.Body>
        <Total/>
      </Table>
    </BasicListStyle>
  )
};

const enhance = compose(
  withState(
    'order',
    'setSortOrder',
    {
      index: 1,
      title: 1,
      price: 1,
      rating: 1,
    }
  ),
  withHandlers({
    handleOrder: ({setSortOrder, order}) => (orderName: string) => {
      const newOrder = Object.assign({}, order);
      newOrder[orderName] = newOrder[orderName] === 1 ? -1 : 1;
      setSortOrder(newOrder);
    }
  })
);

export default enhance(BasicList);

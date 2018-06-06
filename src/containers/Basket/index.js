// @flow

import * as React from 'react';
import { Segment } from 'semantic-ui-react'
import TotalSelector from "app_redux/selector/index";
import { connect } from "react-redux";

type Props = {
  total: {
    price: number,
    quantity: number,
  }
}

const Basket = (props: Props) => (props.total.price) ? (
  <Segment>
    Total price: {props.total.price} USD, items: {props.total.quantity}
  </Segment>
):null;


export default connect(
  (state) => ({
    total: TotalSelector(state)
  }),
  null
)(Basket);
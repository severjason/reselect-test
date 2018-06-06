// @flow

import * as React from 'react';
import { Segment } from 'semantic-ui-react'
import TotalPriceSelector from "app_redux/selector/index";
import { connect } from "react-redux";

type Props = {
  totalSelectedPrice: number,
}

const Basket = (props: Props) => (props.totalSelectedPrice) ? (
  <Segment>
    Total price: {props.totalSelectedPrice} USD
  </Segment>
):null;


export default connect(
  (state) => ({
    totalSelectedPrice: TotalPriceSelector(state)
  }),
  null
)(Basket);
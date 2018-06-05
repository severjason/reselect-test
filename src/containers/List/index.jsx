// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import type { ListItem } from "flow/types";
import { BasicList } from 'components';

type Props = {
  list: Array<ListItem>,
  color: string,
}

const List = (props: Props) => <BasicList color='green' {...props}/>;


export default connect(
  ({list}) => ({
    list,
  }),
  null
)(List);


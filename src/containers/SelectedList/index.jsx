// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import type { ListItem } from "flow/types";
import { BasicList } from 'components/index';

type Props = {
  list: Array<ListItem>,
  color: string,
}

const SelectedList = (props: Props) => (props.list.length) ? <BasicList color='olive' {...props}/> : null;


export default connect(
  ({selectedList}) => ({
    list: selectedList,
  }),
  null
)(SelectedList);


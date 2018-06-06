// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import type { ListProps } from "flow/types";
import { BasicList } from 'components';
import { bindActionCreators } from 'redux';
import * as actions from 'app_redux/actions';

const List = (props: ListProps) => (props.list.length)
  ? <BasicList mainList={true} color='green' title='All items' {...props}/>
  : null;

export default connect(
  ({list}) => ({
    list,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  })
)(List);


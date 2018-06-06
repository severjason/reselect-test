// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import type { ListProps } from "flow/types";
import { BasicList } from 'components/index';
import { bindActionCreators } from "redux";
import * as actions from "../../app_redux/actions";

const SelectedList = (props: ListProps) => (props.list.length)
  ? <BasicList mainList={false} title='Selected items' color='blue' {...props}/>
  : null;

export default connect(
  ({selectedList, totalSelectedPrice}) => ({
    list: selectedList,
    totalSelectedPrice,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  })
)(SelectedList);


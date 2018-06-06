// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import type { ListProps } from "flow/types";
import { BasicList } from 'components/index';
import { bindActionCreators } from "redux";
import * as actions from "app_redux/actions";
import TotalPriceSelector from 'app_redux/selector';

const SelectedList = (props: ListProps) => (props.list.length)
  ? <BasicList mainList={false} title='Selected items' color='blue' {...props}/>
  : null;

export default connect(
  (state) => ({
    list: state.selectedList,
    totalSelectedPrice: TotalPriceSelector(state)
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  })
)(SelectedList);


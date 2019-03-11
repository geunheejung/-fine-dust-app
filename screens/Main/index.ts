import { connect } from 'react-redux';
import * as dataActions from '../../reducers/data';
import MainContainer from './MainContainer';

export default connect(
  (state: object) => {
    return {
      response: state.fineDustList
    }
  },
  (dispatch) => {
    return {
      fetchFineDust: (startPage: number, endPage: number) => dispatch(dataActions.fetchFineDustRequest({ startPage, endPage })),
    }
  }
)(MainContainer);
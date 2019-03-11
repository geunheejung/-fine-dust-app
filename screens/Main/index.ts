import { connect } from 'react-redux';
import * as dataActions from '../../reducers/data';
import MainContainer from './MainContainer';

export default connect(
  null,
  {
    fetchFineDust: dataActions.fetchFineDustRequest,
  }
)(MainContainer);
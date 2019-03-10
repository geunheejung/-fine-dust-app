import * as React from 'react';
import { Actions } from 'react-native-router-flux';
import { RouteKey } from '../../constatns';
import Presenter from './MainPresenter';

class MainContainer extends React.Component {  
  onPress = () => {
    Actions.push(RouteKey.FIND_DUST);
  }

  render() {
    return (
      <Presenter
        onPress={this.onPress}
      />
    )
  }
}

export default MainContainer;
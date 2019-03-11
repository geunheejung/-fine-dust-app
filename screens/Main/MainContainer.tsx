import * as React from 'react';
import axios from 'axios';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RouteKey } from '../../constatns';
import Presenter from './MainPresenter';
import {getFineDust} from '../../service/api';

class MainContainer extends React.Component {  
  async componentDidMount() {
    const res = await axios.get('http://openapi.seoul.go.kr:8088/494867516f67657534335747434778/json/ForecastWarningUltrafineParticleOfDustService/1/5/');    
    this.setState({ res });
  }

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
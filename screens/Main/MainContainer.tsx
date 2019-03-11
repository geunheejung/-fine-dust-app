import * as React from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RouteKey } from '../../constatns';
import Presenter from './MainPresenter';

interface IProps {
  fetchFineDust(startPage: number, endPage: number): object;
}

class MainContainer extends React.Component<IProps> {  
  componentDidMount() {
    this.props.fetchFineDust(1, 1);
    // const res = await axios.get('http://openapi.seoul.go.kr:8088/494867516f67657534335747434778/json/ForecastWarningUltrafineParticleOfDustService/1/5/');    
    // this.setState({ res });
  }

  onPress = () => {
    Actions.push(RouteKey.FIND_DUST);
  }

  render() {  
    
    return (
      <>
        <Text>{JSON.stringify(this.props.response)}</Text>
        <Presenter          
          onPress={this.onPress}
        />
      </>
    )
  }
}

export default MainContainer;
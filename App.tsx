import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { RouteKey } from './constatns';
import MainScene from './screens/Main';
import FindDustScene from './screens/FindDust';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Scene 
            init
            initial
            hideNavBar 
            key={RouteKey.MAIN}
            component={MainScene} 
            title="Main" 
          />          
          <Scene 
            back
            key={RouteKey.FIND_DUST} 
            component={FindDustScene} 
            title="FindDust" 
          />
        </>
      </Router>
    );
  }
}
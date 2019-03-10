import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class FindDust extends React.Component {
  render() {
    return (
      <View>
        <Text>FindDust</Text>
        <Button 
          title="Go Find dust"
          onPress={() => {
            Actions.replace('main');
          }}
        />
      </View>
    )
  }
}

export default FindDust;
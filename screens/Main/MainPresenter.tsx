import * as React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

type TProps = {
  onPress(): void;
}

const MainPresenter = (props: TProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>오늘의 미세먼지</Text>
      <TouchableHighlight            
        style={styles.button}
        onPress={props.onPress}
      >
        <Text>
          Go Find dust
        </Text>
      </TouchableHighlight>
    </View>
  );
}

export default MainPresenter;
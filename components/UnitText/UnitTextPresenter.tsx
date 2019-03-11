import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type TProps = {
  title: string,
  content: string,
  unit: string,
}

const UnitText = (props: TProps) => {
  const {
    title,
    content,
    unit
  } = props;  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{content} </Text>      
        <Text style={styles.unit}>{unit}</Text>
      </View>
    </View>
  )
}

export default UnitText;
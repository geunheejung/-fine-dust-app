import * as React from 'react';
import { ImageBackground, View, Text, TouchableHighlight } from 'react-native';
import UnitText from "../../components/UnitText";
import styles from './styles';

type TProps = {
  onPress(): void;
}

const MainPresenter = (props: TProps) => {
  return (
    <ImageBackground
      source={require('../../assets/main-bg.png')}
      style={styles.container}
    >
      <Text style={styles.headerTitle}>오늘의 미세먼지</Text>
      <View style={styles.contentContainer}>
        <UnitText 
          title="미세먼지"
          content="104"
          unit="㎍/㎥"
        />
        <UnitText 
          title="마스크"
          content="97"
          unit="KF 이상"
        />
        {/* 현재 위치의 간편한 미세먼지 농도 알려줌 */}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight            
          style={styles.button}
          onPress={props.onPress}
        >
          <Text style={styles.buttonText}>
            현재 위치 미세먼지
          </Text>
        </TouchableHighlight>
        <TouchableHighlight            
          style={styles.button}
          onPress={props.onPress}
        >
          <Text style={styles.buttonText}>
            서울 전체 미세먼지
          </Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}

export default MainPresenter;
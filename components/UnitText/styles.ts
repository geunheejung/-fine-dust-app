import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {    
    marginBottom: 25,
    // paddingVertical: 20,
  },
  title: {    
    marginBottom: 3,
    textAlign: 'center',
    fontSize: 20,  
    fontWeight: '600',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  content: {
    fontSize: 72,
    fontWeight: 'bold'
  },
  unit: {
    fontSize: 14,
    fontWeight: '600'
  }
});


export default styles;
import { StyleSheet } from 'react-native';
import layout from '../../layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',   
    paddingVertical: 60, 
    backgroundColor: '#CECAC1',
  },
  headerTitle: {
    marginBottom: 70,
    fontSize: 25,
    fontWeight: '600',
    color: '#222',    
  },
  contentContainer: {
    height: layout.height / 2,
  },
  buttonContainer: {

  },
  button: {  
    width: 150,    
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,    
    backgroundColor: '#606F82',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  }
});

export default styles;
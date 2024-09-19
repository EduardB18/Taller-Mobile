import { StyleSheet, Text, View } from 'react-native';

import { RegisterFormWithMessage} from './app/components/RegisterFormWithMessage';

export default function App() {
  return (
    <View style={styles.container}>
     <RegisterFormWithMessage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: 'white',
  },
  text: {
    fontFamily: 'Arial', 
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

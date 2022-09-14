import { StatusBar } from 'expo-status-bar';
import {   StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
  title :string
}

function Button (props: ButtonProps){
  return(
    <TouchableOpacity  style={styles.button}>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='Hello NLW'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor : 'blue',
    padding:15,
    borderRadius:5
  }
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (



    <View style={styles.container}>


      <View>
        <TextInput style={styles.text} placeholder='Add a tudu'/>
        <Button style={styles.add_button} title='+'></Button>
      </View>


      <View>
        <Text>Your tudus</Text>
      </View>


    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    backgroundColor: '#121212',
    alignItems: 'center',

  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  add_button: {
    fontSize: 150,
  }
});

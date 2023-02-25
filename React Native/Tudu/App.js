import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (



    <View style={styles.container}>


      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Add a task' placeholderTextColor="#9d9d9f" />
        <Button style={styles.addButton} title='Add'></Button>
      </View>


      <View>
        <Text style={styles.text}></Text>
      </View>


    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingTop: 75,
    backgroundColor: '#1c1c1e',
    alignItems: 'center',
  },
  textInput: {
    color: 'white',
    width: '95%',
    padding: 5,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#9d9d9f',
    borderRadius: 5,
    marginRight: 5,
  },
  text: {
    color: 'white',
  },
  addButton: {

  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

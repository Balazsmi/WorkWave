import { StatusBar } from 'expo-status-bar';
import { useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText, ]);
  };
  
  
  
  
  return (



    <View style={styles.container}>


      <View style={styles.inputContainer}>
        
        <TextInput style={styles.textInput} onChangeText={goalInputHandler} keyboardAppearance='dark' placeholder='Add a task' placeholderTextColor="#9d9d9f" />
        <Button style={styles.addButton} onPress={addGoalHandler} title='Add'></Button>
      </View>


      <View>
        {courseGoals.map((goal) => <Text style={{color: 'white', fontSize: 20}}>{goal}</Text>)}
      </View>


    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingTop: 75,
    backgroundColor: '#000000',
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
    borderBottomColor: '#9d9d9f',
    borderBottomWidth: 1,
    paddingBottom: 20,
  }
});

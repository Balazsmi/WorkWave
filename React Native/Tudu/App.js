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


      <View style={styles.listView}>
        {courseGoals.map((goal) => <Text key={goal} style={styles.goalItem}>{goal}</Text>)}
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
    justifyContent: 'center',
  },
  goalItem: {
    color: 'white', 
    backgroundColor: '#9d9d9f',
    fontSize: 20,
    marginTop: 7.5,
    padding: 8,
    borderRadius: 6,
    width: '100%',
  },
  listView: {
    top: 10,
    justifyContent: 'space-around',
  }
});

import { StatusBar } from 'expo-status-bar';
import { useState} from 'react';
import { colors } from './colors.js'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView } from 'react-native';

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



    <ScrollView style={styles.container}>


      <View style={styles.inputContainer}>
        
        <TextInput style={styles.textInput} onChangeText={goalInputHandler} keyboardAppearance='dark' placeholder='Add a task' placeholderTextColor="#9d9d9f" />
        <Button style={styles.addButton} onPress={addGoalHandler} title='Add'></Button>

      </View>


      <View style={styles.listView}>

          {courseGoals.map((goal) => 

          <View style={styles.listContainer}>

            <Image style={styles.check} source={require('./assets/check.png')}/>

            <Text key={goal} style={styles.goalItem}>{goal}</Text>

          </View>)}
        
        
      </View>


    </ScrollView>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 75,
    backgroundColor: colors.dark,
  },
  textInput: {
    color: colors.white,
    width: '95%',
    padding: 5,
    fontSize: 20,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
    marginRight: 5,
  },
  text: {
    color: colors.white,
  },
  addButton: {

  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    paddingBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  listView: {
    top: 10,
    flex: 1,
    width: '100%',
    marginBottom: 130,
  },
  listContainer: {
    display: 'flex',
    backgroundColor: colors.gray,
    borderRadius: 20,
    height: 70,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  check: {
    height: 40,
    width: 40,
    opacity: 0.3,
    left: 15,
  }, 
  goalItem: {
    color: colors.white, 
    fontSize: 20,
    left: 30,
    borderRadius: 6,
    width: '100%',
  },


});

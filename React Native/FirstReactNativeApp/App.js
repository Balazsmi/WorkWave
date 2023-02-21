import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, Platform, TouchableWithoutFeedback, View, Image, SafeAreaView, Button, Alert} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';


export default function App() {
  const handlePress = () => console.log("Text clicked")

  return <WelcomeScreen/>
}

const styles = StyleSheet.create({

});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, Platform, TouchableWithoutFeedback, View, Image, SafeAreaView, Button, Alert} from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';


export default function App() {
  const handlePress = () => console.log("Text clicked")

  return <WelcomeScreen/>
  return <ViewImageScreen/>
}

const styles = StyleSheet.create({
});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TouchableHighlight, TouchableWithoutFeedback, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text clicked")

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress} style={styles.text}>Testing the App</Text>
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image style={styles.image} fadeDuration={1000} source={{
          width: 200,
          height:300,
          uri: "https://picsum.photos/200/300"}}/>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    backgroundColor: 'gray',
  },
  image: {
  },


});

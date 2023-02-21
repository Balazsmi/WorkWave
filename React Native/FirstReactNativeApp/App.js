import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, Platform, TouchableWithoutFeedback, View, Image, SafeAreaView, Button, Alert} from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text clicked")

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress} style={styles.text}>Testing the App</Text>


      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image style={styles.image} fadeDuration={1000} source={{
          width: 50,
          height:50,
          uri: "https://picsum.photos/500/501"}}/>
      </TouchableHighlight>

      <Button
        title="Alert" 
        onPress={() => Alert.alert("My title", "Button clicked", 
          [{text: "Yes", onPress:() => console.log("Yes")}, 
          {text: "No", onPress:() => console.log("No")}])}
        color= "black"
      ></Button>

      <View style={{
        backgroundColor: 'gray',
        top: 75,
        width: "100%",
        flexDirection: 'row',
        height: 55,
        paddingTop: 30,
        paddingBottom: 30,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        }}> 

        <View style={{
          backgroundColor: 'gold',
          height: 50,
          width: 50,
          }}> 
        </View>

        <View style={{
          backgroundColor: 'tomato',
          height: 50,
          width: 50,
          bottom: 10,
          }}> 
        </View>
        <View style={{
          backgroundColor: 'dodgerblue',
          height: 50,
          width: 50,
          }}> 
        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },

  text: {
    backgroundColor: 'gray',
  },
  image: {
  },
  


});

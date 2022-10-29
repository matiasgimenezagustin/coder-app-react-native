import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola, Coder!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const mainColors = {
  black: "#181818",
  white: "white"
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: mainColors.white,
    fontSize: "2.5rem",
  }
});

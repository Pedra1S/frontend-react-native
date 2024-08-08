import  {View, Text, StyleSheet} from "react-native"

export default function Content() {
    return (
      <View style={styles.content}>
        <Text>Olá content</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    content:  {
     flex: 2,
     backgroundColor: "grey",
     justifyContent: "center",
     alignItems: "center"
      },
  })
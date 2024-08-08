import  {View, Text, StyleSheet} from "react-native"

export default function Header() {
    return (
      <View style={styles.header}>
        <Text>Olá footer</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    header:  {
     flex: 2,
     backgroundColor: "red",
     justifyContent: "center",
     alignItems: "center"
      },
  })
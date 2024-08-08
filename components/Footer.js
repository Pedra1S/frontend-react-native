import  {View, Text, StyleSheet} from "react-native"

export default function Footer() {
    return (
      <View style={styles.footer}>
        <Text>Olá footer</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    footer:  {
     flex: 2,
     backgroundColor: "red",
     justifyContent: "center",
     alignItems: "center"
      },
  })

import { View,StyleSheet,Text } from 'react-native'
import Footer from './components/Footer'
import Header from './components/Header'
import Content from './components/Content'

export default function App() {
  return (
    <View style={styles.container}>
        <Header/>
        <Content/>
        <Footer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
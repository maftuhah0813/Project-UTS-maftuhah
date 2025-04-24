import { View, StyleSheet, ImageBackground, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/images/sky-background.png')}
      style={styles.background}
      resizeMode="cover"
      blurRadius={5}
    >
      <View style={styles.container}>
        <Text style={styles.title}>WELCOME TO ALQURAN APP</Text>
        <Link href="/login" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyConcent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#007BFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

});
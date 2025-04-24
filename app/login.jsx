import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      // Kalau pakai autentikasi bisa ditaruh di sini
      router.replace('/home'); // setelah login, ke halaman home
    } else {
      Alert.alert('Login Gagal', 'Email dan Password harus diisi!');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/sky-background.png')}
      style={styles.background}
      resizeMode="cover"
      blurRadius={5}
    >
      <View style={styles.overlay}>
        <View style={styles.loginContainer}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />

          <TextInput
            placeholder="Email"
            placeholderTextColor="#aaa"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaa"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotText}>Lupa Password?</Text>
          </TouchableOpacity>
        </View>
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
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 20,
  },
  loginContainer: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '85%',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    width: '100%',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotText: {
    color: '#007AFF',
    marginTop: 15,
  },
});

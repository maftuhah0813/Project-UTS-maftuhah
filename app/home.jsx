import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const [surahs, setSurahs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('https://equran.id/api/surat')
    .then((response) => response.json())
    .then((data) => setSurahs(data))
    .catch((error) => console.error('Error fetching surah:', error));
  }, []);

  const renderItem = ({ item}) => (
    <TouchableOpacity style={styles.card}
      onPress={() => router.push(`/surah/${item.nomor}`)}
      activeOpacity={0.7}
      >
      <Text style={styles.arabic}>{item.nama}</Text>
      <Text style={styles.name}>{item.nama_latin}</Text>
      <Text style={styles.name}>{item.terjemahan}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/sky-background.png')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <Image source={require('../assets/images/alquran.png')} style={styles.quranImage} />
        <Text style={styles.title}> بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ </Text>
        <FlatList
          data={surahs}
          keyExtractor={(item) => item.nomor.toString()}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  quranImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: 'hsla(235,85.90%,13.90%,0.90)',
    borderRadius: 16,
    padding: 16,
    margin: 10,
    flex: 1,
    alignItems: 'center',
  },
  arabic: {
    fontSize: 24,
    color: '#fff',
  },
  name: {
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
  },
});

export default HomeScreen;

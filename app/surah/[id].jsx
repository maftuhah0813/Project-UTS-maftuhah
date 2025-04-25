import {View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

export default function DetailSurah(){
  const { id } = useLocalSearchParams();
  const [surah, setSurah] = useState(null);

  useEffect(() => {
    fetch(`https://equran.id/api/v2/surat/${id}`)
    .then(res => res.json())
    .then(data => setSurah(data.data))
    .catch(err => console.error(err));
  }, [id]);

  if (!surah) return null;

  return (
    <ImageBackground
      source={require('../../assets/images/sky-background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.surahName}>{surah.namaLatin}</Text>
          <Text style={styles.arabicName}>{surah.nama}</Text>
          <Text style={styles.info}>{surah.tempatTurun} - {surah.jumlahAyat} ayat</Text>
        </View>

        {surah.ayat.map((item) => (
          <View key={item.nomorAyat} style={styles.ayahBox}>
            <View style={styles.ayahHeader}>
              <Text style={styles.ayahNumber}>{item.nomorAyat}</Text>
            </View>
            <Text style={styles.arabic}>{item.teksArab}</Text>
            <Text style={styles.translation}>{item.teksIndonesia}</Text>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create ({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  surahName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue'
  },
  arabicName: {
    fontSize:30,
    color: 'blue',
    fontFamily: 'Amiri',
  },
  info: {
    fontSize: 14,
    color: 'blue',
    marginTop: 4,
  },
  ayahBox: {
    backgroundColor: 'rgba(18, 8, 151, 0.9)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  ayahHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ayahNumber: {
    fontSize: 16,
    backgroundColor: '#007AFF',
    color: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    overflow: 'hidden',
  },
  arabic: {
    fontSize: 22,
    textAlign: 'right',
    color: 'white',
    marginBottom: 5,
  },
  translation: {
    fontSize: 14,
    color: 'white',
    fontStyle: 'italic'
  },
});
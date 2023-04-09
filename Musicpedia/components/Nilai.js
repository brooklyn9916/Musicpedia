import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
// You can import from local files
import AssetNilai from './AssetNilai';


import { Card } from 'react-native-elements';
const Nilai = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ marginRight: 10, marginLeft: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: 9,
            paddingLeft: 9,
            paddingTop: 45,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>
            Quiz Result
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
            <Image source={require('../assets/Home.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.paragraph2}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
            Quiz alat musik tradisional dari Jawa
          </Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Card containerStyle={styles.outerCard}>
            <Text style={styles.paragraph3}>
              Quiz alat musik tradisional dari Jawa
            </Text>
            <Text style={styles.paragraph4}>Alat musik tradisional</Text>
          </Card>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Card containerStyle={styles.outerCard2}>
            <TouchableOpacity
              style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Image
                source={require('../assets/nilai.png')}
                style={styles.img}
              />

              <Text style={styles.paragraph5}>
                <Text style={{ fontWeight: 700 }}>Selamat</Text> Kamu berhasil{' '}
                <Text style={{ color: '#6FCF97' }}>lulus</Text> test ini dengan
                nilai <Text style={{ color: '#F2954D' }}>80%</Text>
              </Text>
            </TouchableOpacity>
          </Card>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
            flex: 1,
          }}>
          <View>
            <Card containerStyle={styles.outerCard3}>
              <Text
                style={{ fontWeight: 800, marginLeft: -20, color: 'white' }}>
                4
              </Text>
              <Text style={styles.paragraph6}>Jawaban Benar</Text>
            </Card>
          </View>

          <View>
            <Card containerStyle={styles.outerCard4}>
              <Text
                style={{ fontWeight: 800, marginLeft: -20, color: 'white' }}>
                1
              </Text>
              <Text style={styles.paragraph6}>Jawaban Salah</Text>
            </Card>
          </View>
        </View>

        <View style={{ flex: 1, alignItems: 'center', marginTop: -5 }}>
          <Card containerStyle={styles.outerCard6}>
            <TouchableOpacity
              style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Text style={styles.paragraph5}>
                <Text style={{ fontSize: 16, fontWeight: 700 }}>Next:</Text>{' '}
                Alat Musik Nusantara
              </Text>
              <TouchableOpacity style={{ alignItems: 'center' }}>
                <Card
                  containerStyle={{
                    backgroundColor: 'orange',
                    borderColor: 'orange',
                    alignItems: 'right',
                    marginTop: 1,
                    marginLeft: 40,
                    borderRadius: 12,
                    width: 50,
                    height: 35,
                    padding: 9,
                    shadowColor: 'black',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.0,
                  }}>
                  {' '}
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Go
                  </Text>
                </Card>
              </TouchableOpacity>
            </TouchableOpacity>
          </Card>
        </View>
      </View>
    </View>
  );
};
export default Nilai;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B94C1',
  },
  img: {
    width: 121,
    height: 90,
    position: 'left',
  },

  paragraph2: {
    margin: '15px 20px 0px 10px',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'auto',
  },
  paragraph3: {
    color: 'black',

    fontSize: 16,
    fontWeight: 800,
    letterSpacing: 0.3,
  },
  paragraph4: {
    color: 'black',
    alignItems: 'left',
    fontSize: 13,
    letterSpacing: 1,
  },

  paragraph5: {
    color: 'black',
    alignItems: 'left',
    fontSize: 13,
    letterSpacing: 0,
    marginLeft: 17,
    fontWeight: 500,
  },
  paragraph6: {
    marginLeft: -20,
    color: 'white',
    alignItems: 'left',
    fontSize: 11,
    letterSpacing: 1,
  },

  outerCard: {
    width: 300,
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',

    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  outerCard2: {
    width: 300,
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',

    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  outerCard3: {
    borderColor: '#27AE60',
    width: 135,
    alignSelf: 'left',
    alignItems: 'center',
    backgroundColor: '#27AE60',
    borderRadius: 15,
    justifyContent: 'center',

    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  outerCard4: {
    borderColor: '#EB5757',
    width: 135,
    alignItems: 'center',
    backgroundColor: '#EB5757',
    borderRadius: 15,
    justifyContent: 'center',

    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  outerCard6: {
    width: 300,

    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 32,
    textAlign: 'left',

    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

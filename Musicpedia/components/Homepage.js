import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import Constants from 'expo-constants';

import AssetHomepage from './AssetHomepage';

import { Card } from 'react-native-elements';

export default function Homepage() {
  return (
    <View style={styles.container}>
      <View style={styles.paragraph}>
        <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
          Hi, Kawan!
        </Text>
      </View>
      <View style={styles.paragraph2}>
        <Text style={{ fontSize: 17, color: 'white' }}>
          Siap mempelajari instrumen musik tradisional di Indonesia?
        </Text>
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Card containerStyle={styles.box}>
          <AssetHomepage />
        </Card>

        <Card containerStyle={styles.outerCard}>
          <Text style={styles.paragraph3}>
            Belajar Musik Tradisional Indonesia
          </Text>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#2B94C1',
    padding: 0,
  },
  

  outerCard: {
    
    width: 270,
    height: 52,
    
    backgroundColor: '#FFF1F1',
    borderRadius: 15,
    justifyContent: 'center',
    marginBottom: 580,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  paragraph: {
    margin: '60px 0px -45px 31px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  paragraph2: {
    margin: '53px 31px 0px 31px',
    color: 'white',
    alignItems: 'center',
  },
  paragraph3: {
    margin: 1,
    color: 'black',
    alignItems: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  box: {
    marginTop: 40,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    width: '100%',
    height: 614,
    position: 'absolute',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
  },
 
});

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
// You can import from local files
import AssetHomeSejarah from './AssetHomeSejarah';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function HomeSejarah() {
  const navigation = useNavigation();

  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/histories', {
        headers: { 'ngrok-skip-browser-warning': 'true' },
      })
      .then((response) => setHistoryData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <View style={{}}>
        <View style={styles.paragraph}>
          <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
            Hi, Kawan!
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
            <Image
              source={require('../assets/Home.png')}
              style={{ marginLeft: 135 }}
            />
          </TouchableOpacity>
          
        </View>
        <View style={styles.paragraph2}>
        <Text style={{ fontSize: 17, color: 'white' }}>
          Siap mempelajari instrumen musik tradisional di Indonesia?
        </Text>
      </View>
      </View>
      <ScrollView style={styles.box}>
        {historyData.map((item) => (
          <Card key={item.id}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeSejarah', { id: item.id })}>
              <View style={styles.containerCard}>
                <Image source={{ uri: item.thumbnail }} style={styles.img} />
                
                <Text style={styles.paragraphS}>{item.region}</Text>
                
              </View>
            </TouchableOpacity>
          </Card>
        ))}
      </ScrollView>
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
  paragraph: {
    margin: '60px 0px 0px 31px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    flexDirection: 'row',
    alignItems:'center'
  },
  paragraph2: {
    margin: '8px 0px 0px 31px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    flexDirection: 'row',
    alignItems:'center'
  },
  box: {
    marginTop: 30,
    width: '100%',
    height: 500,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    
  },
  containerCard: {
    margin: 23,
    alignItems: 'center',
    borderTopRightRadius: 30,
    flexDirection: 'row',
    
    
  },
  img: {
    width: 165,
    height: 93,
    position: '',
    left: 0,
    oapcity: 1,
    marginRight:20,
    borderRadius: 15,
    
  },
  paragraphS: {
    
    fontSize: 18,
    fontWeight: 'bold',
    
    
  },

});

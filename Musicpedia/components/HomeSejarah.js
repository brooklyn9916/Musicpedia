import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import { useNavigation, useRoute } from '@react-navigation/native';
// You can import from local files
import AssetHomeSejarah from './AssetHomeSejarah';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function HomeSejarahDetail() {
  const navigation = useNavigation();
  const route = useRoute();

  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/histories/${route.params.id}`, {
        headers: { 'ngrok-skip-browser-warning': 'true' },
      })
      .then((response) => setDetailData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <View style={{}}>
        <View style={styles.paragraph}>
          <View>
            <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
              Hi, Kawan! {detailData.name}
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
            <Image
              source={require('../assets/Home.png')}
              style={{ marginLeft: 135 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.paragraph2}>
          <Text style={{ fontSize: 17, color: 'white', marginBottom:20 }}>
            Siap mempelajari instrumen musik tradisional di Indonesia?
          </Text>
        </View>
      </View>

      <ScrollView style={styles.box}>
        <View>
          <Card style={styles.containerCard}>
            <Image source={{ uri: detailData.thumbnail }} style={styles.img} />
            <Text style={styles.paragraphS}>{detailData.title}</Text>
            <Text style={styles.paragraphS}>{detailData.name}</Text>
            <Text style={styles.paragraph6}>{detailData.content}</Text>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#2B94C1',
    
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
  },
  box: {
    width: '100%',
    height: 500,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems:'center'
  },
  containerCard: {
    borderTopRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  img: {
    width: 165,
    height: 93,
    marginLeft:70,
    marginTop: 30,
  },
  paragraphS: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 800,
    textAlign: 'center',
    marginTop: 30,
  },
  paragraph6: {
    fontSize: 15,
    textAlign: 'justify',
    marginLeft: 20,
    marginRight: 20,
  },
});

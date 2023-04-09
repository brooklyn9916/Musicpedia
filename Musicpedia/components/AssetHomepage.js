import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const AssetHomepage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomePageSejarah')}>
            <View style={styles.card1}>
              <Image
                source={require('../assets/HOMEPAGE/sejarah.png')}
                style={styles.img}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.card1}>
              <Image
                source={require('../assets/HOMEPAGE/quiz.png')}
                style={styles.img}
              />
            </View>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    </View>
  );
};
export default AssetHomepage;
const styles = StyleSheet.create({
  container: {
    margin: 23,
    padding: 10,
  },
  img: {
    width: 286,
    height: 96,
    position: '',
    left: 0,
    oapcity: 1,
  },

  card1: {
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    marginTop: 3,
    marginLeft: -15,
  },
  
});

import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const AssetExample = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerCard}>
      <Card>
        <TouchableOpacity onPress={() => navigation.navigate('HomeSejarah')}>
          <View style={styles.card}>
            <Image source={require('../assets/jawa.png')} style={styles.img} />
            <Text style={styles.paragraph}>JAWA</Text>
          </View>
        </TouchableOpacity>
      </Card>
    </View>
  );
};
export default AssetExample;
const styles = StyleSheet.create({
  containerCard: {
    margin: 23,
    padding: 10,
    height: 610,
    borderTopRightRadius: 30,
  },
  img: {
    width: 165,
    height: 93,
    position: '',
    left: 0,
    oapcity: 1,
  },
  paragraph: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 800,

    textAlign: 'center',
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: -15,
  },
 
});

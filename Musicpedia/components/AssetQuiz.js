import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ContainerStyle,
  Button,
} from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const AssetQuiz=() =>{
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card>
          <Text style={{ fontWeight: 800, fontSize: 20 }}>01</Text>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 20,
              marginTop: 5,
            }}>
            pertanyaan
          </Text>
          <View style={{ marginTop: 75 }}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>A. {}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>B. {}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>C.{}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>D. {}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.flex}>
            <View>
              <TouchableOpacity style={styles.prev}>
                <Text style={styles.text}> Previous </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.next} onPress={() => navigation.navigate('Final')}>
                <Text style={styles.text}> Next </Text>
              </TouchableOpacity>
            </View>
          </View>
          
        </Card>
      </ScrollView>
    </View>
  );
}
export default AssetQuiz;
const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    padding: 0,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    
    marginBottom:10
  },
  prev: {
    width: 98,
    backgroundColor: '#273032',
    borderRadius: 15,
    padding: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  next: {
    width: 69,
    backgroundColor: '#1CC2E8',
    borderRadius: 15,
    padding: 10,
    alignSelf: 'right',
    justifyContent: 'right',
    marginTop: 20,
  },
 
  buttonContainer: {
    borderWidth: 3,
    width: 270,
    
    borderRadius: 15,
    padding: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 12,
  },
  text: {
    color: '#F2F2F2',
    fontWeight: 'bold',
    textAlign: 'center',
    fontsize: 12,
    textAlignVertical: 'center',
    marginBottom: 3,
  },
});

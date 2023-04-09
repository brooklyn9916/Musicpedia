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
export default function AssetQuiz() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card>
          
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    padding: 0,
  },
});

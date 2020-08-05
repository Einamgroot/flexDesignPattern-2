import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.leftBox}>
        <View style={styles.col1}>
          <View style={styles.col1Top}></View>
          <View style={styles.col1Bottom}></View>
        </View>
        <View style={styles.col2}>
          <View style={styles.col2Top}></View>
          <View style={styles.col2Middle}></View>
          <View style={styles.col2Bottom}></View>
        </View>
      </View>
      <View style={styles.rightBox}>
        <View style={styles.col3}>
          <View style={styles.col3Left}></View>
          <View style={styles.col3Right}></View>
        </View>
        <View style={styles.col4}>
          <View style={styles.col4Left}></View>
          <View style={styles.col4Middle}></View>
          <View style={styles.col4Right}></View>
        </View>
        <View style={styles.col5}>
          <View style={styles.col5Left}></View>
          <View style={styles.col5Right}></View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding:5,
  },
  leftBox: {
    flex:2,
    marginRight:5,
    flexDirection:'row',
  },
  rightBox: {
    flex:3,
    marginLeft:5,
  },
  col1:{
    flex:1,
    marginRight:5,
  },
  col2:{
    flex:1,
    marginLeft:5,
  },
  col1Top:{
    flex:43,
    backgroundColor:'purple',
    marginBottom:5,
  },
  col1Bottom:{
    flex:57,
    backgroundColor:'red',
    marginTop: 5,
  },
  col2Top:{
    flex:44.5,
    backgroundColor:'purple',
    marginBottom: 5,
  },
  col2Middle:{
    flex:38,
    backgroundColor:'yellow',
    marginTop:5,
    marginBottom:5,
  },
  col2Bottom:{
    flex:19,
    backgroundColor:'purple',
    marginTop:5,
  },
  col3:{
    flex:2,
    flexDirection:'row',

  },
  col4:{
    flex:3,
    flexDirection:'row'

  },
  col5:{
    flex:1.1,
    flexDirection:'row'
  },
  col3Left:{
    flex:1.455,
    marginRight:5,
    backgroundColor:'black'
  },
  col3Right:{
    flex:3,
    marginLeft:5,
    marginBottom:5,
    backgroundColor:'purple',
  },
  col4Left:{
    flex:1,
    marginRight:5,
    marginBottom:5,
    backgroundColor:'purple'
  },
  col4Middle:{
    flex:1,
    margin:5,
    backgroundColor:'purple',
  },
  col4Right:{
    flex:1,
    margin:5,
    backgroundColor:'purple',
  },
  col5Left:{
    flex:2,
    marginTop:5,
    marginRight:5,
    backgroundColor:'purple',
  },
  col5Right:{
    flex:1,
    marginTop:5,
    marginLeft:5,
    backgroundColor:'purple',
  }
});

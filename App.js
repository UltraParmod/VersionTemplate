// import React, {useState} from 'react';
// import {LogBox, StatusBar, View} from 'react-native';
// import StackNavigation from './Src/Navigations/StackNavigation';
// import {CommonStyle} from './Src/Utails/CommonStyle';
// import Colors from './Src/Utails/Colors';

// export default function App() {
//   LogBox.ignoreLogs(['warning']);
//   LogBox.ignoreAllLogs();
//   return (
//     <View style={CommonStyle.container}>
//       <StatusBar backgroundColor={Colors.White} barStyle="dark-content" />
//       {/* <StatusBar translucent backgroundColor='transparent' /> */}
//       <StackNavigation />
//     </View>
//   );
// }
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
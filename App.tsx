import React from 'react';
import { View, StyleSheet } from 'react-native';
import SleepChart from './Sleep/SleepChart';

const SleepScreen = () => {
  return (
    <View style={styles.container}>
      <SleepChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default SleepScreen;

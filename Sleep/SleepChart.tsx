import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BarChart, YAxis} from 'react-native-chart-kit';

const ProgressScreen = () => {
  // Dummy data for the bar chart
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [3, 0, 2, 0, 7, 0, 6], // Example data for each day of the week
      },
    ],
  };

  const renderDotButton = (type, label) => {
    return (
      <TouchableOpacity style={styles.dotButton} key={type}>
        <View style={styles.dot} />
        <Text>{label}</Text>
      </TouchableOpacity>
    );
  };

  const yLabels = ['3pm', '6pm', '9pm', '12am', '3am', '6am']; // Custom Y-axis labels


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Progress</Text>
      <View style={styles.subHeadings}>
        <TouchableOpacity style={styles.subHeadingButton}>
          <Text style={styles.subHeading}>Sleep Time</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subHeadingButton}>
          <Text style={styles.subHeading}>Sleep Quality</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.barChart}>
        <BarChart
          data={data}
          width={400}
          height={200}
         yAxisLabel={yLabels}
          chartConfig={{
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: () => `#4B0082`,
          }}
        />
      </View>
      <View style={styles.timeIntervals}>
        {/* Horizontal lines representing time intervals */}
        {/* Removed the extra lines */}
      </View>

      <View style={styles.buttonsContainer}>
        {renderDotButton('night', 'Night Sleep')}
        {renderDotButton('naps', 'Naps')}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeadings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  subHeadingButton: {
    flex: 1,
  },
  subHeading: {
    fontSize: 18,
    textAlign: 'center',
  },
  barChart: {
    marginBottom: 20,
  },
  timeIntervals: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  horizontalLine: {
    height: 2, // Adjust height as needed
    width: 150, // Adjust width as needed
    backgroundColor: 'black',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  dotButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    marginRight: 5,
  },
});

export default ProgressScreen;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FProfile = () => {
  const handleFarmerButtonPress = () => {
    // Handle farmer button press
  };

  const handleExpertButtonPress = () => {
    // Handle expert button press
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crop Disease Help</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleFarmerButtonPress}
      >
        <Text style={styles.buttonText}>Farmer Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleExpertButtonPress}
      >
        <Text style={styles.buttonText}>Farmer Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FProfile;


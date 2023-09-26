import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { NavigationScreenProp } from 'react-navigation'; // Adjust this import based on your navigation library


// Define the type for the navigation prop
interface AppScreenProps {
  navigation: NavigationScreenProp<any, any>; // Adjust the types if needed
}

const First: React.FC<AppScreenProps> = ({ navigation }) => {
  // Handle any actions or navigation here

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image
        // source={require('./your-image-file.png')} // Local image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3658/3658881.png' }} // Remote image
        style={styles.image}
      />
        <Text style={styles.headerText}>Welcome to CropDoc</Text>
        <Text style={styles.textContent}>
        "Your Farm's Health, Our Expertise"
        </Text>
      </View>
      {/* <View style={styles.content}>
        <Text style={styles.textContent}>
        "Your Farm's Health, Our Expertise"
        </Text>
      </View> */}
        <View style={{flex:1,flexDirection:'row',gap:80,justifyContent:'center',alignItems:'flex-start',paddingTop:40}}>
        <View>
        <Image
        // source={require('./your-image-file.png')} // Local image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1886/1886915.png' }} // Remote image
        style={styles.imgs}
      />
        <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          // Handle button press, e.g., navigate to a different screen
          navigation.navigate('FLogin');
        }}
      >
        <Text style={styles.buttonText}>Farmer</Text>
      </TouchableOpacity>
      </View>
      <View>
      <Image
        // source={require('./your-image-file.png')} // Local image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4301/4301882.png' }} // Remote image
        style={styles.imgs}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          // Handle button press, e.g., navigate to a different screen
          navigation.navigate('ELogin');
        }}
      >
        <Text style={styles.buttonText}>Expert</Text>
      </TouchableOpacity>
      </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    height:'auto'
  },
  header: {
    // backgroundColor:'blue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    paddingTop:100
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom:20
  },
  // content: {
  //   backgroundColor:'red',
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  textContent: {
    fontSize: 18,
    textAlign: 'center',
  },
  buttonContainer: {
    textAlign:'center',
    minWidth:100,
    padding:20,
    backgroundColor:'#409827',
    borderRadius:20,
  },
  buttonText: {
    fontSize:20,
    textAlign:'center',
    color:'white'
  },
  imgs: {
    width: 100,
    height:100,
    marginBottom:40
  },
  image: {
    width:200,
    height:200
  }
});

export default First;
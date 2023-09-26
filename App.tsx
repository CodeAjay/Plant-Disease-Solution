import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your "First" screen component
import First from './screens/First';
import FLogin from './screens/FLogin';
import ELogin from './screens/ELogin';
import Tabs from './screens/Tabs';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen name="First" options={{headerShown:false}} component={First} />
        <Stack.Screen name="FLogin" options={{headerShown:false}} component={FLogin} />
        <Stack.Screen name="ELogin" options={{headerShown:false}} component={ELogin} />
        <Stack.Screen name="Tabs" options={{headerShown:false}} component={Tabs} />
        {/* Add other screens here if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;











// import React from 'react';
// import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
// import { NavigationScreenProp } from 'react-navigation'; // Adjust this import based on your navigation library


// // Define the type for the navigation prop
// interface AppScreenProps {
//   navigation: NavigationScreenProp<any, any>; // Adjust the types if needed
// }

// const App: React.FC<AppScreenProps> = ({ navigation }) => {
//   // Handle any actions or navigation here

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//       <Image
//         // source={require('./your-image-file.png')} // Local image
//         source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3658/3658881.png' }} // Remote image
//         style={styles.image}
//       />
//         <Text style={styles.headerText}>Welcome to Your App</Text>
//       </View>
//       <View style={styles.content}>
//         <Text style={styles.textContent}>
//           This is the main screen of your app. You can add your content and
//           functionality here.
//         </Text>
//       </View>
//         <View style={{flex:1,flexDirection:'row',gap:20,justifyContent:'center',alignItems:'center'}}>
//         <TouchableOpacity
//         style={styles.buttonContainer}
//         onPress={() => {
//           // Handle button press, e.g., navigate to a different screen
//           navigation.navigate('Profile');
//         }}
//       >
//         <Text style={styles.buttonText}>Farmer</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.buttonContainer}
//         onPress={() => {
//           // Handle button press, e.g., navigate to a different screen
//           navigation.navigate('Profile');
//         }}
//       >
//         <Text style={styles.buttonText}>Expert</Text>
//       </TouchableOpacity>
//         </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 16,
//     position:'relative',
//     height:'auto'
//   },
//   header: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//     paddingTop:100
//   },
//   headerText: {
//     paddingTop:40,
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // height:'80%'
//   },
//   textContent: {
//     fontSize: 18,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   buttonContainer: {
//     textAlign:'center',
//     minWidth:100,
//     padding:20,
//     backgroundColor:'#409827',
//     borderRadius:20,
//   },
//   buttonText: {
//     fontSize:20,
//     textAlign:'center',
//     color:'white'
//   },
//   image: {
//     width:200,
//     height:200
//   }
// });

// export default App;






// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { Text, Vibration, View } from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const Tab = createBottomTabNavigator();

// const Feed=()=>{
//   return(
//     <View>
//       <Text>This is Feed Screen</Text>
//     </View>
//   )
// }

// const Notifications=()=>{
//   return( 
//     <View>
//       <Text>This is Notifications Screen</Text>
//     </View>
//   )
// }


// const Profile=()=>{
//   return(
//     <View>
//       <Text>This is Profile Screen</Text>
//     </View>
//   )
// }

// function App() {
//   return (
//     <NavigationContainer>
//     <Tab.Navigator
//       initialRouteName="Feed"
//       screenOptions={{
//         tabBarActiveTintColor: '#e91e63',
//       }}
//     >
//       <Tab.Screen
//         name="Feed"
//         component={Feed}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={Notifications}
//         options={{
//           tabBarLabel: 'Updates',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="bell" color={color} size={size} />
//           ),
//           tabBarBadge: 3,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;








// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // Import your screens
// import First from './screens/First';
// import FLogin from './screens/FLogin';
// import ELogin from './screens/ELogin';
// // import FHome from './screens/FHome';
// // import EHome from './screens/EHome';
// import FProfile from './screens/FProfile';
// import EProfile from './screens/EProfile';

// // Create stack navigators for Auth, FarmerHome, and ExpertHome
// const AuthStack = createStackNavigator();
// const FarmerTabNavigator = createBottomTabNavigator();
// const ExpertTabNavigator = createBottomTabNavigator();

// const AuthStackScreen = () => (
//   <AuthStack.Navigator initialRouteName="First">
//     <AuthStack.Screen name="First" component={First} />
//     <AuthStack.Screen name="FLogin" component={FLogin} />
//     <AuthStack.Screen name="ELogin" component={ELogin} />
//   </AuthStack.Navigator>
// );

// const FarmerTabNavigatorScreen = () => (
//   <FarmerTabNavigator.Navigator>
//     {/* <FarmerTabNavigator.Screen name="FarmerHome" component={FarmerHomeScreen} /> */}
//     <FarmerTabNavigator.Screen name="FProfile" component={FProfile} />
//   </FarmerTabNavigator.Navigator>
// );

// const ExpertTabNavigatorScreen = () => (
//   <ExpertTabNavigator.Navigator>
//     {/* <ExpertTabNavigator.Screen name="ExpertHome" component={ExpertHomeScreen} /> */}
//     <ExpertTabNavigator.Screen name="EProfile" component={EProfile} />
//   </ExpertTabNavigator.Navigator>
// );

// // Create the main switch navigator to handle authentication flow
// const App = () => {
//   return (
//     <NavigationContainer>
//       <AuthStackScreen />
//       <FarmerTabNavigatorScreen />
//       <ExpertTabNavigatorScreen />
//     </NavigationContainer>
//   );
// };

// export default App;

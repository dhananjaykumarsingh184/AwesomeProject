import React,{ useEffect } from 'react';
import { Image, SafeAreaView  } from 'react-native';
import SignUp from './src/screens/auth/SignUp';
import Splash from './src/screens/auth/Splash';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
import SignIn from './src/screens/auth/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from './src/utils/color';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home  from './src/screens/app/Home';
import Profile from './src/screens/app/Profile';
import Favorites  from './src/screens/app/Favorites';
import ProductDetails from './src/screens/app/ProductDetails';
import Settings from './src/screens/app/Settings';
import CreateListing from './src/screens/app/CreateListing';
import MyListings from './src/screens/app/MyListings';
//import Tabs from './src/components/Tabs';
const WEB_CLIENT_ID = '362364812355-6qko0854gtb14bfjjc6lc3m87hf4gv4o.apps.googleusercontent.com'
const ANDROID_CLIENT_ID = '362364812355-9s6cok36732nsbfpua6if4q1b6vgp7dj.apps.googleusercontent.com'
const IOS_CLIENT_ID = '362364812355-5q4id74rr3d1t6g4ceoo38s182rjt1lo.apps.googleusercontent.com'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack=()=>{
  return (
    <Stack.Navigator>
       <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
       <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}}/>
       <Stack.Screen name="CreateListing" component={CreateListing} options={{headerShown: false}}/>
       <Stack.Screen name="MyListings" component={MyListings} options={{headerShown: false}}/>
     </Stack.Navigator>
  )
}
const Tabs= () => {
   return(
      <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let icon;

              if (route.name === 'Home') {
                icon = focused
                  ? require('./src/assets/tabs/home_active.png')
                  : require('./src/assets/tabs/home.png');
              } else if (route.name === 'ProfileStack') {
                icon = focused 
                ?  require('./src/assets/tabs/profile_active.png')
                : require('./src/assets/tabs/profile.png');
              }
              else if (route.name === 'Favorites') {
                icon = focused 
                ?  require('./src/assets/tabs/bookmark_active.png')
                : require('./src/assets/tabs/bookmark.png');
              }

              // You can return any component that you like here!
              return <Image style={{width:24,height:24}} source={icon} />;
            },
            headerShown: false,
            tabBarShowLabel:false,
            tabBarStyle:{borderTopColor:colors.grey}
          })}

    
      >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Favorites" component={Favorites} />
          <Tab.Screen name="ProfileStack" component={ProfileStack} />
        </Tab.Navigator>
    )
}


const App = () => {
  //Sign In Enable
  const f=false;
  const t=true;
  const isSignedIn= f ;
  

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
     });
  }, [] )

 

  const theme ={
    colors:{
      background:colors.white,
    }  }


  return (
  <SafeAreaProvider>
    <NavigationContainer theme={theme}>
    <Stack.Navigator>
      {isSignedIn ? (
        <>
           <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
           <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown: false}}/>
     
        </>
      ) : (
        <>
          <Stack.Screen name="Splash" component={Splash}  options={{headerShown: false}}/>
          <Stack.Screen name="SignUp" component={SignUp}  options={{headerShown: false}}/>
          <Stack.Screen name="SignIn" component={SignIn}  options={{headerShown: false}}/>
      </>
      )}
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
 
  
  )
}


export default App;



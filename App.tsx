import React,{ useEffect } from 'react';
import { SafeAreaView  } from 'react-native';
import SignUp from './src/screens/auth/SignUp';
//import Splash from './src/screens/auth/Splash';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
import SignIn from './src/screens/auth/SignIn';
const WEB_CLIENT_ID = '362364812355-6qko0854gtb14bfjjc6lc3m87hf4gv4o.apps.googleusercontent.com'
const ANDROID_CLIENT_ID = '362364812355-9s6cok36732nsbfpua6if4q1b6vgp7dj.apps.googleusercontent.com'
const IOS_CLIENT_ID = '362364812355-5q4id74rr3d1t6g4ceoo38s182rjt1lo.apps.googleusercontent.com'
const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
     });
  }, [] )
  return (
  <SafeAreaView>
    <SignIn/>
   </SafeAreaView>
  
  )
}


export default App;



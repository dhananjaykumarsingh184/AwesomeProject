import  React from 'react';
import { styles } from '../../auth/SignUp/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView,Text} from 'react-native';

 const Profile =() => {
        return (
            <SafeAreaView>
                <ScrollView style={styles.container}>
                <Text>Profile</Text>  
                </ScrollView>
            </SafeAreaView>
        )
 }

 export default Profile;
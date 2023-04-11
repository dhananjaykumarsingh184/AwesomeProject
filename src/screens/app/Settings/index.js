import  React from 'react';
import { styles } from '../../auth/SignUp/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView,Text} from 'react-native';

 const Settings =() => {
        return (
            <SafeAreaView>
                <ScrollView style={styles.container}>
                    <Text>Settings</Text>
                </ScrollView>
            </SafeAreaView>
        )
 }

 export default Settings;
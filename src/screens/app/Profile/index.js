import  React from 'react';
import { styles } from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View,Text} from 'react-native';
import { Header } from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import { Button } from '../../../components/Button';
import navigation  from '@react-navigation/native';
import MyListings from '../MyListings';
 const Profile =({navigation}) => {
    const num = 10;
    const onLogout=()=>{
        console.log("log ot clicked")
    }

    const onSettingClick= () => {
        navigation.navigate('Settings');
        
    }
    const onAddClick= () => {
        navigation.navigate('CreateListing');
        
    }
    const onMyListingsClick = () => {
        navigation.navigate('MyListings');
    }
     
        return (
            <SafeAreaView style={{flex:1}}>
                <Header showLogout onLogout={onLogout} title={'Profile'}/>
                <View style={styles.container}> 
                    <View  style={styles.content} > 
                        <Text style={styles.name}>User Name</Text>  
                        <Text style={styles.email}>User email</Text>  
                        
                        <ListItem  title="My Listings" onPress={onMyListingsClick} subtitle={`You have ${num} listings`} />
                        <ListItem onPress={onSettingClick} title="Settings" subtitle={'Account, FAQ, Contact'} />
                        
                        </View>
                    <Button onPress={onAddClick} style={styles.addButton} title={'Add a new listing'}/>
                    </View>
            </SafeAreaView>
        )
 }

 export default Profile;
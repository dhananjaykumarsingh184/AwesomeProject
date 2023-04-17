import  React ,{useState}from 'react';
import { styles } from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView,View,Pressable,Image,Text,Linking} from 'react-native';
import { Header } from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import { LinkingContext } from '@react-navigation/native';
import EditableBox from '../../../components/EditableBox';
import { Button } from '../../../components/Button';

 const Settings =({navigation}) => {
    const [editing, setEditing] = useState(false);
    const [values, setValues] = useState({name:'user', email:'user@gmail.com'});

    const onEditPress = () => {
        setEditing(true);
    }
    const onSave = () => {
        setEditing(false);
    }
    const onChange= (key, value) => {
        setValues(v => ({...v, [key]: value}));
    }
    const onItemPress= () => {
        Linking.openURL('https://www.google.com/')
    }
    const onBack = () => {
        navigation.goBack();
    }

    console.log('value =>>> ', values);
        return (
            <SafeAreaView>
                <Header showBack onBackPress={onBack} title={'Settings'}/>
                <ScrollView style={styles.container}>
                    <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Personal Information</Text>
                    <Pressable onPress={onEditPress}>
                    <Image style={styles.icon} source={require('../../../assets/editutton.png')} />
                    </Pressable>
                   
                    </View>
                    <EditableBox label={'Name'} onChangeText={(v) => onChange('name',v)} value={values.name} editable={editing} />
                    <EditableBox label={'Email'} onChangeText={(v) => onChange('email',v)} onChange value={values.email} editable={editing} />
                   { editing ? ( 
                          <Button onPress={onSave} style={styles.button} title="Save" />) 
                   : null }
                   
                    <Text style={[styles.sectionTitle, {marginTop:40}]} >Help Center</Text>
                    <ListItem onPress={onItemPress} style={styles.item} title="FAQ"  />
                    <ListItem onPress={onItemPress} style={styles.item} title="Contact Us"  />
                    <ListItem onPress={onItemPress} style={styles.item} title="Privacy & Terms"  />
               
                </ScrollView>
            </SafeAreaView>
        )
 }

 export default Settings;
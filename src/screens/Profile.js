import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

//assets
import profile from '../img/profile.png';

export default class Profile extends React.Component{


    render(){
        return(
            <View style={styles.ProfileScreen}>
                <View style={styles.ProfileData}>
                    <View style={styles.imgData}>
                        <Image  source={profile} resizeMode='contain'/>
                    </View >
                    <View style={styles.nameData}>
                        <Text style={styles.nameDataTxt} >Lorem Ipsum</Text>  
                    </View>
                </View>
                <View style={styles.ProfileContent}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ProfileScreen:{
        flex:1
    },
    ProfileData:{
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'space-around'
    },
        imgData:{
            flex: 3,
            justifyContent: 'center',
            alignItems: 'center',
        },
        nameData:{
            flex: 4,
            justifyContent: 'center',
        },
            nameDataTxt:{
                fontSize: 25,
            },
    ProfileContent:{
        flex: 3,
        borderWidth:1,borderColor:'green',

    }
})
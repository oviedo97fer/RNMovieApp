import React from 'react'
import { TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements';

const DrawerMenuBtn = ({onPress}) => {
    return(
        <TouchableOpacity 
            onPress={onPress} 
            style={{padding:10,margin:10}}>
            <Icon 
                name='menu'
                color='#fff'
                size={30}
            />
        </TouchableOpacity>
    )
}
export default DrawerMenuBtn;
import React from 'react';
import { StyleSheet, Text, View,  Pressable,TouchableOpacity} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function TodoItem({item, pressHandler}){

    return(
        <TouchableOpacity
            onPress={()=> pressHandler(item.key)}
        
        >
           
            <View  style={styles.item}>
                <Text style={styles.itemText}>{item.text}</Text>
                <MaterialIcons 
                    
                    name="delete" 
                    size={18} 
                    color="red" />
            </View>
           
        </TouchableOpacity>
    )
}
const styles= StyleSheet.create({
    item: {
        flexDirection:'row',
        justifyContent: 'space-between',
        padding:16,
        marginTop:16,
        borderColor: '#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius: 10,
    

    },
    itemText: {
        color:'blue',
        fontWeight: 'bolder',
    }
})
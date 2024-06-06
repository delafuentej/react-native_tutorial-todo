
import React,{useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Todo App</Text>
        </View>
    )
};

const styles=StyleSheet.create({
    header: {
        backgroundColor:'coral',
        height:100,
        width:420,

    },
    title: {
        marginTop:40,
        textAlign: 'center',
        fontWeight: 'bolder',
        fontSize:20,
        color:'blue',

       
    },
})
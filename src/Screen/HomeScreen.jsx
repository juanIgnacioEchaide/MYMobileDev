import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, ScrollView, FlatList, Modal,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {ejercicio} from '../../server/Ejercicio.js'

const HomeScreen = (props) => {
  
    /* MODULARIZAR ESTOS COMPONENTES EN 3!!! */
    return (
        <ScrollView style={{margin:10}}> 
        <View style={{backgroundColor:'skyblue'}}>
        <Text >{ejercicio.consigna}</Text>
        </View>
        <View style={{flexDirection:'column'}}>
            {ejercicio.respuestas.map(
            item=>
            <TouchableOpacity 
            style={{
                backgroundColor:'steelblue',
                shadow:1,
                width:'50%',
                height:30, 
                borderRadius:10}}><Text style={{color:'white', paddingLeft:10}}>{item}</Text></TouchableOpacity>)}</View>
             <Text>La correcta es</Text><Text>{ejercicio.correcta}</Text>
        </ScrollView>
    );
};

export default HomeScreen;
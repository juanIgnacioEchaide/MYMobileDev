import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, ScrollView, FlatList, Modal,TouchableOpacity } from 'react-native';

const Task = props => {

    const[question=['a "loyi" is a person that...', order='choose the correct answer']]=useState();
    return (
        <View>
            <View>
                <Text>{question}</Text>
                <Text></Text>
            </View>
            <View>
                <Text>{order}</Text>
            </View>
        </View>
    );
};


export default Task;
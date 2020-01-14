import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, ScrollView, FlatList, Modal,TouchableOpacity } from 'react-native';

const Task = props => {

    const[task=[question='a "loyi" is a person that...', order='choose the correct answer']]=useState();
    return (
        <View>
            <View>
                <Text>{task.question}</Text>
            </View>
            <View>
                <Text>{task.order}</Text>
            </View>
        </View>
    );
};


export default Task;
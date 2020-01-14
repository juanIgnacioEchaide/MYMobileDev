import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, ScrollView, FlatList, Modal,TouchableOpacity } from 'react-native';

const AlertWrong = props => {
    
    const[explanation='correct answer is..']=useState()

    return (
        <View>
            <Text>
                Wrong,baby   
            </Text>
        <Text>{explanation}</Text>
        </View>
    );
};

Task.propTypes = {
    
};

export default Task;
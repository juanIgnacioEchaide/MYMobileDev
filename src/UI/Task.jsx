import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, ScrollView, FlatList, Modal,TouchableOpacity } from 'react-native';

const Task = props => {

    const[task='a "loyi" is a person that...', command='choose the correct answer']=useState();
    return (
        <View>
            <View>
                <Text>{task}</Text>
            </View>
            <View>
                <Text>{command}</Text>
            </View>
        </View>
    );
};

Task.propTypes = {
    
};

export default Task;
import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, ScrollView, FlatList, Modal, TouchableOpacity } from 'react-native';

const OptionPanel = props => {

    const [options=['A','B', 'C', 'D']] = useState();

    return (
        <View style={{
            borderColor: 'steelblue'
        }}>
            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity style={{ height: 1 }}>
                    <Text>{options[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>{options[1]}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Text>{options[2]}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>{options[3]}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

OptionPanel.propTypes = {

};

export default OptionPanel;
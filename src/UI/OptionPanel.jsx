import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, ScrollView, FlatList, Modal, TouchableOpacity } from 'react-native';

const OptionPanel = props => {

    const [a = 'A', b = 'B', c = 'C', d = 'D'] = useState();



    return (
        <View style={{
            borderColor: 'steelblue'
        }}>
            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity style={{ height: 1 }}>
                    <Text>{a}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>{b}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Text>{c}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>{d}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

OptionPanel.propTypes = {

};

export default OptionPanel;
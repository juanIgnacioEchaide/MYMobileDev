import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, ScrollView, FlatList, Modal,TouchableOpacity } from 'react-native';

const OptionPanel = props => {

    const[options=[{a:'A',b:'C',c:'C',d:'D'}]]=useState();

    
    
    return (
        <View style={{
            borderColor: 'steelblue'
        }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    {options.a}
                </TouchableOpacity>
                <TouchableOpacity>
                      {options.b}
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                     {options.c}
                </TouchableOpacity>
                <TouchableOpacity>
                   {options.d}
                </TouchableOpacity>
            </View>
        </View>
    );
};

OptionPanel.propTypes = {

};

export default OptionPanel;
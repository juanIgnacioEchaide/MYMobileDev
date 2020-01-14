import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, ScrollView, FlatList, Modal,TouchableOpacity } from 'react-native';

const OptionPanel = props => {

/*     const[{a='A',b='C',c='C',d='D'}]=useState(); */

    
    
    return (
        <View style={{
            borderColor: 'steelblue'
        }}>
            <View style={{ flexDirection: 'row' }}>
                
                <TouchableOpacity style={{height:1}}>
                    <Text>asds</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text>skfh pias</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                <Text>j woueg</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text>sbcbahlsdb</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

OptionPanel.propTypes = {

};

export default OptionPanel;
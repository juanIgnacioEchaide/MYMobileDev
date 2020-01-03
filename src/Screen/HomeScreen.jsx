import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView, FlatList, Modal,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {  } from 'react-native-gesture-handler';

const HomeScreen = props => {

    const [enteredGoal, setEnteredGoal] = useState();
    const [courseGoal, setCourseGoal] = useState([]);

    const [isOpen, setIsOpen]= useState(false);

    const handleIsOpen=()=>{
        setIsOpen(!isOpen);
    }

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        setCourseGoal(courseGoal => [...courseGoal, { id: Math.random().toString(), value: enteredGoal }]);
        console.log(courseGoal);
    }


    /* MODULARIZAR ESTOS COMPONENTES EN 3!!! */
    return (
        <ScrollView 
        style={{margin:10}}>  
            <Button 
            title="abre modal" 
            onPress={()=>handleIsOpen()}/>
            <Modal visible={isOpen}>
                     <Text h1
                      style={{
                        backgroundColor:'steelblue',
                        textAlign:'center',
                        padding:5,
                        color:'#ffff'
                       }}>TITULO</Text>
                    <Text  
                    style={{
                         backgroundColor:'skyblue',
                         padding:5,
                         textAlign:'justify'
                        }}> 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Dignissimos, pariatur repellat accusantium beatae aliquid voluptatum optio 
                        nemo ab facere dolores rem officia doloribus similique sed omnis voluptatem,
                         distinctio enim soluta?
                    </Text>
                    <TouchableOpacity
                    onPress={()=>handleIsOpen()}>
                           
                            <Text
                             style={{
                                margin:3,
                                height:30,
                                textAlign:'center',
                                paddingTop:5,
                                backgroundColor:'steelblue',
                                color:'#fff',
                                borderRadius:5
                               
                                }}>
                                    CIERRA MODAL
                            </Text>
                    </TouchableOpacity>
     
            </Modal>
        </ScrollView>
    );
};

export default HomeScreen;
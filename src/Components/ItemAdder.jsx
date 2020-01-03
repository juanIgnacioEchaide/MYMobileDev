import React, {useState} from 'react';
import {View, Text, Button, TextInput, ScrollView, FlatList} from 'react-native';
import DegradeMenu from '../Components/DegradeMenu';
import PropTypes from 'prop-types';


const ItemAdder = props => {

    const [enteredGoal, setEnteredGoal]=useState();

    const[courseGoal, setCourseGoal]=useState([]);

    const goalInputHandler =(enteredText)=>{
        setEnteredGoal(enteredText);
    }

    const addGoalHandler=()=>{
        setCourseGoal(courseGoal=>[...courseGoal, {id:Math.random().toString() , value:enteredGoal}]);
        console.log(courseGoal);
    }



    return (
        <ScrollView>
            <View style={{padding:50, marginTop:100}}>
                <View style={{
                    flexDirection:'row', 
                    justifyContent:'space-around', 
                    backgroundColor:'#aaa4'}}> 
                    <TextInput 
                    placeholder="Course Goal" 
                    style={{
                        height:40,
                        borderColor:'black',
                        backgroundColor:'#fff'
                    }}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                    />
                    <Button title="ADD" onPress={addGoalHandler}/>
                </View>   
                <View> 

                    <Text>Aca va la FlatList</Text>  

        {/*            <FlatList
                   keyExtractor={}
                   data ={courseGoal}
                   renderItem={itemData=>(
                    <View>
                   <Text>{itemData.item}</Text>
                    </View>
                   )}/> */}

                </View>
     
            </View>
           
          {/*   <DegradeMenu/> */}
        </ScrollView>
    );
};


export default ItemAdder;
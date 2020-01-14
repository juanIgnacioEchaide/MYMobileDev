import React, {useState} from 'react';
import { StyleSheet, Text, View, AsyncStorage, Button } from 'react-native';
import PropTypes from 'prop-types';
import Task from '../UI/Task.jsx';
import OptionPanel from '../UI/OptionPanel.jsx';
import FeedBack from '../UI/FeedBack.jsx';
import ExcerciseTitle from '../UI/ExcerciseTitle.jsx';

const ExerciseScreen = props => {
    const[answer,setAnswer]=useState(false);
    const feedbackHandler=()=>{
        setAnswer(!answer);
    }

    return (
        <View>
            <ExcerciseTitle/>
            <Task/>
            <OptionPanel/>
            <FeedBack/>        
        </View>
    );
};

ExerciseScreen.propTypes = {
    
};

export default ExerciseScreen;
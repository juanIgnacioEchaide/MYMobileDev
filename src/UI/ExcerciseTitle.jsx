import React from 'react';
import PropTypes from 'prop-types';

const ExcerciseTitle = props => {
    const[exerciseData=[{module:'I',unit:'I',excercise:'I'}]]

    return (
        <View>
<Text>Module : {exerciseData.module} Unit: {exerciseData.unit} Exercise : {exerciseData.excercise}</Text>
        </View>
    );
};

ExcerciseTitle.propTypes = {
    
};

export default ExcerciseTitle;
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ExcerciseTitle = props => {
    const[exerciseData={module:'I',unit:'I',excercise:'I'}]=useState();

    return (
        <View>
            <Text>Module {exerciseData.module}  {exerciseData.unit}  {exerciseData.excercise}</Text>
        </View>
    );
};

ExcerciseTitle.propTypes = {
    
};

export default ExcerciseTitle;
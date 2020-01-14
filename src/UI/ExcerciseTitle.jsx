import React, { useState } from 'react';
import { StyleSheet, Text, View, AsyncStorage, Button } from 'react-native';
import PropTypes from 'prop-types';

const ExcerciseTitle = props => {
   /*  const[module='I',unit='I',excercise='I']=useState(); */

    return (
        <View>
            <Text>Titulo</Text>
        {/*     <Text>{module}  {unit}  {excercise}</Text> */}
        </View>
    );
};

ExcerciseTitle.propTypes = {
    
};

export default ExcerciseTitle;
import React, { useEffect, useState } from 'react';
import {View, Text, Button, TextInput, ScrollView, FlatList} from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PostHeaderScreen = props => {
 
       /*//////////////////// FETCH USESTATES ///////////////////////////////// */
    const token = `eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDk1Mjc4NjcsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJqdWFuLmlnbmFjaW8uZWNoYWlkZUBhY2NlbnR1cmUuY29tIn0.SbYqDXzb9gHHpaHYWsgDPDQ7NpSZpd_kDeRtyQ_n5p6h6FrVkH1-Vqqip-eQFlKmq6Q_qAPYk0PE5N9g-cRYig`
    const[loading, setLoading]=useState(false);
    const[stats, setStats]=useState([]);
    /* const[query,setQuery]=useState('redux'); */

    /*//////////////// CONDITIONAL RENDERING'S LOGIC //////////////////////////*/
    const[open,setOpen]=useState(false);

    const openHandler = ()=>{
        setOpen(!open);
    }
  
    useEffect( 
     ()=>{
            axios.get( `https://api.estadisticasbcra.com/inflacion_interanual_oficial`, {
            headers: { Authorization: `Bearer ${token}`, },
            })
            .then(response => {
                // Handle success.
                setStats(response);
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error);
            });
      });

        console.log('estas son las stats',stats); 

    return (
        <ScrollView> 
            <Text>
                Estoy renderizando     
            </Text>
            {stats.map(
                 item=>{
                 <Text>
                     {item.d}
                     {item.v}
                </Text>
            })}
        </ScrollView>
        );
    };


PostHeaderScreen.propTypes = {
    
};

export default PostHeaderScreen;
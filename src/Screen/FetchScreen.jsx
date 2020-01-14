import React, { useEffect, useState } from 'react';
import {View, Text, Button, TextInput, ScrollView, FlatList} from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FetchScreen = props => {

    /*//////////////////// FETCH USESTATES ///////////////////////////////// */

    const[loading, setLoading]=useState(false);
    const[stats, setStats]=useState({hits:[]});
    /* const[query,setQuery]=useState('redux'); */

    /*//////////////// CONDITIONAL RENDERING'S LOGIC //////////////////////////*/
    const[open,setOpen]=useState(false);

    const openHandler = ()=>{
        setOpen(!open);
    }

    const generateJSONHandler=()=>{
        
    }

 useEffect( 
     ()=>{
          const fetchData= async()=>{
             const result = await axios(
             `https://hn.algolia.com/api/v1/search?query=redux`,
             );
             setStats(result.data)
    /*          setLoading(!loading) */
            }
            fetchData();   
        },
        []);

        console.log(stats); 

    return (
        <ScrollView> 
            <Text>
                Estoy renderizando
                
            </Text>

         {/*        {
                loading==true?
                    <View style={{
                    backgroundColor:'skyblue',
                    color:'steelblue',
                    flex:1,
                    borderRadius:10
                    }}>
                        <Text>LOADING... </Text>
                    </View>:
                    <></>
                } */}

         {  
         stats.hits.map(
             item=>
             <TouchableOpacity key={item.objectID}
             style={{
                    backgroundColor:'steelblue',
                    padding:2,
                   justifyContent:'center',
                    margin:1,
                    marginLeft:8,
                    marginRight:8,
                    borderRadius:5,
                    alignItems:'center',
                    height:50
                 }}>
                <Text 
                style={{
                    color:'#fff',
                    padding:5
                }}>

                    {item.title}
                </Text>
            </TouchableOpacity>)}
        </ScrollView>
        );
    };

FetchScreen.propTypes = {
    
    };

export default FetchScreen;
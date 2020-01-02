import React,{useState} from 'react';
import {TouchableOpacity, Text, Button, TextInput, ScrollTouchableOpacity} from 'react-native';
import Cities from '../Components/Cities';
import Icon from 'react-native-vector-icons/AntDesign';  

const DegradeMenu=()=>{

    const [open, setOpen]=useState(false);

    const openingHandler=()=>{
        setOpen(!open);
    }

    return(
        <>
            {open==false ?  <TouchableOpacity 
             onPress={()=>openingHandler()}
             style={{
                backgroundColor:'#aaa1',
                flex:1,
                width:400,
                height:40
                }}>
                    <Text style={{
                        color:'#E12730',
                        paddingLeft:40,
                        paddingTop:10
                        }}>Cities</Text>                
                </TouchableOpacity>:
                    <TouchableOpacity>
                        < Cities/>
                        </TouchableOpacity>}

            
            <TouchableOpacity style={{
                backgroundColor:'#aaa2',
                width:400,
                height:40
            }}>
                  <Text style={{
                      color:'#AC2026',
                      paddingLeft:50,
                      paddingTop:10
                      }}>Itineraries</Text>
             
            </TouchableOpacity>


            <TouchableOpacity style={{
                backgroundColor:'#aaa3',
                width:400,
                height:40
            }}>
                  <Text style={{
                      color:'#741318',
                      paddingLeft:60,
                      paddingTop:10
                      }}>Comments</Text>
            
            </TouchableOpacity>
        </>
    )
}
export default DegradeMenu;
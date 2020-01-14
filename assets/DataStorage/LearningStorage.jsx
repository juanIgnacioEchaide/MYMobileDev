import React,{AsyncStorage} from 'react-native';
import { View, Text, Button, Image, TextInput, ScrollView, FlatList, Modal,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'; 
import {useState} from'react';

const useStorage = () => {

const [data, setData] = useState();

const retrieve = key=> awaitAsyncStorage.getItem(key, () =>setData);
const save = (key, value) => awaitAsyncStorage.setItem(key, value);
 
    return [data, retrieve, save]
 

    }


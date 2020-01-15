import {useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';
 
function useStorage () {
    const [data, setData] = useState();
    
    const retrieve = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key);
          if (value !== null) {
            // We have data!!
            setData(value);
          }
        } catch (error) {
          // Error retrieving data
        }
      };
 
    const save = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value);
          await retrieve(key)
        } catch (error) {
          // Error saving data
        }
      };
    useEffect(() => console.log("local data ", data));
 
    return [data, retrieve, save]
 
    
}
export default useStorage;
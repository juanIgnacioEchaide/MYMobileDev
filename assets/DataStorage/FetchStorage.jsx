import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const FetchStorage = props => {

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
        
        <View>
            
        </View>
    );
};

FetchStorage.propTypes = {
    
};

export default FetchStorage;
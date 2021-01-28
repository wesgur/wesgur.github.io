import axios from 'axios';

export default {
    getEvents: async function(offset=0, limit=10){
        try {
            const response =  await axios.get(`${process.env.REACT_APP_API_URL}/events?offset=${offset}&limit=${limit}`, 
                { headers: {
                    "Access-Control-Allow-Origin": "*",
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }            
            });            

            return response.data;
        } catch(e){
            return [];
        }        
    }
}
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': '13a29baf4dmsh4b1d4aee9271c08p17e874jsn4deed7284649',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query},
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
         const response = await axios.request(options);

         setData(response.data.data);
         setIsLoading(false)
        } catch (error) {
            setError(error);
            alert('There is an error')
            console.log(error)
        } finally{
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchData();

    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isloading, error, refetch };

}

export default useFetch;
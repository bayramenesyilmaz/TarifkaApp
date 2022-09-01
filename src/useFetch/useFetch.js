import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetch(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    async function getData() {
        try {
            const dataGet = await axios.get(url);
            setData(dataGet.data);
            setLoading(false)
        }
        catch (err) {
            setError(err.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return { data, loading, error }
}

export default useFetch
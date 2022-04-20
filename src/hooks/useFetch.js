
import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        //Initial state when request another quote
        setState({data:null,loading:true,error:null})
        //Quote request
        fetch(url)
            .then(resp => resp.json())
            .then(quote => {
                setState({
                    loading: false,
                    error: null,
                    data:quote,
                });
            });
    }, [url])

    return state;

};

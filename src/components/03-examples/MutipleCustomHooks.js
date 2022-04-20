import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import "../02-useEffect/effect.css"

export const MutipleCustomHooks = () => {

    const { state, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    //This is done since data is originally null, then !!null=true
    const { author, quote } = !!data && data[0];


    return (
        <div>
            <h1>Ordered Breaking bad Quotes</h1>
            <hr />
            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>

                    )
                    :
                    (
                        <>
                        <blockquote className="blockquote text-end">
                            <p className="mb-3"> {quote} </p>
                            <footer className="blockquote-footer"> {author} </footer>
                        </blockquote>
                        </>
                    )
            }
            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                Next quote...
            </button>
        </div>
    )
}

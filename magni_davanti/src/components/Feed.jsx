import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { client } from '../client'
import { feedQuery, searchQuery } from '../utils/data'
import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'

const Feed = () => {

    const [loading, setLoading] = useState(false)
    const [pins, setPins] = useState(null)

    const { categoryID } = useParams();

    useEffect(() => {
        setLoading(true)
        if (categoryID) {
            const query = searchQuery(categoryID);

            client.fetch(query)
            .then((data) => {
                setPins(data);
                setLoading(false)
            })
        } else{
            client.fetch(feedQuery)
            .then((data) => {
                setPins(data);
                setLoading(false);
            })
        }
    }, [categoryID])

    if(loading) return<Spinner message="We are adding new ideas to your feed!!!" />

    return (
        <div className="">
            {pins && <MasonryLayout pins = {pins} />}
        </div>
    )
}

export default Feed

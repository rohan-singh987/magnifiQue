import React from 'react'
import Masonry from 'react-masonry-css'
import Pin from './Pin'

const breakpointObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 4,
    1000: 3,
    500: 2,
}

const MasonryLayout = ({pins}) => {
    return (
        <div>
            <Masonry className="flex animate-slide-fwd bg-gradient-to-r from-[#f7debe] via-[#f5d7faf5] to-[#f7debee3] rounded-lg " breakpointCols = {breakpointObj} >
                {pins?.map((pin) => <Pin key={pin._id} pin={pin} className="w-max" />)}
            </Masonry>
        </div>
    )
}

export default MasonryLayout

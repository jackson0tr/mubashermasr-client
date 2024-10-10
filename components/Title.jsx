import React from 'react'

const Title = ({ title }) => {
    return (
        <div className='text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-right-0 pr-3'>
            {title}
        </div>
    )
}

export default Title
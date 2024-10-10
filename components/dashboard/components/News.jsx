import React from 'react'
import NewContent from '../components/NewContent'

const News = ({setActive}) => {

    return (
        <div className='bg-white rounded-md'>
            <div className='flex justify-between p-4'>
                <h2 className='text-xl font-medium'>أخبار</h2>
                {
                    <span onClick={()=> setActive(1)} className='px-3 py-[6px] cursor-pointer bg-red-500 rounded-sm text-white hover:bg-red-600'>أضف خبر</span>
                    // <Link className='px-3 py-[6px] bg-red-500 rounded-sm text-white hover:bg-red-600' href='/dashboard/news/create'>أضف خبر</Link>
                }

            </div>
            <NewContent setActive={setActive} />
        </div>
    )
}

export default News
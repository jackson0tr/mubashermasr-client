'use client'
import React, { useEffect, useState, useContext } from 'react'
import { FaTrash } from 'react-icons/fa'
import axios from 'axios'
import { base_api_url } from '../../../config/config'
import storeContext from '../../../context/storeContext'
import toast from 'react-hot-toast'
// import Link from 'next/link'
// import Image from 'next/image'
// import profile from '../../../assets/profile.png'

const Writers = ({setActive}) => {

  const { store } = useContext(storeContext)
  const [users, setUsers] = useState([])

  const get_users = async () => {
    try {

      const { data } = await axios.get(`${base_api_url}/api/users`, {
        headers: {
          'Authorization': `Bearer ${store.token}`
        }
      })
      setUsers(data.users)
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  const deleteUser = async (id) =>{
    try {
      await axios.delete(`${base_api_url}/api/delete/${id}`, {
        headers: {
          "Authorization": `Bearer ${store.token}`
      }
      })
      toast.success("تم مسح المستخدم");
      get_users();
  } catch (error) {
      toast.error(error.response.data.message);
  }
  }

  useEffect(() => {
    get_users()
  }, [])
  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>جميع المستخدمين</h2>
        <span onClick={()=>setActive(3)} className='px-3 py-[6px] cursor-pointer bg-red-500 rounded-sm text-white hover:bg-red-600' >أضف مستخدم</span>
      </div>
      <div className='relative overflow-x-auto p-4'>
        <table className='w-full text-sm text-left text-slate-600'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-4 py-2'>رقم</th>
              <th className='px-4 py-2'>الاسم</th>
              <th className='px-4 py-2'>دور</th>
              {/* <th className='px-4 py-2'>صورة</th> */}
              <th className='px-4 py-2'>البريد الالكتروني</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((r, i) => <tr key={i} className='bg-white border-b' >
                <td className='px-4 py-2'>{i + 1}</td>
                <td className='px-4 py-2'>{r.name}</td>
                <td className='px-4 py-2'>{r.category}</td>
                <td className='px-4 py-2'>{r.role}</td>
                {/* <td className='px-4 py-2'>
                  <Image className='w-[40px] h-[40px]' src={r ? r.image : profile} alt="img" />
                </td> */}
                <td className='px-4 py-2'>{r.email}</td>
                <td className='px-4 py-2'>
                  <div className='flex justify-start items-center gap-x-4 text-white'>
                  <div className='p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50'><FaTrash className='cursor-pointer' onClick={() => deleteUser(r._id)} /></div>
                  </div>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Writers
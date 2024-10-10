'use client'
import React, { useContext } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiNews } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { FaPlus } from "react-icons/fa";
import storeContext from '../../../context/storeContext'
import { IoLogOutOutline } from "react-icons/io5";
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../assets/logo_web.png';
import { useRouter } from 'next/navigation';

const Sidebar = ({ active, setActive }) => {

    const { store, dispatch } = useContext(storeContext);
    const router = useRouter();
    const logout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('newsToken')
            dispatch({
                type: 'logout',
                payload: ''
            });
            router.push('/');
        }
    }
    // const logout = () => {
    //     localStorage.removeItem('newsToken')
    //     dispatch({ type: 'logout', payload: '' })
    //     router.push('/');
    // }
    
    return (
        <div className='md:w-[250px] w-[80px] h-screen fixed right-0 top-0 bg-white'>
            <div className='h-[70px] flex justify-center items-center'>
                <Link href='/'>
                    <Image className='w-full h-[35px]' src={logo} alt="logo" />
                </Link>
            </div>
            <ul className='px-3 flex flex-col gap-y-1 font-medium'>
                {
                    store.userInfo?.role === 'admin' ? <>
                        <li>
                            <span className='px-3 cursor-pointer py-2 hover:shadow-lg hover:shadow-red-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white'
                            onClick={() => setActive(1)}>
                                <span className='text-xl'><FaPlus /></span>
                                <span className='hidden md:flex'>أضف خبر</span>
                            </span>
                        </li>
                        <li>
                            <span onClick={()=> setActive(3)} className={`px-3 cursor-pointer
                             py-2 hover:shadow-lg hover:shadow-red-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white`}>
                                <span className='text-xl'><AiOutlinePlus /></span>
                                <span className='md:flex hidden'>أضف مستخدم</span>
                            </span>
                        </li>
                        <li>
                            <span onClick={() => setActive(5)} className={`px-3 cursor-pointer py-2 hover:shadow-lg hover:shadow-red-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white`}>
                                <span className='text-xl'><FaPlus /></span>
                                <span className='md:flex hidden'>أضف فئة</span>
                            </span>
                        </li>
                        <li>
                            <span onClick={()=> setActive(4)} className={`px-3 cursor-pointer
                             py-2 hover:shadow-lg hover:shadow-red-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white`}>
                                <span className='text-xl'><FiUsers /></span>
                                <span className='md:flex hidden'>جميع المستخدمين</span>
                            </span>
                        </li>
                    </> : <>
                        <li>
                            <span onClick={() => setActive(1)} className={`px-3 cursor-pointer py-2 hover:shadow-lg hover:shadow-red-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white`}>
                                <span className='text-xl'><FaPlus /></span>
                                <span className='md:flex hidden'>أضف خبر</span>
                            </span>
                        </li>
                        <li>
                            <span onClick={() => setActive(5)} className={`px-3 cursor-pointer py-2 hover:shadow-lg hover:shadow-red-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white`}>
                                <span className='text-xl'><FaPlus /></span>
                                <span className='md:flex hidden'>أضف فئة</span>
                            </span>
                        </li>
                    </>
                }

                <li>

                    <span className='px-3 cursor-pointer py-2 hover:shadow-lg hover:shadow-red-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white'
                    onClick={() => setActive(2)}>
                        <span className='text-xl'><BiNews /></span>
                        <span className='md:flex hidden'>أخبار</span>
                    </span>
                </li>

                <li>
                    <div onClick={logout} className={`px-3  py-2 hover:shadow-lg hover:shadow-red-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white cursor-pointer`}>
                        <span className='text-xl'><IoLogOutOutline /></span>
                        <span className='md:flex hidden'>تسجيل خروج</span>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar
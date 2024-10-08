import React, { useContext, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import storeContext from '../context/storeContext'
import Image from 'next/image'
import logo from '../assets/logo_web.png'
import { base_api_url } from '../config/config'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Login = () => {
  const router = useRouter()
  const { dispatch } = useContext(storeContext)
  const [loader, setLoader] = useState(false)

  const [state, setState] = useState({
    email: "",
    password: ''
  })

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const submit = async (e) => {
    e.preventDefault()
    try {
      setLoader(true)
      const { data } = await axios.post(`${base_api_url}/api/login`, state)
      setLoader(false)
      localStorage.setItem('newsToken', data.token)
      toast.success(data.message)
      dispatch({
        type: "login_success",
        payload: {
          token: data.token
        }
      })
      router.push('/dashboard')
    } catch (error) {
      setLoader(false)
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className='min-w-screen min-h-screen bg-slate-200 flex justify-center items-center'>
      <div className='w-[340px] text-slate-600 shadow-md'>
        <div className='bg-white h-full px-7 py-8 rounded-md'>
          <div className='w-full justify-center items-center flex'>
            <Link href='/'>
              <Image className='w-[200px]' src={logo} alt="logo" />
            </Link>
          </div>
          <form onSubmit={submit} className='mt-8'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor="email">البريد الالكتروني</label>
              <input value={state.email} required onChange={inputHandle} type="email" placeholder='البريد الالكتروني' name='email' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' id='email' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <div className='flex flex-col gap-y-2'>
                <label className='text-md font-medium text-gray-600' htmlFor="password">كلمة المرور</label>
                <input onChange={inputHandle} required value={state.password} type="password" placeholder='كلمة المرور' name='password' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' id='password' />
              </div>
            </div>
            <div className='mt-4'>
              <button disabled={loader} className='px-3 py-[6px] w-full bg-red-500 rounded-sm text-white hover:bg-red-600' >{loader ? "جاري التحميل..." : 'تسجيل الدخول'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

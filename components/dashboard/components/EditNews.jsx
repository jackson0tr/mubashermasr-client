'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { MdCloudUpload } from "react-icons/md";
import JoditEditor from 'jodit-react'
import Galler from './Galler';
import { base_api_url } from '../../../config/config'
import axios from 'axios'
import storeContext from '../../../context/storeContext'
import toast from 'react-hot-toast'
import { useParams } from 'next/navigation';

const EditNews = () => {

    const  {slug}  = useParams()
    const { store } = useContext(storeContext)
    const [show, setShow] = useState(false)
    const editor = useRef(null)

    const [old_image, set_old_image] = useState('')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([])
    const [image, setImage] = useState('')
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${base_api_url}/api/category/all`);
            setCategories(response.data.categories);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    useEffect(()=>{
        fetchCategories();
    },[])


    const imageHandle = (e) => {

        const { files } = e.target

        if (files.length > 0) {
            setImg(URL.createObjectURL(files[0]))
            setImage(files[0])
        }
    }
    const [loader, setLoader] = useState(false)

    const added = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('category', category)
        formData.append('description', description)
        formData.append('new_image', image)
        formData.append('old_image', old_image)

        try {
            await axios.put(`${base_api_url}/api/news/update/${slug}`, formData, {
                headers: {
                    "Authorization": `Bearer ${store.token}`
                }
            })
            toast.success('تم تعديل الخبر')
        } catch (error) {
            console.log("error",error)
            toast.error(error.response.data.message)
        }
    }
    const [images, setImages] = useState([])

    const get_images = async () => {
        try {
            const { data } = await axios.get(`${base_api_url}/api/images`, {
                headers: {
                    "Authorization": `Bearer ${store.token}`
                }
            })
            setImages(data.images)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        get_images()
    }, [])

    const [imagesLoader, setImagesLoader] = useState(false)

    const imageHandler = async (e) => {
        const files = e.target.files
        try {
            const formData = new FormData()
            for (let i = 0; i < files.length; i++) {
                formData.append('images', files[i])

            }

            setImagesLoader(true)

            const { data } = await axios.post(`${base_api_url}/api/images/add`, formData, {
                headers: {
                    "Authorization": `Bearer ${store.token}`
                }
            })
            setImagesLoader(false)
            setImages([...images, data.images])
            toast.success("تم رفع الصورة")

        } catch (error) {
            setImagesLoader(false)
            toast.error(error.response.data.message)
        }
    }

    const get_news = async () => {
        try {
            const { data } = await axios.get(`${base_api_url}/api/news/${slug}`, {
                headers: {
                    "Authorization": `Bearer ${store.token}`
                }
            })
            setTitle(data?.news?.title)
            setCategory(data?.news?.category)
            setDescription(data?.news?.description)
            setImg(data?.news?.image)
            set_old_image(data?.news?.image)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        get_news()
    }, [slug])


    return (
        <div className='bg-white rounded-md'>
            <div className='flex justify-between p-4'>
                <h2 className='text-xl font-medium'>أضف خبر</h2>
                {/* <span className='px-3 py-[6px] cursor-pointer bg-red-500 rounded-sm text-white hover:bg-red-600'
                onClick={()=> setActive(2)} >أخبار</span> */}

            </div>

            <div className='p-4'>
                <form onSubmit={added} >
                    <div className='flex flex-col gap-y-2 mb-6'>
                        <label className='text-md font-medium text-gray-600' htmlFor="title">العنوان</label>
                        <input required value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='title' name='title' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' id='title' />
                    </div>
                    <div className='flex flex-col gap-y-2 mb-6'>
                        <label className='text-md font-medium text-gray-600' htmlFor="category">فئة</label>
                        <select  name="" id="categories"
                            value={category}
                            required
                            onChange={(e)=> setCategory(e.target.value)}
                            className='px-3 py-2 cursor-pointer rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'>
                            <option className='text-gray-600'>اختار فئة</option>
                            {
                                categories?.map((item) => (
                                    <option className='text-gray-600' key={item._id} value={item.name}>
                                        {item.name}
                                    </option>
                                ))
                            }
                        </select>
                        {/* <input required value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder='فئة' name='category' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' id='category' /> */}
                    </div>
                    <div className='mb-6'>
                        <div>
                            <label htmlFor="img" className={`w-full h-[240px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed`}>
                                {
                                    img ? <img src={img} className='w-full h-full' alt='image' /> : <div className='flex justify-center items-center flex-col gap-y-2'>
                                        <span className='text-2xl'><MdCloudUpload /></span>
                                        <span>أختار صورة</span>
                                    </div>
                                }
                            </label>
                            <input onChange={imageHandle} className='hidden' type="file" id='img' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2 mb-6'>
                        <div className='flex justify-start items-center gap-x-2'>
                            <h2>الوصف</h2>
                            <div onClick={() => setShow(true)}>
                                <span className='text-2xl cursor-pointer'><MdCloudUpload /></span>
                            </div>
                        </div>
                        <div>
                            <JoditEditor
                                ref={editor}
                                value={description}
                                tabIndex={1}
                                onBlur={value => setDescription(value)}
                                onChange={() => { }}
                            />
                        </div>
                    </div>

                    <div className='mt-4'>
                        <button disabled={loader} className='px-3 py-[6px] bg-red-500 rounded-sm text-white hover:bg-red-600' > {loader ? 'جاري التحميل...' : 'تعديل الخبر'}</button>
                    </div>

                </form>
            </div>
            <input onChange={imageHandler} type="file" multiple id='images' className='hidden' />
            {
                show && <Galler setShow={setShow} images={images} />
            }
        </div>
    )
}

export default EditNews
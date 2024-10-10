import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { base_api_url } from '@/config/config';


const AddCategory = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [editingId, setEditingId] = useState(null);

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${base_api_url}/api/category/all`);
            setCategories(response.data.categories);
        } catch (error) {
            toast.error('Failed to load categories');
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleAdd = async () => {
        try {
            await axios.post(`${base_api_url}/api/category/add`, { name })
            toast.success('تم اضافة الفئة')
            setName('');
            fetchCategories();
        } catch (error) {
            toast.error(error.message)
        }
    };

    const handleEdit = async (id) => {
        try {
            await axios.put(`${base_api_url}/api/category/edit/${id}`, { name })
            toast.success('تم تعيل الفئة')
            setEditingId(null)
            setName('');
            fetchCategories();
        } catch (error) {
            toast.error(error.message)
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${base_api_url}/api/category/delete/${id}`)
            toast.success('تم مسح الفئة')
            fetchCategories();
        } catch (error) {
            toast.error(error.message)
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">أضف فئة</h1>

            <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
                <input
                    type="text"
                    placeholder="اسم الفئة"
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {editingId ? (
                    <button
                        className="w-full bg-blue-500 text-white px-1 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                        onClick={() => handleEdit(editingId)}
                    >
                        تعديل الفئة
                    </button>
                ) : (
                    <button
                        className="w-full bg-green-500 text-white px-1 py-2 rounded-lg hover:bg-green-600 transition-colors"
                        onClick={handleAdd}
                    >
                        أضف فئة
                    </button>
                )}
            </div>

            <div className="mt-8">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories.map((category) => (
                        <li
                            key={category._id}
                            className="bg-white p-4 shadow-lg rounded-lg flex justify-between items-center"
                        >
                            <div>
                                <h2 className="text-lg font-semibold">{category.name}</h2>
                            </div>
                            <div className="flex justify-between">
                                <button
                                    className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
                                    onClick={() => {
                                        setName(category.name);
                                        setEditingId(category._id);
                                    }}
                                >
                                    تعديل
                                </button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                                    onClick={() => handleDelete(category._id)}
                                >
                                    حذف
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default AddCategory;
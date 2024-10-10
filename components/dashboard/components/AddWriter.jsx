import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { base_api_url } from '../../../config/config';

const AddWriter = ({setActive}) => {

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [loader, setLoader] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const { name, email, password, role } = state;
      const { data } = await axios.post(`${base_api_url}/api/register`, {name, email, password, role});
      setLoader(false);
      toast.success('تم اضافة المستخدم');
    } catch (error) {
      setLoader(false);
      console.log(error)
      toast.error(error.response.data.message)
    }
  };

  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">أضف محرر</h2>
          <span onClick={()=> setActive(4)} className="px-3 cursor-pointer py-[6px] bg-red-500 rounded-sm text-white hover:bg-red-600">مستخدمين</span>
      </div>
      <div className="p-4">
        <form onSubmit={submit}>
          <div className="grid grid-cols-2 gap-x-8 mb-3">
            <div className="flex flex-col gap-y-2">
              <label className="text-md font-medium text-gray-600" htmlFor="name">الاسم</label>
              <input
                onChange={inputHandler}
                value={state.name}
                required
                type="text"
                placeholder="الاسم"
                name="name"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-md font-medium text-gray-600" htmlFor="role">الدور</label>
              <select
                onChange={inputHandler}
                value={state.role}
                required
                name="role"
                id="role"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              >
                <option value="">أختار نوع المستخدم</option>
                <option value="admin">أدمن</option>
                <option value="writer">محرر</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 mb-3">
            <div className="flex flex-col gap-y-2">
              <label className="text-md font-medium text-gray-600" htmlFor="email">البريد الالكتروني</label>
              <input
                onChange={inputHandler}
                value={state.email}
                required
                type="email"
                placeholder="البريد الالكتروني"
                name="email"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-md font-medium text-gray-600" htmlFor="password">كلمة المرور</label>
              <input
                onChange={inputHandler}
                value={state.password}
                required
                type="password"
                placeholder="كلمة المرور"
                name="password"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                id="password"
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              disabled={loader}
              className="px-3 py-[6px] bg-red-500 rounded-sm text-white hover:bg-red-600"
            >
              {loader ? 'جاري التحميل...' : 'أضف مستخدم'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWriter;

'use client'
import { useContext, useEffect } from 'react';
import Login from "@/components/Login";
import Heading from "@/utils/Heading";
import storeContext from '@/context/storeContext'; 
import { useRouter } from 'next/navigation';
export const dynamic = 'force-dynamic';

const LoginPage = () => {
    const { store } = useContext(storeContext); 
    const router = useRouter();

    useEffect(() => {
        if (store.userInfo) {
            router.push('/');
        }
    }, [store.userInfo, router]);

    return (
        <>
            <Heading title="تسجيل الدخول الي مباشر مصر" description="قم بتسجيل الدخول الي مباشر مصر" keywords="تسجيل دخول" />
            <Login />
        </>
    );
}

export default LoginPage;

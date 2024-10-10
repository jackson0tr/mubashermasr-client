'use client'
import { useContext, useEffect } from 'react';
import Heading from "@/utils/Heading";
import storeContext from '@/context/storeContext'; 
// import Dashboard from '@/components/dashboard/layout/Dashboard';
import { useRouter } from 'next/navigation';
// export const dynamic = 'force-dynamic';
import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('@/components/dashboard/layout/Dashboard'), { ssr: false });

const DashboardPage = () => {
    const { store } = useContext(storeContext); 
    const router = useRouter();

    useEffect(() => {
        // if (typeof window !== 'undefined' && !store.userInfo) {
        if (!store?.userInfo) {
            router.push('/');
        }
    }, [store?.userInfo, router]);

    return (
        <>
            <Heading title="لوحة التحكم مباشر مصر" description="لوحة التحكم الي مباشر مصر" keywords="لوحة التحكم" />
            <Dashboard />
        </>
    );
}

export default DashboardPage;

import React, { Suspense } from 'react'
import Breadcrumb from "@/components/Breadcrumb";
import Category from "@/components/Category";
import Search from "@/components/Search";
import PopularNews from "@/components/news/PopularNews";
import RecentNews from "@/components/news/RecentNews";
// import SimpleDetailsNewCard from "@/components/news/items/SimpleDetailsNewCard";
import Footer from "@/components/Footer";
import SearchNews from '@/components/news/SearchNews';
import Heading from '@/utils/Heading';
export const dynamic = 'force-dynamic';

const Page = () => {

    return (
        <>
            <Heading title="نتيجة البحث مباشر مصر" description="نتيجة البحث الي مباشر مصر" keywords="البحث" />
            <div>

                <div className="bg-white shadow-sm py-4">
                    <div className="px-4 md:px-8 w-full">
                        <Breadcrumb one="فئة" two={'نتيجة البحث'} />
                    </div>
                </div>
                <div className="bg-slate-200 w-full">
                    <div className="px-4 md:px-8 w-full py-8">
                        <div className="flex flex-wrap">
                            <div className="w-full xl:w-8/12">
                                <div className="w-full pr-0 xl:pl-4">
                                    <Suspense fallback={<div>يتم البحث عن النتيجة</div>}>
                                        <SearchNews />
                                    </Suspense>
                                    {/* <SearchNews/> */}
                                </div>
                            </div>
                            <div className="w-full xl:w-4/12">
                                <div className="w-full pl-0 xl:pr-4">
                                    <div className="flex flex-col gap-y-8">
                                        <Search />

                                        <RecentNews />
                                        <div className="p-4 bg-white">
                                            <Category titleStyle={"text-gray-700 font-bold"} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <PopularNews type="الأخبار الشائعة" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Page
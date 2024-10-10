import HeadLines from "@/components/HeadLines";
import Title from "@/components/Title";
import DetailsNews from "@/components/news/DetailsNews";
import DetailsNewsCol from "@/components/news/DetailsNewsCol";
import DetailsNewsRow from "@/components/news/DetailsNewsRow";
import LatestNews from "@/components/news/LatestNews";
import PopularNews from "@/components/news/PopularNews";
import SimpleNewsCard from "@/components/news/items/SimpleNewsCard";
import NewsCard from "@/components/news/items/NewsCard";
import Footer from "@/components/Footer";
import { base_api_url } from "@/config/config";
import Header from "@/components/Header";
export const dynamic = 'force-dynamic';

const Home = async () => {
  
  const news_data = await fetch(`${base_api_url}/api/all/news`, {
    next: {
      revalidate: 5,
    },
  });

  let news = await news_data?.json();

  news = news.news
  
  return (
    <>
    <div>
        <Header />
      <main>
        <HeadLines news={news} />
        <div className="bg-slate-100">
          <div className="px-4 md:px-8 py-8">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12">
                <LatestNews news={news["ترددات"]} />
              </div>
              <div className="w-full lg:w-6/12 mt-5 lg:mt-0">
                <div className="flex w-full flex-col gap-y-[14px] pr-0 lg:pr-2">
                  <Title title="ترددات" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                    {news["ترددات"]?.map((item, i) => {
                      if (i < 4) {
                        return <SimpleNewsCard item={item} key={i} />;
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* Travel */}
            <PopularNews type="الأخبار الشائعة"  news={news["رياضة"]} />
            {/* first section */}
            <div className="w-full">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12">
                  <DetailsNewsRow
                    news={news["اقتصاد"]}
                    category="اقتصاد"
                    type="details-news"
                  />
                  <DetailsNews news={news["أخبار مصر"]}
                    category="أخبار مصر"  />
                </div>
                <div className="w-full lg:w-4/12">
                  <DetailsNewsCol
                    news={news["تكنولوجيا"]}
                    category="تكنولوجيا"
                  />
                </div>
              </div>
            </div>
            {/* 2nd section */}
            <div className="w-full">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12">
                  {
                    <div className="pr-2">
                    <DetailsNewsCol
                      news={news["فن"]}
                      category="فن"
                    />
                  </div>
                  }
                </div>
                <div className="w-full lg:w-8/12">
                  <div className="pr-2">
                    <DetailsNewsRow
                      news={news["أخبار مصر"]}
                      category="أخبار مصر"
                      type="details-news"
                    />
                    <DetailsNews news={news["ترددات"]}
                    category="ترددات" />
                  </div>
                </div>
              </div>
            </div>
            {/* 3rd section */}
            <div className="w-full">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12">
                  <div>
                    <DetailsNewsRow
                      news={news["رياضة"]}
                      category="رياضة"
                      type="details-news"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12">
                  <div className="pr-2">
                    <Title title="أخبار أخيرة" />
                    <div className="grid grid-cols-1 gap-y-[14px] mt-4">
                      {news['ترددات']?.map((item, i) => (
                        <NewsCard item={item} key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
};
export default Home;

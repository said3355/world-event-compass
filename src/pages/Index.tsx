
import React, { useEffect } from 'react';
import Header from '../components/Header';
import EventCard from '../components/EventCard';
import SocialMediaFeed from '../components/SocialMediaFeed';
import RegionalEvents from '../components/RegionalEvents';
import EconomicIndicators from '../components/EconomicIndicators';
import { Globe, TrendingUp, Users, AlertTriangle } from 'lucide-react';

const Index = () => {
  // Auto-refresh every hour (3600000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Auto-refreshing page for latest updates...');
      window.location.reload();
    }, 3600000); // 1 hour

    return () => clearInterval(interval);
  }, []);

  const majorEvents = [
    {
      id: 1,
      title: "ترامب يعلن حملته الرئاسية الجديدة لعام 2024",
      summary: "الرئيس السابق دونالد ترامب يطلق حملته الانتخابية الرسمية مع تركيز على السياسات الاقتصادية والأمن القومي",
      category: "Political",
      timestamp: "30 دقيقة",
      source: "CNN",
      urgency: "high" as const,
      url: "https://www.cnn.com/politics"
    },
    {
      id: 2,
      title: "اتفاقية تجارية جديدة بين الولايات المتحدة والاتحاد الأوروبي",
      summary: "توقيع اتفاقية تجارية تاريخية تهدف إلى تعزيز التبادل التجاري وخفض الرسوم الجمركية بنسبة 25%",
      category: "Economic",
      timestamp: "ساعة واحدة",
      source: "Reuters",
      urgency: "high" as const,
      url: "https://www.reuters.com/business"
    },
    {
      id: 3,
      title: "بايدن يستضيف قمة عالمية لمواجهة التغيير المناخي",
      summary: "الرئيس بايدن يدعو قادة العالم لحضور قمة طارئة في واشنطن لمناقشة إجراءات مواجهة الاحتباس الحراري",
      category: "Political",
      timestamp: "ساعتان",
      source: "BBC News",
      urgency: "medium" as const,
      url: "https://www.bbc.com/news/world"
    },
    {
      id: 4,
      title: "انخفاض أسعار النفط عالمياً بنسبة 8%",
      summary: "أسعار النفط الخام تشهد انخفاضاً حاداً وسط توقعات بزيادة الإنتاج من الدول المنتجة الرئيسية",
      category: "Economic",
      timestamp: "3 ساعات",
      source: "Bloomberg",
      urgency: "high" as const,
      url: "https://www.bloomberg.com/energy"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Globe className="w-16 h-16 mx-auto mb-4 text-blue-200" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              بوصلة الأحداث العالمية
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              مصدرك الشامل للأحداث السياسية العالمية والتطورات الاقتصادية 
              والتحديثات المباشرة من قادة العالم
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Events Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Breaking News */}
            <section>
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">الأخبار العاجلة</h2>
              </div>
              <div className="space-y-4">
                {majorEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </section>

            {/* Regional Focus */}
            <RegionalEvents />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Social Media Feed */}
            <SocialMediaFeed />
            
            {/* Economic Indicators */}
            <EconomicIndicators />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

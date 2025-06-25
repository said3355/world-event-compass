
import React from 'react';
import { MapPin, AlertCircle } from 'lucide-react';
import EventCard from './EventCard';

const RegionalEvents = () => {
  const regionalEvents = [
    {
      id: 7,
      title: "اتفاقية سلام تاريخية في الشرق الأوسط",
      summary: "توقيع اتفاقية سلام جديدة بين عدة دول في المنطقة بوساطة دولية، تهدف إلى تحقيق الاستقرار الإقليمي",
      category: "Political",
      timestamp: "2 ساعة",
      source: "الجزيرة",
      urgency: "high" as const,
      url: "https://www.aljazeera.com/news/middleeast/"
    },
    {
      id: 8,
      title: "اكتشاف احتياطيات نفطية ضخمة في الخليج العربي",
      summary: "اكتشاف حقل نفطي جديد يحتوي على 15 مليار برميل، مما قد يغير خريطة الطاقة في المنطقة",
      category: "Economic",
      timestamp: "4 ساعات",
      source: "العربية",
      urgency: "high" as const,
      url: "https://www.alarabiya.net/business"
    },
    {
      id: 9,
      title: "قمة اقتصادية عربية طارئة في الرياض",
      summary: "انعقاد قمة اقتصادية عاجلة لمناقشة التحديات الاقتصادية العالمية وتأثيرها على المنطقة",
      category: "Economic",
      timestamp: "6 ساعات",
      source: "رويترز",
      urgency: "medium" as const,
      url: "https://www.reuters.com/world/middle-east"
    },
    {
      id: 10,
      title: "مبادرة جديدة لمكافحة التغيير المناخي في المنطقة",
      summary: "إطلاق مبادرة إقليمية شاملة للطاقة المتجددة بتمويل 50 مليار دولار لمواجهة تحديات المناخ",
      category: "Regional",
      timestamp: "8 ساعات",
      source: "بلومبرغ",
      urgency: "medium" as const,
      url: "https://www.bloomberg.com/news/regions/middle-east"
    }
  ];

  return (
    <section id="middle-east">
      <div className="flex items-center mb-6">
        <MapPin className="w-6 h-6 text-orange-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">تركيز الشرق الأوسط</h2>
      </div>
      
      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
        <div className="flex items-center">
          <AlertCircle className="w-5 h-5 text-orange-600 mr-2" />
          <p className="text-orange-800 font-medium">
            تغطية متخصصة للتطورات الإقليمية والأحداث المؤثرة من مصادر دولية متعددة
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        {regionalEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default RegionalEvents;

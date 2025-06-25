
import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';

const EconomicIndicators = () => {
  const indicators = [
    {
      name: "مؤشر S&P 500",
      value: "4,245.12",
      change: "+2.8%",
      trend: "up",
      color: "text-green-600"
    },
    {
      name: "النفط الخام",
      value: "$82.45",
      change: "-3.2%",
      trend: "down",
      color: "text-red-600"
    },
    {
      name: "الذهب",
      value: "$2,015.80",
      change: "+1.5%",
      trend: "up",
      color: "text-green-600"
    },
    {
      name: "البيتكوين",
      value: "$48,920",
      change: "+4.7%",
      trend: "up",
      color: "text-green-600"
    },
    {
      name: "اليورو/دولار",
      value: "1.0856",
      change: "-0.4%",
      trend: "down",
      color: "text-red-600"
    },
    {
      name: "داو جونز",
      value: "34,892.10",
      change: "+1.9%",
      trend: "up",
      color: "text-green-600"
    }
  ];

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <BarChart3 className="w-6 h-6 text-green-600 mr-2" />
        <h2 className="text-xl font-bold text-gray-900">مراقب الأسواق</h2>
      </div>
      
      <div className="space-y-4">
        {indicators.map((indicator, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-semibold text-gray-900">{indicator.name}</h3>
              <p className="text-lg font-bold text-gray-800">{indicator.value}</p>
            </div>
            <div className="flex items-center">
              {indicator.trend === 'up' ? (
                <TrendingUp className={`w-5 h-5 ${indicator.color} mr-1`} />
              ) : (
                <TrendingDown className={`w-5 h-5 ${indicator.color} mr-1`} />
              )}
              <span className={`font-semibold ${indicator.color}`}>
                {indicator.change}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <div className="flex items-center mb-2">
          <DollarSign className="w-5 h-5 text-yellow-600 mr-2" />
          <h4 className="font-semibold text-yellow-900">تنبيه اقتصادي</h4>
        </div>
        <p className="text-yellow-800 text-sm">
          البنك المركزي الأوروبي سيعلن قرار أسعار الفائدة غداً. توقع تقلبات في أسواق العملات.
        </p>
      </div>
    </section>
  );
};

export default EconomicIndicators;

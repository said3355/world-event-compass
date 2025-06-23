
import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';

const EconomicIndicators = () => {
  const indicators = [
    {
      name: "S&P 500",
      value: "4,185.47",
      change: "+1.2%",
      trend: "up",
      color: "text-green-600"
    },
    {
      name: "Oil (Brent)",
      value: "$89.23",
      change: "-0.8%",
      trend: "down",
      color: "text-red-600"
    },
    {
      name: "Gold",
      value: "$1,967.50",
      change: "+0.3%",
      trend: "up",
      color: "text-green-600"
    },
    {
      name: "Bitcoin",
      value: "$42,150",
      change: "+2.1%",
      trend: "up",
      color: "text-green-600"
    }
  ];

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <BarChart3 className="w-6 h-6 text-green-600 mr-2" />
        <h2 className="text-xl font-bold text-gray-900">Market Watch</h2>
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
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center mb-2">
          <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
          <h4 className="font-semibold text-blue-900">Economic Alert</h4>
        </div>
        <p className="text-blue-800 text-sm">
          Federal Reserve meeting scheduled for next week. Expect increased market volatility.
        </p>
      </div>
    </section>
  );
};

export default EconomicIndicators;

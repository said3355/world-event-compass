
import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';

const EconomicIndicators = () => {
  const indicators = [
    {
      name: "S&P 500 Index",
      value: "4,387.16",
      change: "+1.2%",
      trend: "up",
      color: "text-green-600"
    },
    {
      name: "Crude Oil",
      value: "$89.75",
      change: "+4.1%",
      trend: "up",
      color: "text-green-600"
    },
    {
      name: "Gold",
      value: "$1,987.20",
      change: "-0.8%",
      trend: "down",
      color: "text-red-600"
    },
    {
      name: "Bitcoin",
      value: "$43,850",
      change: "+2.3%",
      trend: "up",
      color: "text-green-600"
    },
    {
      name: "EUR/USD",
      value: "1.0721",
      change: "-1.1%",
      trend: "down",
      color: "text-red-600"
    },
    {
      name: "Dow Jones",
      value: "35,241.59",
      change: "+0.9%",
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
      
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <div className="flex items-center mb-2">
          <DollarSign className="w-5 h-5 text-yellow-600 mr-2" />
          <h4 className="font-semibold text-yellow-900">Economic Alert</h4>
        </div>
        <p className="text-yellow-800 text-sm">
          Federal Reserve meeting scheduled for tomorrow. Expect potential volatility in currency markets.
        </p>
      </div>
    </section>
  );
};

export default EconomicIndicators;

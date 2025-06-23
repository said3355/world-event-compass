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
      title: "Biden Administration Announces New Climate Initiatives",
      summary: "President Biden unveils comprehensive climate action plan targeting carbon neutrality by 2035",
      category: "Political",
      timestamp: "2 hours ago",
      source: "Reuters",
      urgency: "high" as const,
      url: "https://www.reuters.com/world/us/"
    },
    {
      id: 2,
      title: "Federal Reserve Maintains Interest Rates",
      summary: "Fed keeps rates steady at 5.25-5.5% as inflation shows signs of cooling",
      category: "Economic",
      timestamp: "4 hours ago",
      source: "Bloomberg",
      urgency: "medium" as const,
      url: "https://www.bloomberg.com/economics"
    },
    {
      id: 3,
      title: "UN Security Council Addresses Global Security Concerns",
      summary: "Emergency session focuses on peacekeeping efforts and international cooperation",
      category: "Political",
      timestamp: "6 hours ago",
      source: "AP News",
      urgency: "high" as const,
      url: "https://apnews.com/hub/united-nations"
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
              World Events Compass
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your comprehensive source for global political events, economic developments, 
              and real-time updates from world leaders
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
                <h2 className="text-2xl font-bold text-gray-900">Breaking News</h2>
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

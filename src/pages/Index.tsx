
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
      title: "Biden Signs Historic Climate Investment Bill",
      summary: "President Biden has signed the largest climate investment bill in US history, allocating $370 billion toward clean energy initiatives and carbon reduction goals",
      category: "Political",
      timestamp: "25 minutes ago",
      source: "CNN",
      urgency: "high" as const,
      url: "https://www.cnn.com/politics"
    },
    {
      id: 2,
      title: "Federal Reserve Raises Interest Rates by 0.75%",
      summary: "The Fed announces another significant rate hike to combat inflation, marking the sixth consecutive increase this year as economic pressures mount",
      category: "Economic",
      timestamp: "1 hour ago",
      source: "Reuters",
      urgency: "high" as const,
      url: "https://www.reuters.com/business"
    },
    {
      id: 3,
      title: "NATO Summit Addresses Global Security Challenges",
      summary: "World leaders gather in Brussels for emergency NATO summit to discuss emerging security threats and strengthen alliance cooperation",
      category: "Political",
      timestamp: "2 hours ago",
      source: "BBC News",
      urgency: "medium" as const,
      url: "https://www.bbc.com/news/world"
    },
    {
      id: 4,
      title: "Global Oil Prices Surge 12% Amid Supply Concerns",
      summary: "Crude oil prices hit 6-month highs as OPEC+ announces production cuts and geopolitical tensions affect major shipping routes",
      category: "Economic",
      timestamp: "3 hours ago",
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

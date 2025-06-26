
import React from 'react';
import { MapPin, AlertCircle } from 'lucide-react';
import EventCard from './EventCard';

const RegionalEvents = () => {
  const regionalEvents = [
    {
      id: 7,
      title: "Historic Middle East Peace Agreement Signed",
      summary: "A groundbreaking peace agreement has been signed between several regional nations with international mediation, aiming to achieve long-term regional stability",
      category: "Political",
      timestamp: "2 hours ago",
      source: "Al Jazeera",
      urgency: "high" as const,
      url: "https://www.aljazeera.com/news/middleeast/"
    },
    {
      id: 8,
      title: "Major Oil Reserves Discovered in Persian Gulf",
      summary: "A new oil field containing an estimated 18 billion barrels has been discovered, potentially reshaping the regional energy landscape",
      category: "Economic",
      timestamp: "4 hours ago",
      source: "Al Arabiya",
      urgency: "high" as const,
      url: "https://www.alarabiya.net/business"
    },
    {
      id: 9,
      title: "Emergency Arab Economic Summit Convenes in Riyadh",
      summary: "An urgent economic summit is underway to address global economic challenges and their impact on the Middle East region",
      category: "Economic",
      timestamp: "6 hours ago",
      source: "Reuters",
      urgency: "medium" as const,
      url: "https://www.reuters.com/world/middle-east"
    },
    {
      id: 10,
      title: "Regional Climate Action Initiative Launched",
      summary: "A comprehensive regional renewable energy initiative worth $75 billion has been launched to combat climate challenges",
      category: "Regional",
      timestamp: "8 hours ago",
      source: "Bloomberg",
      urgency: "medium" as const,
      url: "https://www.bloomberg.com/news/regions/middle-east"
    }
  ];

  return (
    <section id="middle-east">
      <div className="flex items-center mb-6">
        <MapPin className="w-6 h-6 text-orange-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">Middle East Focus</h2>
      </div>
      
      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
        <div className="flex items-center">
          <AlertCircle className="w-5 h-5 text-orange-600 mr-2" />
          <p className="text-orange-800 font-medium">
            Specialized coverage of regional developments and impactful events from multiple international sources
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

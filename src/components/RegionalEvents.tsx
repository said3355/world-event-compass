
import React from 'react';
import { MapPin, AlertCircle } from 'lucide-react';
import EventCard from './EventCard';

const RegionalEvents = () => {
  const regionalEvents = [
    {
      id: 4,
      title: "Iran Nuclear Program Monitoring Continues",
      summary: "IAEA inspectors report on compliance with nuclear safeguards amid ongoing diplomatic discussions",
      category: "Regional",
      timestamp: "1 hour ago",
      source: "BBC News",
      urgency: "high" as const,
      url: "https://www.bbc.com/news/world-middle-east"
    },
    {
      id: 5,
      title: "Israeli Tech Sector Shows Strong Growth",
      summary: "Jerusalem Post reports record venture capital investments in cybersecurity and AI startups",
      category: "Economic",
      timestamp: "3 hours ago",
      source: "Jerusalem Post",
      urgency: "medium" as const,
      url: "https://www.jpost.com/business-and-innovation"
    },
    {
      id: 6,
      title: "Middle East Diplomatic Initiatives Progress",
      summary: "Regional stakeholders continue dialogue on economic cooperation and stability measures",
      category: "Political",
      timestamp: "5 hours ago",
      source: "Al Jazeera",
      urgency: "medium" as const,
      url: "https://www.aljazeera.com/news/middleeast/"
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
            Specialized coverage of Iranian and Israeli developments from multiple international sources
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

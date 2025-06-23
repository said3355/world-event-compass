
import React from 'react';
import { MapPin, AlertCircle } from 'lucide-react';
import EventCard from './EventCard';

const RegionalEvents = () => {
  const regionalEvents = [
    {
      id: 4,
      title: "Iran Nuclear Program Discussions Resume",
      summary: "International mediators return to Vienna for renewed talks on nuclear agreement compliance and sanctions relief",
      category: "Regional",
      timestamp: "1 hour ago",
      source: "BBC News",
      urgency: "high" as const
    },
    {
      id: 5,
      title: "Israeli Technology Sector Reaches Record Investment",
      summary: "Foreign investment in Israeli startups surpasses $8 billion this quarter, focusing on cybersecurity and AI",
      category: "Economic",
      timestamp: "3 hours ago",
      source: "Haaretz",
      urgency: "medium" as const
    },
    {
      id: 6,
      title: "Middle East Peace Initiative Gains Momentum",
      summary: "Regional leaders express cautious optimism about new diplomatic framework for regional cooperation",
      category: "Political",
      timestamp: "5 hours ago",
      source: "Al Jazeera",
      urgency: "medium" as const
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

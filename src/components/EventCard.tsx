import React from 'react';
import { Clock, ExternalLink } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  summary: string;
  category: string;
  timestamp: string;
  source: string;
  urgency: 'low' | 'medium' | 'high';
  url?: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const urgencyColors = {
    low: 'border-green-500 bg-green-50',
    medium: 'border-yellow-500 bg-yellow-50',
    high: 'border-red-500 bg-red-50'
  };

  const categoryColors = {
    Political: 'bg-blue-100 text-blue-800',
    Economic: 'bg-green-100 text-green-800',
    Social: 'bg-purple-100 text-purple-800',
    Regional: 'bg-orange-100 text-orange-800'
  };

  const handleClick = () => {
    if (event.url) {
      window.open(event.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className={`border-l-4 ${urgencyColors[event.urgency]} p-6 rounded-r-lg shadow-md hover:shadow-lg transition-shadow ${event.url ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-start mb-3">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[event.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-800'}`}>
          {event.category}
        </span>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-1" />
          {event.timestamp}
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
        {event.title}
      </h3>
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        {event.summary}
      </p>
      
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600 font-medium">
          Source: {event.source}
        </span>
        {event.url && <ExternalLink className="w-4 h-4 text-gray-500 hover:text-blue-600" />}
      </div>
    </div>
  );
};

export default EventCard;

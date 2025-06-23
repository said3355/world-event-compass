
import React from 'react';
import { Twitter, MessageCircle, Share, Heart } from 'lucide-react';

const SocialMediaFeed = () => {
  const socialPosts = [
    {
      id: 1,
      author: "President Biden",
      handle: "@POTUS",
      content: "Today's G20 discussions represent a critical step forward for international cooperation on climate action. Together, we can build a sustainable future.",
      timestamp: "3h",
      platform: "twitter",
      verified: true,
      engagement: { likes: 12400, retweets: 3200, replies: 850 }
    },
    {
      id: 2,
      author: "Emmanuel Macron",
      handle: "@EmmanuelMacron",
      content: "L'Europe doit continuer à jouer un rôle de premier plan dans la stabilité mondiale. Nos valeurs démocratiques sont notre force.",
      timestamp: "5h",
      platform: "twitter",
      verified: true,
      engagement: { likes: 8900, retweets: 2100, replies: 420 }
    },
    {
      id: 3,
      author: "Volodymyr Zelenskyy",
      handle: "@ZelenskyyUa",
      content: "Grateful for continued international support. Unity remains our greatest strength in these challenging times.",
      timestamp: "7h",
      platform: "twitter",
      verified: true,
      engagement: { likes: 25600, retweets: 8900, replies: 1200 }
    }
  ];

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <MessageCircle className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-bold text-gray-900">World Leaders</h2>
      </div>
      
      <div className="space-y-6">
        {socialPosts.map(post => (
          <div key={post.id} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="ml-3 flex-1">
                <div className="flex items-center">
                  <span className="font-bold text-gray-900">{post.author}</span>
                  {post.verified && (
                    <div className="w-4 h-4 bg-blue-500 rounded-full ml-1 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <span className="text-gray-500 text-sm">{post.handle} · {post.timestamp}</span>
              </div>
              <Twitter className="w-5 h-5 text-blue-400" />
            </div>
            
            <p className="text-gray-800 mb-4 leading-relaxed">
              {post.content}
            </p>
            
            <div className="flex items-center space-x-6 text-gray-500">
              <div className="flex items-center hover:text-blue-600 cursor-pointer">
                <MessageCircle className="w-4 h-4 mr-1" />
                <span className="text-sm">{post.engagement.replies}</span>
              </div>
              <div className="flex items-center hover:text-green-600 cursor-pointer">
                <Share className="w-4 h-4 mr-1" />
                <span className="text-sm">{post.engagement.retweets}</span>
              </div>
              <div className="flex items-center hover:text-red-600 cursor-pointer">
                <Heart className="w-4 h-4 mr-1" />
                <span className="text-sm">{post.engagement.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialMediaFeed;

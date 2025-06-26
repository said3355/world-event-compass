
import React from 'react';
import { Twitter, MessageCircle, Share, Heart } from 'lucide-react';

const SocialMediaFeed = () => {
  const socialPosts = [
    {
      id: 1,
      author: "Donald J. Trump",
      handle: "@realDonaldTrump",
      content: "America needs strong leadership! We will rebuild our economy and protect our borders. Victory is coming in 2024! 🇺🇸",
      timestamp: "45 minutes ago",
      platform: "twitter",
      verified: true,
      engagement: { likes: 95200, retweets: 31400, replies: 8100 }
    },
    {
      id: 2,
      author: "President Biden",
      handle: "@POTUS",
      content: "We're leading the world in fighting climate change. Our investments today in clean energy mean more jobs and a better future for our children.",
      timestamp: "1 hour ago",
      platform: "twitter",
      verified: true,
      engagement: { likes: 58700, retweets: 18200, replies: 4900 }
    },
    {
      id: 3,
      author: "Emmanuel Macron",
      handle: "@EmmanuelMacron",
      content: "Europe and the United States must work together for a more stable world. Our transatlantic partnership is essential for global peace.",
      timestamp: "2 hours ago",
      platform: "twitter",
      verified: true,
      engagement: { likes: 22300, retweets: 6800, replies: 2100 }
    },
    {
      id: 4,
      author: "Volodymyr Zelenskyy",
      handle: "@ZelenskyyUa",
      content: "Thank you for the continued international support. Unity is our greatest strength in these difficult times. Ukraine will prevail! 🇺🇦",
      timestamp: "3 hours ago",
      platform: "twitter",
      verified: true,
      engagement: { likes: 74500, retweets: 23100, replies: 3800 }
    },
    {
      id: 5,
      author: "Justin Trudeau",
      handle: "@JustinTrudeau",
      content: "Canada remains committed to social justice and climate solutions. Together we can build a more equitable and sustainable future for all.",
      timestamp: "4 hours ago",
      platform: "twitter",
      verified: true,
      engagement: { likes: 28900, retweets: 8200, replies: 2600 }
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
                <span className="text-sm">{post.engagement.replies.toLocaleString()}</span>
              </div>
              <div className="flex items-center hover:text-green-600 cursor-pointer">
                <Share className="w-4 h-4 mr-1" />
                <span className="text-sm">{post.engagement.retweets.toLocaleString()}</span>
              </div>
              <div className="flex items-center hover:text-red-600 cursor-pointer">
                <Heart className="w-4 h-4 mr-1" />
                <span className="text-sm">{post.engagement.likes.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialMediaFeed;

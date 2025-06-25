
import React from 'react';
import { Twitter, MessageCircle, Share, Heart } from 'lucide-react';

const SocialMediaFeed = () => {
  const socialPosts = [
    {
      id: 1,
      author: "Donald J. Trump",
      handle: "@realDonaldTrump",
      content: "أمريكا بحاجة إلى قيادة قوية! سنعيد بناء اقتصادنا ونحمي حدودنا. النصر قادم في 2024! 🇺🇸",
      timestamp: "45 دقيقة",
      platform: "twitter",
      verified: true,
      engagement: { likes: 89500, retweets: 28300, replies: 7200 }
    },
    {
      id: 2,
      author: "President Biden",
      handle: "@POTUS",
      content: "نحن نقود العالم في مواجهة التغيير المناخي. استثماراتنا اليوم في الطاقة النظيفة تعني وظائف أكثر ومستقبل أفضل لأطفالنا.",
      timestamp: "ساعة واحدة",
      platform: "twitter",
      verified: true,
      engagement: { likes: 52400, retweets: 15600, replies: 4300 }
    },
    {
      id: 3,
      author: "Emmanuel Macron",
      handle: "@EmmanuelMacron",
      content: "L'Europe et les États-Unis doivent travailler ensemble pour un monde plus stable. Notre partenariat transatlantique est essentiel.",
      timestamp: "ساعتان",
      platform: "twitter",
      verified: true,
      engagement: { likes: 18900, retweets: 5200, replies: 1850 }
    },
    {
      id: 4,
      author: "Volodymyr Zelenskyy",
      handle: "@ZelenskyyUa",
      content: "شكراً للدعم الدولي المستمر. الوحدة هي قوتنا العظمى في هذه الأوقات الصعبة. أوكرانيا ستنتصر! 🇺🇦",
      timestamp: "3 ساعات",
      platform: "twitter",
      verified: true,
      engagement: { likes: 67200, retweets: 19400, replies: 3100 }
    },
    {
      id: 5,
      author: "Justin Trudeau",
      handle: "@JustinTrudeau",
      content: "كندا ملتزمة بالعدالة الاجتماعية والحلول المناخية. معاً يمكننا بناء مستقبل أكثر عدالة واستدامة للجميع.",
      timestamp: "4 ساعات",
      platform: "twitter",
      verified: true,
      engagement: { likes: 23600, retweets: 6800, replies: 2100 }
    }
  ];

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <MessageCircle className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-bold text-gray-900">قادة العالم</h2>
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

import { ArrowRight, Calendar } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
}

interface NewsCardProps {
  news: NewsItem;
  onReadMore: () => void;
}

export function NewsCard({ news, onReadMore }: NewsCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Safety':
        return 'bg-green-100 text-green-700';
      case 'Achievement':
        return 'bg-purple-100 text-purple-700';
      case 'Development':
        return 'bg-blue-100 text-blue-700';
      case 'Event':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-200 overflow-hidden group">
      <div className="p-6 space-y-4">
        {/* Category Badge */}
        <span className={`inline-block px-3 py-1 rounded-full text-xs ${getCategoryColor(news.category)}`}>
          {news.category}
        </span>

        {/* Title */}
        <h4 className="text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
          {news.title}
        </h4>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Calendar className="w-4 h-4" />
          <span>
            {new Date(news.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 line-clamp-3">{news.description}</p>

        {/* Read More Button */}
        <button
          onClick={onReadMore}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group/btn"
        >
          <span className="text-sm">Read more</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

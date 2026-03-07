"use client";
import { Bell, Calendar, User } from "lucide-react";

const announcements = [
  {
    title: "রমজানের সময়সূচী",
    content: "রমজান মাসের নামাজ এবং তারাবি সময়সূচী প্রকাশিত হয়েছে।",
    date: "১৫ মার্চ ২০২৪",
    author: "প্রধান শিক্ষক",
    priority: "high"
  },
  {
    title: "এক্সাম রুটিন প্রকাশ",
    content: "চূড়ান্ত পরীক্ষার রুটিন এখন উপলব্ধ। ছাত্রদের পরীক্ষার প্রস্তুতি নেওয়ার জন্য অনুরোধ করা হচ্ছে।",
    date: "১০ মার্চ ২০২৪",
    author: "পরীক্ষা কমিটি",
    priority: "medium"
  },
  {
    title: "স্কুল হলিডে ঘোষণা",
    content: "২৫ মার্চ থেকে ৩০ মার্চ পর্যন্ত স্কুল বন্ধ থাকবে।",
    date: "৫ মার্চ ২০২৪",
    author: "প্রশাসন",
    priority: "low"
  }
];

export default function Announcements() {
  return (
    <div className="space-y-6">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold gradient-text mb-2">ঘোষণা</h1>
        <p className="text-gray-600 text-lg">মাদ্রাসার গুরুত্বপূর্ণ ঘোষণা এবং নোটিশ</p>
      </div>
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">সাম্প্রতিক ঘোষণা</h2>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
            নতুন ঘোষণা যোগ করুন
          </button>
        </div>
        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <div key={index} className={`p-4 rounded-lg border-l-4 ${
              announcement.priority === 'high' ? 'border-red-500 bg-red-50' :
              announcement.priority === 'medium' ? 'border-yellow-500 bg-yellow-50' :
              'border-blue-500 bg-blue-50'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    {announcement.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{announcement.content}</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {announcement.date}
                    <User className="h-4 w-4 ml-4 mr-1" />
                    {announcement.author}
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  announcement.priority === 'high' ? 'bg-red-200 text-red-800' :
                  announcement.priority === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                  'bg-blue-200 text-blue-800'
                }`}>
                  {announcement.priority === 'high' ? 'উচ্চ' :
                   announcement.priority === 'medium' ? 'মাঝারি' : 'সাধারণ'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

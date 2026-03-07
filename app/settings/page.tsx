"use client";
import { Settings, User, Shield, Bell, Palette } from "lucide-react";

const settingsSections = [
  {
    title: "প্রোফাইল সেটিংস",
    description: "আপনার প্রোফাইল তথ্য পরিবর্তন করুন",
    icon: User,
    items: ["নাম পরিবর্তন", "ইমেইল আপডেট", "পাসওয়ার্ড পরিবর্তন"]
  },
  {
    title: "সিস্টেম সেটিংস",
    description: "মাদ্রাসা ব্যবস্থাপনা সেটিংস",
    icon: Settings,
    items: ["স্কুলের তথ্য", "ক্লাস সেটআপ", "ফি স্ট্রাকচার"]
  },
  {
    title: "সিকিউরিটি",
    description: "সেটিংস এবং প্রাইভেসি",
    icon: Shield,
    items: ["টু-ফ্যাক্টর অথেন্টিকেশন", "পাসওয়ার্ড পলিসি", "ডেটা ব্যাকআপ"]
  },
  {
    title: "নোটিফিকেশন",
    description: "নোটিফিকেশন পছন্দসমূহ",
    icon: Bell,
    items: ["ইমেইল নোটিফিকেশন", "পুশ নোটিফিকেশন", "এসএমএস অ্যালার্ট"]
  }
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold gradient-text mb-2">সেটিংস</h1>
        <p className="text-gray-600 text-lg">মাদ্রাসা ব্যবস্থাপনা সেটিংস এবং কনফিগারেশন</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsSections.map((section, index) => (
          <div key={index} className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 card-hover">
            <div className="flex items-center mb-4">
              <section.icon className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
                <p className="text-sm text-gray-600">{section.description}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
              পরিবর্তন করুন
            </button>
          </div>
        ))}
      </div>
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
          <Palette className="h-6 w-6 mr-2" />
          থিম এবং ডিসপ্লে
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
            <div className="w-full h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded mb-2"></div>
            <p className="text-center font-medium">ডিফল্ট থিম</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
            <div className="w-full h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded mb-2"></div>
            <p className="text-center font-medium">ডার্ক থিম</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
            <div className="w-full h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded mb-2"></div>
            <p className="text-center font-medium">লাইট থিম</p>
          </div>
        </div>
      </div>
    </div>
  );
}

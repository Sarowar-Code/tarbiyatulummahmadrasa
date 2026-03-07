"use client";
import { FileText, TrendingUp, Users, DollarSign } from "lucide-react";

const reports = [
  { title: "মাসিক উপস্থিতি রিপোর্ট", description: "ছাত্রদের মাসিক উপস্থিতি বিশ্লেষণ", icon: Users },
  { title: "ফি সংগ্রহ রিপোর্ট", description: "মাসিক ফি সংগ্রহের বিস্তারিত তথ্য", icon: DollarSign },
  { title: "পারফরমেন্স রিপোর্ট", description: "ছাত্রদের একাডেমিক পারফরমেন্স", icon: TrendingUp },
  { title: "বিশ্লেষণ রিপোর্ট", description: "মাদ্রাসার সামগ্রিক বিশ্লেষণ", icon: FileText },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold gradient-text mb-2">রিপোর্টস</h1>
        <p className="text-gray-600 text-lg">মাদ্রাসার বিভিন্ন রিপোর্ট এবং বিশ্লেষণ</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reports.map((report, index) => (
          <div key={index} className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 card-hover">
            <div className="flex items-center space-x-4">
              <report.icon className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="font-semibold text-gray-800">{report.title}</h3>
                <p className="text-sm text-gray-600">{report.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">সাম্প্রতিক রিপোর্টস</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-green-50">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">রিপোর্টের নাম</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">তারিখ</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">স্ট্যাটাস</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 text-sm text-gray-900">জানুয়ারি উপস্থিতি রিপোর্ট</td>
                <td className="px-4 py-2 text-sm text-gray-500">১৫ জানুয়ারি ২০২৪</td>
                <td className="px-4 py-2 text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">প্রস্তুত</span></td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm text-gray-900">ফেব্রুয়ারি ফি রিপোর্ট</td>
                <td className="px-4 py-2 text-sm text-gray-500">১৫ ফেব্রুয়ারি ২০২৪</td>
                <td className="px-4 py-2 text-sm"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">প্রসেসিং</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

"use client";
import StatCard from "@/components/StatCard";
import { dashboardStats } from "@/lib/dummy-data";
import { DollarSign, UserCheck, Users } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "জানুয়ারি", fees: 25000 },
  { name: "ফেব্রুয়ারি", fees: 26000 },
  { name: "মার্চ", fees: 27000 },
  { name: "এপ্রিল", fees: 27500 },
  { name: "মে", fees: 28000 },
  { name: "জুন", fees: 28500 },
  { name: "জুলাই", fees: 29000 },
  { name: "আগস্ট", fees: 29500 },
  { name: "সেপ্টেম্বর", fees: 30000 },
  { name: "অক্টোবর", fees: 30000 },
  { name: "নভেম্বর", fees: 30500 },
  { name: "ডিসেম্বর", fees: 31000 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold gradient-text mb-2">ড্যাশবোর্ড</h1>
        <p className="text-gray-600 text-lg">মাদ্রাসার সাম্প্রতিক পরিসংখ্যান এবং তথ্য</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="মোট ছাত্র"
          value={dashboardStats.totalStudents}
          icon={Users}
        />
        <StatCard
          title="মোট শিক্ষক"
          value={dashboardStats.totalTeachers}
          icon={UserCheck}
        />
        <StatCard
          title="আজকের উপস্থিতি"
          value={dashboardStats.todayAttendance}
          icon={UserCheck}
        />
        <StatCard
          title="মাসিক ফি সংগ্রহ"
          value={`৳${dashboardStats.monthlyFees}`}
          icon={DollarSign}
        />
      </div>
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 card-hover">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">মাসিক ফি সংগ্রহ চার্ট</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="fees" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

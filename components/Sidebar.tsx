// src/components/Sidebar.tsx
import { Bell, BookOpen, Calendar, DollarSign, Home, Settings, UserCheck, Users, BarChart3 } from "lucide-react";
import Link from "next/link";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const menuItems = [
    { href: "/dashboard", label: "ড্যাশবোর্ড", icon: Home },
    { href: "/students", label: "ছাত্র", icon: Users },
    { href: "/attendance", label: "উপস্থিতি", icon: Calendar },
    { href: "/fees", label: "ফি", icon: DollarSign },
    { href: "/student-portal", label: "ছাত্র পোর্টাল", icon: UserCheck },
    { href: "/library", label: "লাইব্রেরি", icon: BookOpen },
    { href: "/reports", label: "রিপোর্টস", icon: BarChart3 },
    { href: "/announcements", label: "ঘোষণা", icon: Bell },
    { href: "/settings", label: "সেটিংস", icon: Settings },
  ];

  return (
    <div
      className={`fixed md:relative md:translate-x-0 inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-green-800 via-green-700 to-green-600 text-white p-6 shadow-2xl transform transition-transform duration-300 ease-in-out md:block ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <h1 className="text-2xl font-bold mb-8 text-green-100 border-b border-green-500 pb-4">
        তারবিয়াতুল উম্মাহ মাদ্রাসা
      </h1>
      <nav>
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 hover:shadow-lg transition-all duration-200 border-l-4 border-transparent hover:border-green-300"
              >
                <item.icon
                  size={22}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
                <span className="font-medium text-green-50 group-hover:text-white">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

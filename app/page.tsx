import {
  ArrowRight,
  Bell,
  BookOpen,
  Calendar,
  DollarSign,
  GraduationCap,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.jpg"
                alt="তারবিয়াতুল উম্মাহ মাদ্রাসা"
                className="h-12 w-12 rounded-lg object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-green-800">
                  তারবিয়াতুল উম্মাহ মাদরাসা হাটহাজারী
                </h1>
                <p className="text-xs text-gray-600">
                  মাদানি নেসাবের পূর্ণাঙ্গ অনুসরণ
                </p>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link
                href="#about"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                আমাদের সম্পর্কে
              </Link>
              <Link
                href="#features"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                বৈশিষ্ট্যসমূহ
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                যোগাযোগ
              </Link>
              <Link
                href="/dashboard"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                ড্যাশবোর্ড <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  আধুনিক <span className="text-green-600">মাদ্রাসা</span>{" "}
                  ব্যবস্থাপনা
                </h1>
                <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                  মাদানি নেসাবের পূর্ণাঙ্গ অনুসরণ ও অনুকরণে প্রতিষ্ঠিত।
                  ছাত্র-ছাত্রীদের আধ্যাত্মিক ও দুনিয়াবি শিক্ষার সুসমন্বয়।
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/dashboard"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  শুরু করুন
                </Link>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors">
                  আরও জানুন
                </button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-gray-600">ছাত্র-ছাত্রী</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-gray-600">শিক্ষক</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">10+</div>
                  <div className="text-gray-600">বছরের অভিজ্ঞতা</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                  মাদ্রাসা ভবন
                </h3>
                <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/heroimage.jpg"
                    alt="তারবিয়াতুল উম্মাহ মাদ্রাসা ভবন"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              আমাদের বৈশিষ্ট্যসমূহ
            </h2>
            <p className="text-xl text-gray-600">
              আধুনিক প্রযুক্তি দিয়ে মাদ্রাসা ব্যবস্থাপনা
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ছাত্র ব্যবস্থাপনা
              </h3>
              <p className="text-gray-600">
                ছাত্র-ছাত্রীদের তথ্য, উপস্থিতি এবং পারফরমেন্স ট্র্যাকিং
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                লাইব্রেরি
              </h3>
              <p className="text-gray-600">
                বই এবং শিক্ষা উপকরণের ব্যবস্থাপনা সিস্টেম
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <DollarSign className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ফি ব্যবস্থাপনা
              </h3>
              <p className="text-gray-600">ফি সংগ্রহ, রেকর্ড এবং রিপোর্টিং</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <Bell className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ঘোষণা
              </h3>
              <p className="text-gray-600">
                গুরুত্বপূর্ণ নোটিশ এবং ঘোষণা ব্যবস্থাপনা
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-green-50 to-green-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                আমাদের সম্পর্কে
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                তারবিয়াতুল উম্মাহ মাদ্রাসা মাদানি নেসাবের পূর্ণাঙ্গ অনুসরণ ও
                অনুকরণে প্রতিষ্ঠিত। আমরা ছাত্র-ছাত্রীদের আধ্যাত্মিক ও দুনিয়াবি
                শিক্ষার সুসমন্বয় নিশ্চিত করি।
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-green-600 text-white p-2 rounded-full mr-4">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <span className="text-gray-700">
                    নিয়মিত ক্লাস এবং পরীক্ষা
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-600 text-white p-2 rounded-full mr-4">
                    <Users className="h-5 w-5" />
                  </div>
                  <span className="text-gray-700">অভিজ্ঞ শিক্ষকবৃন্দ</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-600 text-white p-2 rounded-full mr-4">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <span className="text-gray-700">সমৃদ্ধ লাইব্রেরি</span>
                </div>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                আমাদের লক্ষ্য
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2"></div>
                  </div>
                  <span className="text-gray-700">
                    ইসলামী শিক্ষার সাথে আধুনিক শিক্ষার সমন্বয়
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2"></div>
                  </div>
                  <span className="text-gray-700">
                    নৈতিক ও চারিত্রিক উন্নয়ন
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2"></div>
                  </div>
                  <span className="text-gray-700">
                    সমাজসেবা ও জনকল্যাণমূলক কাজ
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2"></div>
                  </div>
                  <span className="text-gray-700">
                    উচ্চ শিক্ষার জন্য প্রস্তুতি
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              যোগাযোগ করুন
            </h2>
            <p className="text-xl text-gray-600">
              আমাদের সাথে যোগাযোগের জন্য নিচের তথ্য ব্যবহার করুন
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-green-600" />
                  স্থায়ী মানযিল - কিতাব বিভাগ
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>দক্ষিণ সুজানগর, পশ্চিম দেওয়ান নগর, হাটহাজারী পৌরসভা।</p>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-green-600" />
                    <span>01727958565 / 01866785878</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-blue-600" />
                  অস্থায়ী মানযিল - হিফজ বিভাগ
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>এফ এম ভিলা, শাহ জালাল পাড়া, হাটহাজারী পৌরসভা।</p>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-blue-600" />
                    <span>01628222933</span>
                  </div>
                  <p>
                    দক্ষিণ সুজানগর, পশ্চিম দেওয়ান নগর, ২নং ওয়ার্ড, হাটহাজারী
                    পৌরসভা, চট্টগ্রাম।
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                আমাদের সাথে যোগাযোগ করুন
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      নাম
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ফোন নম্বর
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    বার্তা
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  পাঠান
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-600 text-white p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">
                  তারবিয়াতুল উম্মাহ মাদ্রাসা
                </h3>
              </div>
              <p className="text-gray-400">
                মাদানি নেসাবের পূর্ণাঙ্গ অনুসরণ ও অনুকরণে প্রতিষ্ঠিত।
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">দ্রুত লিঙ্ক</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/dashboard"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ড্যাশবোর্ড
                  </Link>
                </li>
                <li>
                  <Link
                    href="/students"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ছাত্র
                  </Link>
                </li>
                <li>
                  <Link
                    href="/attendance"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    উপস্থিতি
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fees"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ফি
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">যোগাযোগ</h4>
              <div className="space-y-2 text-gray-400">
                <p>01727958565</p>
                <p>01866785878</p>
                <p>01628222933</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 তারবিয়াতুল উম্মাহ মাদ্রাসা। সর্বস্বত্ব সংরক্ষিত।</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

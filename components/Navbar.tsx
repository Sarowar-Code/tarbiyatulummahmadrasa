import { Menu } from "lucide-react";

const Navbar = ({ onToggle }: { onToggle: () => void }) => {
  return (
    <div className="glass-effect shadow-lg p-4 flex items-center backdrop-blur-md bg-white/80 border-b border-white/20">
      <button
        className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={onToggle}
        aria-label="Toggle sidebar"
      >
        <Menu size={24} className="text-gray-700 hover:text-green-600 transition-colors duration-200" />
      </button>
      <h2 className="flex-1 text-center md:text-left text-xl font-bold gradient-text">
        মাদ্রাসা ম্যানেজমেন্ট সিস্টেম
      </h2>
      <div className="hidden md:flex items-center space-x-4">
        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">এ</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

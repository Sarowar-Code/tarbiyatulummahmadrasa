// src/components/StatCard.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StatCard = ({ title, value, icon: Icon }) => {
  return (
    <Card className="card-hover border-0 shadow-md bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        <div className="p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg">
          <Icon className="h-5 w-5 text-white" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold gradient-text">{value}</div>
        <p className="text-xs text-gray-500 mt-1">
          +12% from last month
        </p>
      </CardContent>
    </Card>
  );
};

export default StatCard;

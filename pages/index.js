import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  Eye,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  Filter,
  Download,
  RefreshCw
} from 'lucide-react';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      changeType: "positive",
      icon: DollarSign,
      description: "from last month"
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+180.1%",
      changeType: "positive",
      icon: Users,
      description: "from last month"
    },
    {
      title: "Total Orders",
      value: "12,234",
      change: "+19%",
      changeType: "positive",
      icon: ShoppingCart,
      description: "from last month"
    },
    {
      title: "Page Views",
      value: "573,892",
      change: "-4.3%",
      changeType: "negative",
      icon: Eye,
      description: "from last month"
    }
  ];

  const recentActivity = [
    { id: 1, action: "New user registered", time: "2 minutes ago", type: "user" },
    { id: 2, action: "Order #1234 completed", time: "5 minutes ago", type: "order" },
    { id: 3, action: "Payment received", time: "10 minutes ago", type: "payment" },
    { id: 4, action: "New product added", time: "15 minutes ago", type: "product" },
    { id: 5, action: "User profile updated", time: "20 minutes ago", type: "user" }
  ];

  const topProducts = [
    { name: "Wireless Headphones", sales: 1234, revenue: "$24,680", trend: "up" },
    { name: "Smart Watch", sales: 987, revenue: "$19,740", trend: "up" },
    { name: "Laptop Stand", sales: 756, revenue: "$15,120", trend: "down" },
    { name: "Phone Case", sales: 543, revenue: "$10,860", trend: "up" }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
            <p className="text-white/70">Welcome back! Here's what's happening with your business.</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={refreshing}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Card className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/15 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white/80">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-white/60 group-hover:text-white/80 transition-colors" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="flex items-center text-xs">
                  {stat.changeType === 'positive' ? (
                    <TrendingUp className="w-3 h-3 text-green-400 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-red-400 mr-1" />
                  )}
                  <span className={`font-medium ${
                    stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-white/60 ml-1">{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-white/10 border-white/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Revenue Overview
              </CardTitle>
              <CardDescription className="text-white/70">
                Monthly revenue for the past 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between gap-2">
                {[40, 65, 45, 80, 60, 85].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-sm flex-1 min-h-[20px] opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-white/60">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map(month => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white/10 border-white/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <PieChart className="w-5 h-5 mr-2" />
                Traffic Sources
              </CardTitle>
              <CardDescription className="text-white/70">
                Where your visitors come from
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { source: 'Organic Search', percentage: 45, color: 'bg-blue-500' },
                  { source: 'Direct', percentage: 30, color: 'bg-green-500' },
                  { source: 'Social Media', percentage: 15, color: 'bg-purple-500' },
                  { source: 'Referrals', percentage: 10, color: 'bg-orange-500' }
                ].map((item, index) => (
                  <div key={item.source} className="flex items-center">
                    <div className="w-16 text-sm text-white/80">{item.percentage}%</div>
                    <div className="flex-1 mx-3">
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percentage}%` }}
                          transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                          className={`h-full ${item.color} rounded-full`}
                        />
                      </div>
                    </div>
                    <div className="text-sm text-white/80 w-24">{item.source}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-white/10 border-white/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        activity.type === 'user' ? 'bg-blue-400' :
                        activity.type === 'order' ? 'bg-green-400' :
                        activity.type === 'payment' ? 'bg-yellow-400' :
                        'bg-purple-400'
                      }`} />
                      <span className="text-white/80 text-sm">{activity.action}</span>
                    </div>
                    <span className="text-white/60 text-xs">{activity.time}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-white/10 border-white/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white">Top Products</CardTitle>
              <CardDescription className="text-white/70">
                Best performing products this month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div>
                      <div className="text-white/90 font-medium text-sm">{product.name}</div>
                      <div className="text-white/60 text-xs">{product.sales} sales</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/90 font-medium text-sm">{product.revenue}</div>
                      <div className="flex items-center">
                        {product.trend === 'up' ? (
                          <TrendingUp className="w-3 h-3 text-green-400 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 text-red-400 mr-1" />
                        )}
                        <Badge 
                          variant={product.trend === 'up' ? 'default' : 'destructive'}
                          className="text-xs"
                        >
                          {product.
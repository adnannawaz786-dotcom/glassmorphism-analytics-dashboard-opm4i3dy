import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Separator } from '../components/ui/separator';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Activity, 
  Target, 
  Clock,
  BarChart3,
  PieChart,
  Download,
  Filter,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const MetricsPage = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock metrics data
  const kpiMetrics = [
    {
      id: 1,
      title: 'Active Users',
      value: '24,567',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      description: 'Total active users this period'
    },
    {
      id: 2,
      title: 'Session Duration',
      value: '4m 32s',
      change: '+8.2%',
      trend: 'up',
      icon: Clock,
      description: 'Average session duration'
    },
    {
      id: 3,
      title: 'Conversion Rate',
      value: '3.42%',
      change: '-2.1%',
      trend: 'down',
      icon: Target,
      description: 'Overall conversion rate'
    },
    {
      id: 4,
      title: 'Activity Score',
      value: '87.5',
      change: '+5.3%',
      trend: 'up',
      icon: Activity,
      description: 'User engagement score'
    }
  ];

  const performanceMetrics = [
    {
      category: 'User Engagement',
      metrics: [
        { name: 'Page Views', value: '156,789', progress: 78 },
        { name: 'Bounce Rate', value: '32.1%', progress: 68 },
        { name: 'Time on Site', value: '6m 15s', progress: 85 },
        { name: 'Pages per Session', value: '4.2', progress: 72 }
      ]
    },
    {
      category: 'Conversion Funnel',
      metrics: [
        { name: 'Landing Page Visits', value: '45,678', progress: 92 },
        { name: 'Product Views', value: '28,934', progress: 63 },
        { name: 'Add to Cart', value: '12,456', progress: 43 },
        { name: 'Purchases', value: '3,789', progress: 30 }
      ]
    },
    {
      category: 'Revenue Metrics',
      metrics: [
        { name: 'Total Revenue', value: '$127,890', progress: 88 },
        { name: 'Average Order Value', value: '$89.50', progress: 76 },
        { name: 'Revenue per User', value: '$12.34', progress: 65 },
        { name: 'Monthly Growth', value: '+15.2%', progress: 82 }
      ]
    }
  ];

  const topPerformers = [
    { name: 'Homepage', visits: 45678, conversion: 4.2, revenue: '$23,456' },
    { name: 'Product Catalog', visits: 34567, conversion: 3.8, revenue: '$18,900' },
    { name: 'Landing Page A', visits: 28934, conversion: 5.1, revenue: '$15,670' },
    { name: 'Blog Posts', visits: 23456, conversion: 2.9, revenue: '$8,900' },
    { name: 'About Us', visits: 18765, conversion: 1.8, revenue: '$4,560' }
  ];

  const timeframes = [
    { value: '24h', label: '24 Hours' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' }
  ];

  const categories = [
    { value: 'all', label: 'All Metrics' },
    { value: 'engagement', label: 'Engagement' },
    { value: 'conversion', label: 'Conversion' },
    { value: 'revenue', label: 'Revenue' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Metrics Dashboard</h1>
            <p className="text-slate-300">Detailed performance metrics and KPI tracking</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <div className="flex gap-2">
              {timeframes.map((timeframe) => (
                <Button
                  key={timeframe.value}
                  variant={selectedTimeframe === timeframe.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTimeframe(timeframe.value)}
                  className="backdrop-blur-sm"
                >
                  {timeframe.label}
                </Button>
              ))}
            </div>
            
            <Button variant="outline" size="sm" className="backdrop-blur-sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="backdrop-blur-xl bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <IconComponent className="w-5 h-5 text-blue-400" />
                      <Badge 
                        variant={metric.trend === 'up' ? 'default' : 'destructive'}
                        className="backdrop-blur-sm"
                      >
                        {metric.trend === 'up' ? (
                          <ArrowUpRight className="w-3 h-3 mr-1" />
                        ) : (
                          <ArrowDownRight className="w-3 h-3 mr-1" />
                        )}
                        {metric.change}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold">{metric.value}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {metric.title}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {performanceMetrics.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.2 }}
            >
              <Card className="backdrop-blur-xl bg-white/10 border-white/20 text-white h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-purple-400" />
                    {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {section.metrics.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-300">{metric.name}</span>
                        <span className="font-semibold">{metric.value}</span>
                      </div>
                      <Progress 
                        value={metric.progress} 
                        className="h-2 bg-white/20"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Top Performers Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 text-white">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="w-5 h-5 text-green-400" />
                    Top Performing Pages
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Best performing pages by conversion and revenue
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" className="backdrop-blur-sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-2 text-slate-300 font-medium">Page</th>
                      <th className="text-right py-3 px-2 text-slate-300 font-medium">Visits</th>
                      <th className="text-right py-3 px-2 text-slate-300 font-medium">Conversion</th>
                      <th className="text-right py-3 px-2 text-slate-300 font-medium">Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPerformers.map((page, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-4 px-2">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                              index === 0 ? 'bg-green-400' : 
                              index === 1 ? 'bg-blue-400' : 
                              index === 2 ? 'bg-purple-400' : 'bg-slate-400'
                            }`} />
                            {page.name}
                          </div>
                        </td>
                        <td className="py-4 px-2 text-right font-mono">
                          {page.visits.toLocaleString()}
                        </td>
                        <td className="py-4 px-2 text-right">
                          <Badge variant="outline" className="backdrop-blur-sm">
                            {page.conversion}%
                          </Badge>
                        </td>
                        <td className="py-4 px-2 text-right font-semibold text-green-400">
                          {page.revenue}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="backdrop-blur-xl bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle>Real-time Activity</CardTitle>
                <CardDescription className="text-slate-300">
                  Live user activity and engagement
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Users Online</span>
                  <span className="text-2xl font-bold text-green-400">1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Active Sessions</span>
                  <span className="text-2xl font-bold text-blue-400">892</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Page Views/min</span>
                  <span className="text-2xl font-bold text-purple-400">156</span>
                </div>
                <Separator className="bg-white/20" />
                <div className="text-sm text-slate-400">
                  Last updated: {new Date().toLocaleTimeString()}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <Card className="backdrop-blur-xl bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle>Performance Summary</CardTitle>
                <CardDescription className="text-slate-300">
                  Overall system performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Site Speed</span>
                    <span className="text-green-400">Excellent</span>
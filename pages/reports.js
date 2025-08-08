import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { 
  FileText, 
  Download, 
  Calendar, 
  Filter, 
  TrendingUp, 
  TrendingDown,
  BarChart3,
  PieChart,
  FileBarChart,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const reportCategories = [
    { id: 'all', name: 'All Reports', count: 24 },
    { id: 'sales', name: 'Sales', count: 8 },
    { id: 'marketing', name: 'Marketing', count: 6 },
    { id: 'analytics', name: 'Analytics', count: 5 },
    { id: 'financial', name: 'Financial', count: 5 }
  ];

  const recentReports = [
    {
      id: 1,
      title: 'Monthly Sales Report',
      description: 'Comprehensive sales analysis for December 2024',
      type: 'Sales',
      status: 'completed',
      generatedAt: '2024-01-15 09:30',
      size: '2.4 MB',
      downloads: 156,
      trend: 'up',
      trendValue: '+12.5%'
    },
    {
      id: 2,
      title: 'Customer Behavior Analytics',
      description: 'User engagement and conversion metrics',
      type: 'Analytics',
      status: 'completed',
      generatedAt: '2024-01-14 14:22',
      size: '1.8 MB',
      downloads: 89,
      trend: 'up',
      trendValue: '+8.3%'
    },
    {
      id: 3,
      title: 'Marketing Campaign Performance',
      description: 'ROI analysis for Q4 marketing initiatives',
      type: 'Marketing',
      status: 'processing',
      generatedAt: '2024-01-15 11:45',
      size: '3.1 MB',
      downloads: 0,
      trend: 'down',
      trendValue: '-2.1%'
    },
    {
      id: 4,
      title: 'Financial Summary Q4',
      description: 'Quarterly financial performance overview',
      type: 'Financial',
      status: 'completed',
      generatedAt: '2024-01-13 16:15',
      size: '4.2 MB',
      downloads: 234,
      trend: 'up',
      trendValue: '+15.7%'
    },
    {
      id: 5,
      title: 'Product Performance Analysis',
      description: 'Top performing products and categories',
      type: 'Sales',
      status: 'completed',
      generatedAt: '2024-01-12 10:30',
      size: '2.9 MB',
      downloads: 178,
      trend: 'up',
      trendValue: '+6.4%'
    }
  ];

  const reportStats = [
    {
      title: 'Total Reports',
      value: '247',
      change: '+12',
      changeType: 'increase',
      icon: FileText,
      description: 'Generated this month'
    },
    {
      title: 'Downloads',
      value: '1,429',
      change: '+156',
      changeType: 'increase',
      icon: Download,
      description: 'Total downloads'
    },
    {
      title: 'Processing',
      value: '3',
      change: '-2',
      changeType: 'decrease',
      icon: Clock,
      description: 'Currently processing'
    },
    {
      title: 'Automated',
      value: '89%',
      change: '+5%',
      changeType: 'increase',
      icon: CheckCircle,
      description: 'Automation rate'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'processing':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status) => {
    const variants = {
      completed: 'bg-green-500/10 text-green-500 border-green-500/20',
      processing: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
      error: 'bg-red-500/10 text-red-500 border-red-500/20'
    };
    
    return variants[status] || 'bg-gray-500/10 text-gray-500 border-gray-500/20';
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Sales':
        return <BarChart3 className="h-4 w-4" />;
      case 'Analytics':
        return <PieChart className="h-4 w-4" />;
      case 'Marketing':
        return <TrendingUp className="h-4 w-4" />;
      case 'Financial':
        return <FileBarChart className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Reports</h1>
            <p className="text-slate-400">Generate, manage and download your business reports</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="glass-card border-white/10 text-white hover:bg-white/10">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {reportStats.map((stat, index) => (
            <Card key={index} className="glass-card border-white/10 bg-white/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <span className={`text-sm font-medium ${
                        stat.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {stat.change}
                      </span>
                      <span className="text-slate-400 text-sm ml-1">{stat.description}</span>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <stat.icon className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Categories Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="glass-card border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {reportCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? 'bg-blue-600/20 border border-blue-500/30 text-blue-400'
                        : 'hover:bg-white/5 text-slate-300 hover:text-white'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Reports List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <Card className="glass-card border-white/10 bg-white/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Recent Reports</CardTitle>
                    <CardDescription className="text-slate-400">
                      Your latest generated reports and analytics
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="glass-card border-white/10 text-white hover:bg-white/10">
                      <Calendar className="h-4 w-4 mr-2" />
                      This Month
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentReports.map((report, index) => (
                  <motion.div
                    key={report.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all cursor-pointer border border-white/10"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="p-2 bg-white/10 rounded-lg">
                          {getTypeIcon(report.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-white font-semibold truncate">{report.title}</h3>
                            {getStatusIcon(report.status)}
                          </div>
                          <p className="text-slate-400 text-sm mb-2">{report.description}</p>
                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <span>Generated: {report.generatedAt}</span>
                            <span>Size: {report.size}</span>
                            <span>Downloads: {report.downloads}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 ml-4">
                        <div className="text-right">
                          <Badge className={`${getStatusBadge(report.status)} mb-2`}>
                            {report.status}
                          </Badge>
                          <div className="flex items-center gap-1">
                            {report.trend === 'up' ? (
                              <TrendingUp className="h-3 w-3 text-green-400" />
                            ) : (
                              <TrendingDown className="h-3 w-3 text-red-400" />
                            )}
                            <span className={`text-xs ${
                              report.trend === 'up' ? 'text-green-400' : 'text-red-400'
                            }`}>
                              {report.trendValue}
                            </span>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="glass-card border-white/10 text-white hover:bg-white/10"
                          disabled={report.status === 'processing'}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reports;